import { NextFunction, Response, Request } from "express";
import { CustomError } from "../error/error.model";
import { auth } from "../../firebase";
import { environment } from "../../environment/environment";
import { Result } from "runtypes";
import { LoginModel, LoginType, SignUpModel, SignUpType } from "./auth.model";
import { DecodedIdToken } from "firebase-admin/auth";

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

export const SignUpMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    if (SignUpModel.guard(req.body)) {
        next();
    } else {
        const err: Result<SignUpType> = SignUpModel.validate(req.body);
        const customErr = new CustomError(400, err);
        res.status(customErr.status).send(customErr);
    }
};

export const LoginMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    if (LoginModel.guard(req.body)) {
        next();
    } else {
        const err: Result<LoginType> = LoginModel.validate(req.body);
        const customErr = new CustomError(400, err);
        res.status(customErr.status).send(customErr);
    }
};

export const AuthMiddleware = (req: any, res: Response, next: NextFunction) => {
    return getAuthToken(req, res, async () => {
        const { authToken } = req;
        if (authToken) {
            auth.verifyIdToken(authToken)
                .then((userInfo: DecodedIdToken) => {
                    if (userInfo.email === environment.user.email) return next();
                    else {
                        const message = 'Este usuario no esta autorizado para hacer esta llamada.';
                        const customErr = new CustomError(401, { error: userInfo, message: message });
                        res.status(customErr.status).send(customErr);
                    }
                })
                .catch((err: Error) => {
                    const message = 'Este token no esta autorizado para hacer esta llamada.';
                    const customErr = new CustomError(401, { error: err, message: message });
                    res.status(customErr.status).send(customErr);
                })
        } else {
            const message = 'Necesitas usar un token para hacer esta llamada.';
            const customErr = new CustomError(401, message);
            res.status(customErr.status).send(customErr);
        }
    });
};