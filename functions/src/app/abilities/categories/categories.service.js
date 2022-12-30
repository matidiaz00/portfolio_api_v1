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
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = void 0;
const firebase_1 = require("./../../../firebase");
const error_model_1 = require("./../../error/error.model");
const collName = 'abilities';
let collRef = firebase_1.db.collection(collName);
const create = (createDto) => __awaiter(void 0, void 0, void 0, function* () {
    const docRef = collRef.doc();
    yield docRef.set(createDto);
    const newDocRef = collRef.doc(docRef.id);
    const newDoc = yield newDocRef.get();
    const res = newDoc.data();
    res['id'] = newDoc.id;
    return res;
});
exports.create = create;
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = yield collRef.get();
    let data = [];
    snapshot.forEach((doc) => {
        const res = doc.data();
        res['id'] = doc.id;
        data.push(res);
    });
    return data;
});
exports.findAll = findAll;
const findOne = (category_id) => __awaiter(void 0, void 0, void 0, function* () {
    const docRef = collRef.doc(category_id);
    const doc = yield docRef.get();
    if (!doc.exists)
        return new error_model_1.CustomError(500, `El documento #${category_id} no existe en: /abilities/categories".`);
    else {
        const res = doc.data();
        res['id'] = doc.id;
        return res;
    }
});
exports.findOne = findOne;
const update = (category_id, updateDto) => __awaiter(void 0, void 0, void 0, function* () {
    const docRef = collRef.doc(category_id);
    yield docRef.set(updateDto);
    const doc = yield docRef.get();
    if (!doc.exists)
        return new error_model_1.CustomError(500, `El documento #${category_id} no existe en: /abilities/categories".`);
    else {
        const res = doc.data();
        res['id'] = doc.id;
        return res;
    }
});
exports.update = update;
const remove = (category_id) => __awaiter(void 0, void 0, void 0, function* () {
    const docRef = collRef.doc(category_id);
    const res = yield docRef.delete();
    if (res)
        return new error_model_1.CustomError(200, `El documento #${category_id} se eliminó exitosamente de: /abilities/categories".`);
    else
        return new error_model_1.CustomError(500, `Error al intentar eliminar el documento #${category_id} de: /abilities/categories".`);
});
exports.remove = remove;
