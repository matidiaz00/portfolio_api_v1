import { NextFunction, Request, Response } from "express";
import { create, findAll, findOne, update, remove } from "./childrens.service";

const FindAllController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const category_id = String(request.params.category_id);
        const item_id = String(request.params.item_id);
        const res = await findAll(category_id, item_id);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

const CreateController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const category_id = String(request.params.category_id);
        const item_id = String(request.params.item_id);
        const res = await create(category_id, item_id, request.body);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

const FindOneController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const category_id = String(request.params.category_id);
        const item_id = String(request.params.item_id);
        const children_id = String(request.params.children_id);
        const res = await findOne(category_id, item_id, children_id);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

const UpdateController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const category_id = String(request.params.category_id);
        const item_id = String(request.params.item_id);
        const children_id = String(request.params.children_id);
        const res = await update(category_id, item_id, children_id, request.body);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

const RemoveController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
        const category_id = String(request.params.category_id);
        const item_id = String(request.params.item_id);
        const children_id = String(request.params.children_id);
        const res = await remove(category_id, item_id, children_id);
        response.json(res);
    } catch (err) {
        next(err)
    }
}

export { FindAllController, CreateController, FindOneController, UpdateController, RemoveController }