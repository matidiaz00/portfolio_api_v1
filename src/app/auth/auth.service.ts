import { LoginType } from "./auth.model";
import { client_auth, signInWithEmailAndPassword } from "./../../firebase";
import { CustomError } from "./../error/error.model";
import { environment } from "./../../environment/environment";

export const login = async (body: LoginType): Promise<any> => {
    return signInWithEmailAndPassword(client_auth, body.email, body.password)
        .then((userCredential) => {
            if (userCredential.user.email === environment.user.email) return userCredential.user
            else return new CustomError(403, `El usuario ${userCredential.user.email} no tiene permisos para utilizar esta API.`);
        })
        .catch((err) => new CustomError(err.code, err.message) );
}

export const logout = async (): Promise<any> => {
    return client_auth
        .signOut()
        .then((res) => res)
        .catch((err) => new CustomError(500, err) );
}