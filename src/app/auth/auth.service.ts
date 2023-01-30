import { LoginType } from "./auth.model";
import { auth, client_auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "./../../firebase";
import { CustomError } from "./../error/error.model";
import { UserCredential } from "firebase/auth";
import { Request } from "express";
import { DecodedIdToken } from "firebase-admin/auth";

export const login = async (body: LoginType): Promise<any> => {
    const user: LoginType = JSON.parse(process.env.USER);
    return signInOrCreate(body, user)
        .then((userCredential: UserCredential | any) => {
            if (userCredential.user.email === user.email) {
                return userCredential.user.getIdToken(true)
                    .then((idToken: string) => {
                        userCredential['idToken'] = idToken
                        return userCredential
                    })
                    .catch((err: Error) => new CustomError(500, err.message) );
            } else return new CustomError(403, `El usuario ${userCredential.user.email} no tiene permisos para utilizar esta API.`);
        })
        .catch((err) => new CustomError(err.code, err.message) );
}

const signInOrCreate = async (body: LoginType, user: LoginType): Promise<UserCredential | CustomError> => {
    if (body.email === user.email && body.password === user.password) {
        return createUserWithEmailAndPassword(client_auth, body.email, body.password)
            .then((userCredential: UserCredential | any) => userCredential)
            .catch((err) => {
                let message: string = '';
                switch (err.code) {
                    case 'auth/email-already-in-use':
                        return signInWithEmailAndPassword(client_auth, body.email, body.password)
                            .then((userCredential: UserCredential | any) => userCredential)
                            .catch((err) => new CustomError(err.code, err.message) );
                    case 'auth/invalid-email':
                        return message = `Email address ${body.email} is invalid.`;
                    case 'auth/operation-not-allowed':
                        return message = `Error during sign up.`;
                    case 'auth/weak-password':
                        message = 'Password is not strong enough. Add additional characters including special characters and numbers.';
                        return new CustomError(err.code, err.message);
                    default:
                        return new CustomError(err.code, err.message);
                }
            });
    } else return new CustomError(403, "The email address or password is invalid.");
}

export const logout = async (): Promise<any> => {
    return client_auth
        .signOut()
        .then((res) => res)
        .catch((err) => new CustomError(500, err) );
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