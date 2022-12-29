import { NextFunction, Request, Response } from 'express';
import { create, findAll, findOne, update, remove } from './categories.service';

const FindAllController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await findAll();
        response.json(res);
    } catch (err: any) {
        next(err)
    }
}

const CreateController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const res = await create(request.body);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

const FindOneController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const category_id = String(request.params.category_id);
        const res = await findOne(category_id);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

const UpdateController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const category_id = String(request.params.category_id);
        const res = await update(category_id, request.body);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

const RemoveController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
    try {
        const category_id = String(request.params.category_id);
        const res = await remove(category_id);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

export { FindAllController, CreateController, FindOneController, UpdateController, RemoveController }