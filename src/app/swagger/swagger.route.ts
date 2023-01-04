import { CacheMiddleWare } from "./../app.middleware";
import { Router } from "express";
import swaggerUi, { SwaggerOptions } from "swagger-ui-express";
import { specs, customSwaggerCSS } from "./swagger.service";

const router = Router();

const options: SwaggerOptions = {
    customCssUrl: customSwaggerCSS
}

router.use('/', swaggerUi.serve);
router.get('/', CacheMiddleWare('5 minutes'), swaggerUi.setup(specs, options));

export default router;