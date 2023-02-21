"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const items_controller_1 = require("./items.controller");
const childrens_route_1 = __importDefault(require("./../childrens/childrens.route"));
const abilities_middleware_1 = __importDefault(require("./../abilities.middleware"));
const app_middleware_1 = require("./../../app.middleware");
const auth_middleware_1 = require("./../../auth/auth.middleware");
const router = (0, express_1.Router)();
router.get('/', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), items_controller_1.FindAllController);
router.post('/', [auth_middleware_1.AuthMiddleware, abilities_middleware_1.default], items_controller_1.CreateController);
router.get('/:item_id', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), items_controller_1.FindOneController);
router.patch('/:item_id', [auth_middleware_1.AuthMiddleware, abilities_middleware_1.default], items_controller_1.UpdateController);
router.delete('/:item_id', auth_middleware_1.AuthMiddleware, items_controller_1.RemoveController);
router.use('/:item_id/childrens', childrens_route_1.default);
exports.default = router;
