import { LoginInterface, SignUpInterface } from './auth.model';
import { auth, client_auth, signInWithEmailAndPassword } from '../../firebase';
import { CustomError } from '../../models/error.model';
import { environment } from '../../environment/environment';

export const login = async (body: LoginInterface): Promise<any> => {
    return signInWithEmailAndPassword(client_auth, body.email, body.password)
        .then((userCredential) => {
            if (userCredential.user.uid == environment.FIREBASE_USER_UID) return userCredential.user
            else return new CustomError(403, `El usuario con ID ${userCredential.user.uid} no tiene permisos para utilizar esta API.`);
        })
        .catch((err) => new CustomError(500, err) );
}

export const signup = async (body: SignUpInterface): Promise<any> => {
    return auth
        .createUser({
            email: body.email,
            emailVerified: false,
            phoneNumber: body.phone,
            password: body.password,
            displayName: body.name,
            photoURL: 'http://www.example.com/12345678/photo.png',
            disabled: false,
        })
        .then((userRecord) => userRecord)
        .catch((err) => new CustomError(500, err) );
}