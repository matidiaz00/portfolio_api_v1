import { CacheMiddleWare } from "./../app.middleware";
import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { options, specs } from "./swagger.service";
import { AuthMiddleware } from "./../auth/auth.middleware";
import { SwaggerController } from "./swagger.controller";

const router = Router();

router.use('/swagger.json', CacheMiddleWare('5 minutes'), AuthMiddleware);
router.get('/swagger.json', SwaggerController);

router.use('/', swaggerUi.serve);
router.get('/', CacheMiddleWare('5 minutes'), swaggerUi.setup(specs, options));

export default router;