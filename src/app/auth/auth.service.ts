import { LoginType } from "./auth.model";
import { auth, client_auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "./../../firebase";
import { CustomError } from "./../error/error.model";
import { UserCredential } from "firebase/auth";
import { Request } from "express";
import { DecodedIdToken } from "firebase-admin/auth";
import { USER } from "config";

export const login = async (body: LoginType): Promise<any> => {
    const user: LoginType = JSON.parse(USER.toString());
    try {
        const userCredential: UserCredential | CustomError | any = await signInOrCreate(body, user);
        if (userCredential.user.email === user.email) {
            try {
                const idToken: string = await userCredential.user.getIdToken(true);
                userCredential['idToken'] = idToken
                return userCredential
            } catch (err: any) {
                return new CustomError(500, err.message)
            }
        } else return new CustomError(403, `El usuario ${userCredential.user.email} no tiene permisos para utilizar esta API.`);
    } catch (err: any) {
        return new CustomError(err.code, err.message)
    }
}

const signInOrCreate = async (body: LoginType, user: LoginType): Promise<UserCredential | CustomError> => {
    if (body.email === user.email && body.password === user.password) {
        try {
            const userCredential: UserCredential = await createUserWithEmailAndPassword(client_auth, body.email, body.password);
            return userCredential
        } catch (err: any) {
            let message: string = '';
            switch (err.code) {
                case 'auth/email-already-in-use':
                    try {
                        const userCredential: UserCredential = await signInWithEmailAndPassword(client_auth, body.email, body.password);
                        return userCredential
                    } catch (err: any) {
                        return new CustomError(err.code, err.message)
                    }
                case 'auth/invalid-email':
                    message = `Email address ${body.email} is invalid.`;
                    return new CustomError(err.code, message);
                case 'auth/operation-not-allowed':
                    message = `Error during sign up.`;
                    return new CustomError(err.code, message);
                case 'auth/weak-password':
                    message = 'Password is not strong enough. Add additional characters including special characters and numbers.';
                    return new CustomError(err.code, message);
                default:
                    return new CustomError(err.code, err.message);
            }
        }
    } else return new CustomError(403, "The email address or password is invalid.");
}

export const logout = async (): Promise<any> => {
    try {
        const res = await client_auth.signOut();
        return res
    } catch (err) {
        return new CustomError(500, err)
    }
}

export const currentUser = async (headers: Request["headers"]): Promise<DecodedIdToken | CustomError> => {
    const autorization = headers.authorization ? headers.authorization.split(' ') : undefined;
    if (autorization && autorization[0] === 'Bearer') {
        try {
            const decodedToken = await auth.verifyIdToken(autorization[1]);
            return decodedToken;
        } catch (err) {
            return new CustomError(500, err)
        }
    } else {
        return new CustomError(403, "Necesitas un token para hacer esta llamada.")
    }
}