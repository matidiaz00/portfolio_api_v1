import { Router } from "express";
import { FindAllController, CreateController, FindOneController, UpdateController, RemoveController } from "./items.controller";
import ChildrenRouting from "./../childrens/childrens.route";
import AbilitiesMiddleware from "./../abilities.middleware";
import { CacheMiddleWare } from "./../../app.middleware";
import { AuthMiddleware } from "./../../auth/auth.middleware";

const router = Router();

router.get('/', CacheMiddleWare('5 minutes'), FindAllController);
router.post('/', [AuthMiddleware, AbilitiesMiddleware], CreateController);
router.get('/:item_id', CacheMiddleWare('5 minutes'), FindOneController);
router.patch('/:item_id', [AuthMiddleware, AbilitiesMiddleware], UpdateController);
router.delete('/:item_id', AuthMiddleware, RemoveController);

router.use('/:item_id/childrens', ChildrenRouting);

export default router;