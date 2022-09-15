import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../../models/error.model';
import { create, findAll, findOne, update, remove } from './childrens.service';

const FindAllController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await findAll(request.params.category_id, request.params.item_id);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

const CreateController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    // body = createDto: DataItemsInterface
    try {
        const res = await create(request.params.category_id, request.params.item_id, request.body);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

const FindOneController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await findOne(request.params.category_id, request.params.item_id, request.params.children_id);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

const UpdateController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    // body = createDto: DataItemsInterface
    try {
        const res = await update(request.params.category_id, request.params.item_id, request.params.children_id, request.body);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

const RemoveController = async (request: Request, response: Response, next: NextFunction): Promise<any> => { 
    try {
        const res = await remove(request.params.category_id, request.params.item_id, request.params.children_id);
        return response.send(res);
    } catch (err) {
        return new CustomError(500, err)
    }
}

export { FindAllController, CreateController, FindOneController, UpdateController, RemoveController }