import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../models/error.model';
import { findAll } from './experience.service';

const ExperienceController = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
    try {
        const res = await findAll();
        return response.send(res.data.experiences);
    } catch (err) {
        return new CustomError(500, err)
    }
}
 
export default ExperienceController;