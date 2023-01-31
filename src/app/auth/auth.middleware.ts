import { NextFunction, Response, Request } from "express";
import { CustomError } from "./../error/error.model";
import { auth } from "./../../firebase";
import { Result } from "runtypes";
import { LoginModel, LoginType } from "./auth.model";
import { DecodedIdToken } from "firebase-admin/auth";

export interface IGetAuthTokenRequest extends Request {
    authToken: string | null;
    authId: string;
}

export const LoginMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    if (typeof req.body === 'string') req.body = JSON.parse(req.body)
    if (LoginModel.guard(req.body)) {
        next();
    } else {
        const err: Result<LoginType> = LoginModel.validate(req.body);
        const customErr = new CustomError(400, err);
        res.status(customErr.status).json(customErr);
    }
};

const getAuthToken = (req: any, res: Response, next: NextFunction) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        req.authToken = req.headers.authorization.split(' ')[1];
    } else {
        req.authToken = null;
    }
    return next();
};

export const AuthMiddleware = (req: any, res: Response, next: NextFunction) => {
    return getAuthToken(req, res, async () => {
        const { authToken } = req;
        if (authToken) {
            try {
                const userInfo: DecodedIdToken = await auth.verifyIdToken(authToken);
                if (userInfo.email === JSON.parse(process.env.USER).email) return next();
                else {
                    const message = 'Este usuario no esta autorizado para hacer esta llamada.';
                    const customErr = new CustomError(401, { error: userInfo, message: message });
                    res.status(customErr.status).json(customErr);
                }
            } catch (err: any) {
                const message = 'Este token no esta autorizado para hacer esta llamada.';
                const customErr = new CustomError(401, { error: err, message: message });
                res.status(customErr.status).json(customErr);
            }
        } else {
            const message = 'Necesitas usar un token para hacer esta llamada.';
            const customErr = new CustomError(401, message);
            res.status(customErr.status).json(customErr);
        }
    });
};