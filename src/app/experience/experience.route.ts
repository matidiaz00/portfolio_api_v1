import { CacheMiddleWare } from "./../app.middleware";
import { Router } from "express";
import { ExperienceController, FindByTypeController } from "./experience.controller";
import { AuthMiddleware } from "./../auth/auth.middleware";

const router = Router();

router.use('*', AuthMiddleware);
router.get('/', CacheMiddleWare('5 minutes'), ExperienceController);
router.get('/:category', CacheMiddleWare('5 minutes'), FindByTypeController);

export default router;