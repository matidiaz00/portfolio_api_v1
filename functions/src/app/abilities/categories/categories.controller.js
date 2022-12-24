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
const categories_service_1 = require("./categories.service");
const FindAllController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, categories_service_1.findAll)();
        response.send(res);
    }
    catch (err) {
        next(err);
    }
});
exports.FindAllController = FindAllController;
const CreateController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, categories_service_1.create)(request.body);
        response.send(res);
    }
    catch (err) {
        next(err);
    }
});
exports.CreateController = CreateController;
const FindOneController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, categories_service_1.findOne)(request.params.category_id);
        response.send(res);
    }
    catch (err) {
        next(err);
    }
});
exports.FindOneController = FindOneController;
const UpdateController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, categories_service_1.update)(request.params.category_id, request.body);
        response.send(res);
    }
    catch (err) {
        next(err);
    }
});
exports.UpdateController = UpdateController;
const RemoveController = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, categories_service_1.remove)(request.params.category_id);
        response.send(res);
    }
    catch (err) {
        next(err);
    }
});
exports.RemoveController = RemoveController;
