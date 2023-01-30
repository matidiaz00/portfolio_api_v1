import { Request, Response, NextFunction } from "express";
import { login, logout, currentUser } from "./auth.service";

const CurrentUserController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await currentUser(request.headers);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

const LoginController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        if (typeof request.body === 'string') request.body = JSON.parse(request.body)
        const res = await login(request.body);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

const LogoutController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await logout();
        response.json(res);
    } catch (err) {
        next(err)
    }
}

export { LoginController, LogoutController, CurrentUserController };