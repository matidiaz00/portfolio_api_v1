import { CacheMiddleWare } from "./../app.middleware";
import { Router } from "express";
import AbilitiesController from "./abilities.controller";
import CategoriesRouting from "./categories/categories.route";

const router = Router();

/**
 * @swagger
 * /abilities:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/

router.get('/', CacheMiddleWare('5 minutes'), AbilitiesController);

router.use('/categories', CategoriesRouting);

export default router;