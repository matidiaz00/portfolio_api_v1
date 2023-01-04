import { Router } from "express";
import { LoginController, LogoutController } from "./auth.controller";

const router = Router();

/**
 * @swagger
 * /auth:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/

router.post('/login', LoginController);
router.post('/logout', LogoutController);

export default router;