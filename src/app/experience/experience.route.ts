import { CacheMiddleWare } from "./../app.middleware";
import { Router } from "express";
import { ExperienceController, FindByTypeController } from "./experience.controller";

const router = Router();

router.get('/', CacheMiddleWare('5 minutes'), ExperienceController);
router.get('/:category', CacheMiddleWare('5 minutes'), FindByTypeController);

export default router;