import { Router } from "express";
import { FindAllController, CreateController, FindOneController, UpdateController, RemoveController } from "./items.controller";
import ChildrenRouting from "./../childrens/childrens.route";
import AbilitiesMiddleware from "./../abilities.middleware";
import { CacheMiddleWare } from "./../../app.middleware";

const router = Router();

router.get('/', CacheMiddleWare('5 minutes'), FindAllController);
router.post('/', AbilitiesMiddleware, CreateController);
router.get('/:item_id', CacheMiddleWare('5 minutes'), FindOneController);
router.patch('/:item_id', AbilitiesMiddleware, UpdateController);
router.delete('/:item_id', RemoveController);

router.use('/:item_id/childrens', ChildrenRouting);

export default router;