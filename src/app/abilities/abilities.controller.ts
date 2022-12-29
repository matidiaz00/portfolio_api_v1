import { NextFunction, Request, Response } from 'express';
import { findAll } from './abilities.service';

const AbilitiesController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await findAll();
        response.json(res);
    } catch (err) {
        next(err)
    }
}
 
export default AbilitiesController;