import { NextFunction, Response, Request } from "express";
import { CustomError } from "../models/error.model";
import { auth } from "../firebase";

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
                    if (userInfo.uid != 'RDuxbgSvGmUkw9CzkkvNOea8Dy13') return next();
                    else new CustomError(401, 'You are not authorized to make this request')
                })
                .catch(err => new CustomError(401, {error: err, message: 'You are not authorized to make this request' }))
        } else return new CustomError(401, 'You are not authorized to make this request');
    });
};

export default AuthMiddleware