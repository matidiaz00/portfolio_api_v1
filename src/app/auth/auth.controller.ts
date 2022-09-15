import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../models/error.model';
import { login, signup } from './auth.service';

const LoginController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await login(request.body);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

const SignUpController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await signup(request.body);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

export { LoginController, SignUpController };