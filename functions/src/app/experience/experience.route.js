"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_middleware_1 = require("./../app.middleware");
const express_1 = require("express");
const experience_controller_1 = require("./experience.controller");
const router = (0, express_1.Router)();
router.get('/', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), experience_controller_1.ExperienceController);
router.get('/:category', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), experience_controller_1.FindByTypeController);
exports.default = router;
