import { CacheMiddleWare } from "./../app.middleware";
import { Router } from "express";
import { ExperienceController, FindByTypeController } from "./experience.controller";

const router = Router();

/**
 * @swagger
 * /experience:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/

router.get('/', CacheMiddleWare('5 minutes'), ExperienceController);
router.get('/:category', CacheMiddleWare('5 minutes'), FindByTypeController);

export default router;