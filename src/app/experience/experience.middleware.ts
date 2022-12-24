import { NextFunction, Response, Request } from "express";
import { CustomError } from "../error/error.model";
import { ExperienceModel, ExperienceType } from "./experience.model";
import { Result } from "runtypes";

const ExperienceMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    if (ExperienceModel.guard(req.body)) {
        next();
    } else {
        const err: Result<ExperienceType> = ExperienceModel.validate(req.body);
        const customErr = new CustomError(400, err);
        console.error(customErr);
        res.status(customErr.status).send(customErr);
    }
};

export default ExperienceMiddleware