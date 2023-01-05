import { CacheMiddleWare } from "./../app.middleware";
import { Router } from "express";
import AbilitiesController from "./abilities.controller";
import CategoriesRouting from "./categories/categories.route";

const router = Router();

router.get('/all', CacheMiddleWare('5 minutes'), AbilitiesController);

router.use('/', CategoriesRouting);

export default router;