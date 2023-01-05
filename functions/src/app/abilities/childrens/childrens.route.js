"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_middleware_1 = require("./../../app.middleware");
const express_1 = require("express");
const abilities_middleware_1 = __importDefault(require("./../abilities.middleware"));
const childrens_controller_1 = require("./childrens.controller");
const router = (0, express_1.Router)();
router.get('/', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), childrens_controller_1.FindAllController);
router.post('/', abilities_middleware_1.default, childrens_controller_1.CreateController);
router.get('/:children_id', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), childrens_controller_1.FindOneController);
router.patch('/:children_id', abilities_middleware_1.default, childrens_controller_1.UpdateController);
router.delete('/:children_id', childrens_controller_1.RemoveController);
exports.default = router;
