import { NextFunction, Request, Response } from 'express';
import { create, findAll, findOne, update, remove } from './categories.service';

const FindAllController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await findAll();
        response.send(res);
    } catch (err: any) {
        next(err)
    }
}

const CreateController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await create(request.body);
        response.send(res);
    } catch (err) {
        next(err)
    }
}

const FindOneController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await findOne(request.params.category_id);
        response.send(res);
    } catch (err) {
        next(err)
    }
}

const UpdateController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await update(request.params.category_id, request.body);
        response.send(res);
    } catch (err) {
        next(err)
    }
}

const RemoveController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await remove(request.params.category_id);
        response.send(res);
    } catch (err) {
        next(err)
    }
}

export { FindAllController, CreateController, FindOneController, UpdateController, RemoveController }