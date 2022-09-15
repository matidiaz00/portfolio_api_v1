import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../models/error.model';
import { findAll } from './abilities.service';

const AbilitiesController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await findAll();
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}
 
export default AbilitiesController;