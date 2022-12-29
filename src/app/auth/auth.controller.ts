import { Request, Response, NextFunction } from 'express';
import { login, signup } from './auth.service';

const LoginController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await login(request.body);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

const SignUpController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await signup(request.body);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

export { LoginController, SignUpController };