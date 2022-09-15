import { Request, Response, NextFunction } from 'express';
import { swagger } from './swagger.service';

const SwaggerController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await swagger();
        return response.send(res);
    } catch (err) {
        return response.status(500).send(err);
    }
}
 
export default SwaggerController;