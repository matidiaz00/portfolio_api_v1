"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_middleware_1 = require("./../app.middleware");
const express_1 = require("express");
const experience_controller_1 = require("./experience.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /experience:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.get('/', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), experience_controller_1.ExperienceController);
router.get('/:category', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), experience_controller_1.FindByTypeController);
exports.default = router;
