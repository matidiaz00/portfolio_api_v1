import type { NextFunction, ErrorRequestHandler, Request, Response } from "express";
import { CustomError } from "./../models/error.model";

const ErrorMiddleware: ErrorRequestHandler = (err: TypeError | CustomError, req: Request, res: Response, next: NextFunction) => {
    let customError = err;
    console.error(err);
    if (!(err instanceof CustomError)) {
        customError = new CustomError(500);
    }
    res.status((customError as CustomError).status).send(customError);
}

export default ErrorMiddleware;