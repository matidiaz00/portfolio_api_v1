import { Request, Response, NextFunction } from "express";
import { login, logout } from "./auth.service";

const LoginController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
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

export { LoginController, LogoutController };