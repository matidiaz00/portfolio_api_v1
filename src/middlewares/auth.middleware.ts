import { NextFunction, Response, Request } from "express";
import { CustomError } from "../models/error.model";
import { auth } from "../firebase";
import { environment } from "../environment/environment";

export interface IGetAuthTokenRequest extends Request {
    authToken: string | null;
    authId: string;
}
  
const getAuthToken = (req: any, res: Response, next: NextFunction) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        req.authToken = req.headers.authorization.split(' ')[1];
    } else {
        req.authToken = null;
    }
    return next();
};

const AuthMiddleware = (req: any, res: Response, next: NextFunction) => {
    return getAuthToken(req, res, async () => {
        const { authToken } = req;
        if (authToken) {
            auth.verifyIdToken(authToken)
                .then(userInfo => {
                    if (userInfo.uid != environment.FIREBASE_USER_UID) return next();
                    else {
                        const message = 'Este usuario no esta autorizado para hacer esta llamada.';
                        const customErr = new CustomError(401, { error: userInfo, message: message });
                        console.error(customErr);
                        res.status(customErr.status).send(customErr);
                    }
                })
                .catch(err => {
                    const message = 'Este token no esta autorizado para hacer esta llamada.';
                    const customErr = new CustomError(401, { error: err, message: message });
                    console.error(customErr);
                    res.status(customErr.status).send(customErr);
                })
        } else {
            const message = 'Necesitas usar un token para hacer esta llamada.';
            const customErr = new CustomError(401, message);
            console.error(customErr);
            res.status(customErr.status).send(customErr);
        }
    });
};

export default AuthMiddleware