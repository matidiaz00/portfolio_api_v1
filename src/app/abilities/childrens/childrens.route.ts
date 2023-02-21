import { CacheMiddleWare } from "./../../app.middleware";
import { Router } from "express";
import AbilitiesMiddleware from "./../abilities.middleware";
import { AuthMiddleware } from "./../../auth/auth.middleware";
import { FindAllController, CreateController, FindOneController, RemoveController, UpdateController } from "./childrens.controller";

const router = Router();

router.get('/', CacheMiddleWare('5 minutes'), FindAllController);
router.post('/', [AuthMiddleware, AbilitiesMiddleware], CreateController);
router.get('/:children_id', CacheMiddleWare('5 minutes'), FindOneController);
router.patch('/:children_id', [AuthMiddleware, AbilitiesMiddleware], UpdateController);
router.delete('/:children_id', AuthMiddleware, RemoveController);

export default router;