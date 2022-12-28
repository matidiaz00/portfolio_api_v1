import { LoginType, SignUpType } from './auth.model';
import { auth, client_auth, signInWithEmailAndPassword } from '../../firebase';
import { CustomError } from '../error/error.model';
import { environment } from '../../environment/environment';

export const login = async (body: LoginType): Promise<any> => {
    return signInWithEmailAndPassword(client_auth, body.email, body.password)
        .then((userCredential) => {
            if (userCredential.user.email === environment.user.email) return userCredential.user
            else return new CustomError(403, `El usuario ${userCredential.user.email} no tiene permisos para utilizar esta API.`);
        })
        .catch((err) => new CustomError(500, err) );
}

export const signup = async (body: SignUpType): Promise<any> => {
    return auth
        .createUser({
            email: body.email,
            emailVerified: false,
            phoneNumber: body.phone.toString(),
            password: body.password,
            displayName: body.name,
            photoURL: 'http://www.example.com/12345678/photo.png',
            disabled: false,
        })
        .then((userRecord) => userRecord)
        .catch((err) => new CustomError(500, err) );
}