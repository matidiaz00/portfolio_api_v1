import { Router } from "express";
import { CreateController, FindAllController, FindOneController, RemoveController, UpdateController } from "./categories.controller";
import ItemsRouting from "./../items/items.route";
import AbilitiesMiddleware from "./../abilities.middleware";
import { CacheMiddleWare } from "./../../app.middleware";
import { AuthMiddleware } from "./../../auth/auth.middleware";

const router = Router();

router.get('/', CacheMiddleWare('5 minutes'), FindAllController);
router.post('/', [AuthMiddleware, AbilitiesMiddleware], CreateController);
router.get('/:category_id', CacheMiddleWare('5 minutes'), FindOneController);
router.patch('/:category_id', [AuthMiddleware, AbilitiesMiddleware], UpdateController);
router.delete('/:category_id', AuthMiddleware, RemoveController);

router.use('/:category_id/items', ItemsRouting);

export default router;