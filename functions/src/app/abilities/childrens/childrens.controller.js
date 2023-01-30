"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveController = exports.UpdateController = exports.FindOneController = exports.CreateController = exports.FindAllController = void 0;
const childrens_service_1 = require("./childrens.service");
const FindAllController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category_id = String(request.params.category_id);
        const item_id = String(request.params.item_id);
        const res = yield (0, childrens_service_1.findAll)(category_id, item_id);
        response.json(res);
    }
    catch (err) {
        next(err);
    }
});
exports.FindAllController = FindAllController;
const CreateController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (typeof request.body === 'string')
            request.body = JSON.parse(request.body);
        const category_id = String(request.params.category_id);
        const item_id = String(request.params.item_id);
        const res = yield (0, childrens_service_1.create)(category_id, item_id, request.body);
        response.json(res);
    }
    catch (err) {
        next(err);
    }
});
exports.CreateController = CreateController;
const FindOneController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category_id = String(request.params.category_id);
        const item_id = String(request.params.item_id);
        const children_id = String(request.params.children_id);
        const res = yield (0, childrens_service_1.findOne)(category_id, item_id, children_id);
        response.json(res);
    }
    catch (err) {
        next(err);
    }
});
exports.FindOneController = FindOneController;
const UpdateController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (typeof request.body === 'string')
            request.body = JSON.parse(request.body);
        const category_id = String(request.params.category_id);
        const item_id = String(request.params.item_id);
        const children_id = String(request.params.children_id);
        const res = yield (0, childrens_service_1.update)(category_id, item_id, children_id, request.body);
        response.json(res);
    }
    catch (err) {
        next(err);
    }
});
exports.UpdateController = UpdateController;
const RemoveController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category_id = String(request.params.category_id);
        const item_id = String(request.params.item_id);
        const children_id = String(request.params.children_id);
        const res = yield (0, childrens_service_1.remove)(category_id, item_id, children_id);
        response.json(res);
    }
    catch (err) {
        next(err);
    }
});
exports.RemoveController = RemoveController;
