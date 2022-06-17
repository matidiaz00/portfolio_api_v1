import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    auth: any;

    constructor(
        @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin
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
                            if (decodedToken.uid == process.env.MAIN_FIREBASE_USER_UID) resolve(true)
                            else {
                                console.error(`The user ${decodedToken.email} not has permission for application.`);
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
