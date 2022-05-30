import { Injectable } from '@nestjs/common';
import { Auth } from 'firebase-admin/lib/auth/auth';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { SignUpInterface } from './auth.interface';

@Injectable()
export class AuthService {

    auth: Auth;

    constructor(
        @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin
    ) {
        this.auth = this.firebase.auth;
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
                console.log('Successfully created new user:', userRecord.uid);
                return userRecord
            })
            .catch((err) => {
                console.error('Error creating new user:', err);
                return err
            });
    }

}