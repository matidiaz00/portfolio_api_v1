import { Router } from "express";
import { LoginController, LogoutController } from "./auth.controller";

const router = Router();

router.post('/login', LoginController);
router.post('/logout', LogoutController);

export default router;