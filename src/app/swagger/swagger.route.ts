import { CacheMiddleWare } from "./../app.middleware";
import { Router } from "express";
import { SwaggerController } from "./swagger.controller";

const router = Router();

router.use('/', CacheMiddleWare('5 minutes'));
router.get('/', SwaggerController);

export default router;