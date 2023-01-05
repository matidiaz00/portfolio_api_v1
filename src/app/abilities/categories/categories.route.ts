import { Router } from "express";
import { CreateController, FindAllController, FindOneController, RemoveController, UpdateController } from "./categories.controller";
import ItemsRouting from "./../items/items.route";
import AbilitiesMiddleware from "./../abilities.middleware";
import { CacheMiddleWare } from "./../../app.middleware";

const router = Router();

router.get('/', CacheMiddleWare('5 minutes'), FindAllController);
router.post('/', AbilitiesMiddleware, CreateController);
router.get('/:category_id', CacheMiddleWare('5 minutes'), FindOneController);
router.patch('/:category_id', AbilitiesMiddleware, UpdateController);
router.delete('/:category_id', RemoveController);

router.use('/:category_id/items', ItemsRouting);

export default router;