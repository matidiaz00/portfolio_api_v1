import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    auth: any;

    constructor(
        @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
        private _config: ConfigService,
    ) {
        this.auth = this.firebase.auth;
    }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization.replace('Bearer ', '')
        return new Promise(
            (resolve, reject) => {
                if (token != null && token != '') {
                    this.auth.verifyIdToken(token)
                        .then((decodedToken: DecodedIdToken) => {
                            const FIREBASE_USER_UID = this._config.get<string>('MAIN_FIREBASE_USER_UID');
                            if (FIREBASE_USER_UID) {
                                if (decodedToken.uid == FIREBASE_USER_UID) resolve(true)
                                else {
                                    console.error(`The user ${decodedToken.email} not has permission for application.`);
                                    reject(false)
                                }
                            } else {
                                console.error(`Error when read .env file and get FIREBASE_USER_UID, this return: `, FIREBASE_USER_UID);
                                reject(false)
                            }
                        }).catch((err: Error) => {
                            console.error(err);
                            reject(false)
                        })
                } else {
                    console.error(`In this application is neccesary use autentication (token) and your send this info: `, request.headers);
                    reject(false)
                }
            }
        )
    }
}
