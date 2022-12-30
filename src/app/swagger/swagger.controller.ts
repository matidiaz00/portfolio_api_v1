import { Request, Response, NextFunction } from "express";
import { swagger } from "./swagger.service";

const SwaggerController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await swagger();
        return response.json(res);
    } catch (err) {
        return response.status(500).json(err);
    }
}
 
export default SwaggerController;