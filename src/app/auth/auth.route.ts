import { CacheMiddleWare } from "./../app.middleware";
import { Router } from "express";
import { LoginController, LogoutController, CurrentUserController } from "./auth.controller";
import { AuthMiddleware } from "./auth.middleware";

const router = Router();

router.use('/user', CacheMiddleWare('5 minutes'), AuthMiddleware);
router.get('/user', CurrentUserController);

router.post('/login', LoginController);
router.get('/logout', LogoutController);

export default router;