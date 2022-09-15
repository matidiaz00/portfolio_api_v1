import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../models/error.model';
import { main } from './main.service';

const MainController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await main();
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}
 
export default MainController;