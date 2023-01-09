import { LoginType } from "./auth.model";
import { auth, client_auth, signInWithEmailAndPassword } from "./../../firebase";
import { CustomError } from "./../error/error.model";
import { environment } from "./../../environment/environment";
import { UserCredential } from "firebase/auth";
import { Request } from "express";
import { DecodedIdToken } from "firebase-admin/auth";

export const login = async (body: LoginType): Promise<any> => {
    return signInWithEmailAndPassword(client_auth, body.email, body.password)
        .then((userCredential: UserCredential | any) => {
            if (userCredential.user.email === environment.user.email) {
                return userCredential.user.getIdToken(/* forceRefresh */ true)
                    .then((idToken: string) => {
                        userCredential['idToken'] = idToken
                        return userCredential
                    })
                    .catch((err: Error) => new CustomError(500, err.message) );
            } else return new CustomError(403, `El usuario ${userCredential.user.email} no tiene permisos para utilizar esta API.`);
        })
        .catch((err) => new CustomError(err.code, err.message) );
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