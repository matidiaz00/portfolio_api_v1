import { Injectable } from '@nestjs/common';
import { Auth } from 'firebase-admin/lib/auth/auth';
import { client_auth } from '../firebase.client'
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { SignUpInterface, LoginInterface } from './auth.interface';
import { signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class AuthService {

    auth: Auth;

    constructor(
        @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
    ) {
        this.auth = this.firebase.auth;
    }

    async login(body: LoginInterface) {
        return signInWithEmailAndPassword(client_auth, body.email, body.password)
            .then((userCredential) => {
                if (userCredential.user.uid == process.env.MAIN_FIREBASE_USER_UID) return userCredential
                else return { message:'Lo sentimos pero este usuario no tiene permisos' }
            })
            .catch((err) => {
                return err
            });
    }

    async signup(body: SignUpInterface) {
        return this.auth
            .createUser({
                email: body.email,
                emailVerified: false,
                phoneNumber: body.phone,
                password: body.password,
                displayName: body.name,
                photoURL: 'http://www.example.com/12345678/photo.png',
                disabled: false,
            })
            .then((userRecord) => {
                return userRecord
            })
            .catch((err) => {
                return err
            });
    }

}