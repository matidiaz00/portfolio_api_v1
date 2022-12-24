import { NextFunction, Request, Response } from 'express';
import { create, findAll, findOne, update, remove } from './childrens.service';

const FindAllController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const res = await findAll(request.params.category_id, request.params.item_id);
        response.send(res);
    } catch (err) {
        next(err)
    }
}

const CreateController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const res = await create(request.params.category_id, request.params.item_id, request.body);
        response.send(res);
    } catch (err) {
        next(err)
    }
}

const FindOneController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const res = await findOne(request.params.category_id, request.params.item_id, request.params.children_id);
        response.send(res);
    } catch (err) {
        next(err)
    }
}

const UpdateController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const res = await update(request.params.category_id, request.params.item_id, request.params.children_id, request.body);
        response.send(res);
    } catch (err) {
        next(err)
    }
}

const RemoveController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const res = await remove(request.params.category_id, request.params.item_id, request.params.children_id);
        response.send(res);
    } catch (err) {
        next(err)
    }
}

export { FindAllController, CreateController, FindOneController, UpdateController, RemoveController }