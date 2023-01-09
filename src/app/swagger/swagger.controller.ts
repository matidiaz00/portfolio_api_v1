import { Request, Response, NextFunction } from "express";
import { specs } from "./swagger.service";

const SwaggerController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        response.json(specs);
    } catch (err) {
        next(err)
    }
}

export { SwaggerController };