import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../../models/error.model';
import { create, findAll, findOne, update, remove } from './categories.service';

const FindAllController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await findAll();
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

const CreateController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await create(request.body);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

const FindOneController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await findOne(request.params.category_id);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

const UpdateController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await update(request.params.category_id, request.body);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

const RemoveController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await remove(request.params.category_id);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

export { FindAllController, CreateController, FindOneController, UpdateController, RemoveController }