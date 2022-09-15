import { Request, Response, NextFunction } from 'express';
import { error } from './error.service';

const ErrorController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await error();
        return response.send(res);
    } catch (err) {
        return response.status(500).send(err);
    }
}
 
export default ErrorController;