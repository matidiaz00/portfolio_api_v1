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
const error_model_1 = require("../../../models/error.model");
const firebase_1 = require("../../../firebase");
const collName = 'abilities';
const collItemName = 'items';
const collChildrenName = 'childrens';
let collRef = firebase_1.db.collection(collName);
const create = (category_id, item_id, createDto) => __awaiter(void 0, void 0, void 0, function* () {
    const docRef = collRef.doc(category_id).collection(collItemName).doc(item_id).collection(collChildrenName).doc();
    yield docRef.set(createDto);
    const doc = yield docRef.get();
    const res = doc.data();
    res['id'] = doc.id;
    return res;
});
exports.create = create;
const findAll = (category_id, item_id) => __awaiter(void 0, void 0, void 0, function* () {
    const collRef2 = collRef.doc(category_id).collection(collItemName).doc(item_id).collection(collChildrenName);
    const snapshot = yield collRef2.get();
    let data = [];
    snapshot.forEach((doc) => {
        const res = doc.data();
        res['id'] = doc.id;
        data.push(res);
    });
    return data;
});
exports.findAll = findAll;
const findOne = (category_id, item_id, children_id) => __awaiter(void 0, void 0, void 0, function* () {
    const docRef = collRef.doc(category_id).collection(collItemName).doc(item_id).collection(collChildrenName).doc(children_id);
    const doc = yield docRef.get();
    if (!doc.exists)
        return new error_model_1.CustomError(500, `El documento #${children_id} no existe en: /abilities/categories/${category_id}/${collItemName}/${item_id}/${collChildrenName}.`);
    else {
        const res = doc.data();
        res['id'] = doc.id;
        return res;
    }
});
exports.findOne = findOne;
const update = (category_id, item_id, children_id, updateDto) => __awaiter(void 0, void 0, void 0, function* () {
    const docRef = collRef.doc(category_id).collection(collItemName).doc(item_id).collection(collChildrenName).doc(children_id);
    yield docRef.set(updateDto);
    const doc = yield docRef.get();
    if (!doc.exists)
        return new error_model_1.CustomError(500, `El documento #${children_id} no existe en: /abilities/categories/${category_id}/${collItemName}/${item_id}/${collChildrenName}.`);
    else {
        const res = doc.data();
        res['id'] = doc.id;
        return res;
    }
});
exports.update = update;
const remove = (category_id, item_id, children_id) => __awaiter(void 0, void 0, void 0, function* () {
    const docRef = collRef.doc(category_id).collection(collItemName).doc(item_id).collection(collChildrenName).doc(children_id);
    const res = yield docRef.delete();
    if (res)
        return new error_model_1.CustomError(200, `El documento #${children_id} se eliminó exitosamente de: /abilities/categories/${category_id}/${collItemName}/${item_id}/${collChildrenName}.`);
    else
        return new error_model_1.CustomError(500, `Error al intentar eliminar el documento #${children_id}: /abilities/categories/${category_id}/${collItemName}/${item_id}/${collChildrenName}.`);
});
exports.remove = remove;
