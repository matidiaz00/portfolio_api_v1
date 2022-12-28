import type { NextFunction, ErrorRequestHandler, Request, Response } from "express";
import { CustomError } from "./error.model";

const ErrorMiddleware: ErrorRequestHandler = (err: TypeError | CustomError, req: Request, res: Response, next: NextFunction) => {
    let customError = err;
    if (!(err instanceof CustomError)) {
        const error = err.message ? err.message : err;
        customError = new CustomError(500, error);
    }
    res.status((customError as CustomError).status).send(customError);
}

export default ErrorMiddleware;