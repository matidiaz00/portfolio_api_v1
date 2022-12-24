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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const error_model_1 = require("../error/error.model");
const firebase_1 = require("../../firebase");
const collRef = firebase_1.db.collection('abilities');
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    let all_data;
    yield getCategories()
        .then((all_data_without_itemsAndChildrens) => __awaiter(void 0, void 0, void 0, function* () {
        return yield getItems(all_data_without_itemsAndChildrens)
            .then((all_data_without_Childrens) => __awaiter(void 0, void 0, void 0, function* () {
            return yield getChildrens(all_data_without_Childrens)
                .then((data) => all_data = Promise.resolve(data));
        }));
    }));
    return all_data;
});
exports.findAll = findAll;
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = yield collRef.get();
    let categoriesDoc = [];
    snapshot.forEach((category) => {
        let categoryData = category.data();
        categoryData['id'] = category.id;
        categoryData['items'] = [];
        categoriesDoc.push(categoryData);
    });
    if (categoriesDoc) {
        return yield Promise.all(categoriesDoc);
    }
    else {
        return new error_model_1.CustomError(500, `No hay colecciones en 'abilities'`);
    }
});
const getItems = (all_data_without_itemsAndChildrens) => { var _a, all_data_without_itemsAndChildrens_1, all_data_without_itemsAndChildrens_1_1; return __awaiter(void 0, void 0, void 0, function* () {
    var _b, e_1, _c, _d;
    let itemsDoc = [];
    try {
        for (_a = true, all_data_without_itemsAndChildrens_1 = __asyncValues(all_data_without_itemsAndChildrens); all_data_without_itemsAndChildrens_1_1 = yield all_data_without_itemsAndChildrens_1.next(), _b = all_data_without_itemsAndChildrens_1_1.done, !_b;) {
            _d = all_data_without_itemsAndChildrens_1_1.value;
            _a = false;
            try {
                let data = _d;
                if (data.id) {
                    const itemSnapshot = yield collRef.doc(data.id).collection('items').get();
                    let newData = data;
                    if (!itemSnapshot.empty) {
                        itemSnapshot.forEach((item) => {
                            const itemData = item.data();
                            itemData['id'] = item.id;
                            itemData['items'] = [];
                            newData.items.push(itemData);
                        });
                    }
                    itemsDoc.push(newData);
                }
            }
            finally {
                _a = true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (!_a && !_b && (_c = all_data_without_itemsAndChildrens_1.return)) yield _c.call(all_data_without_itemsAndChildrens_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (itemsDoc) {
        return Promise.all(itemsDoc);
    }
    else {
        return new error_model_1.CustomError(500, `Hubo un problema obtener 'items/colecciones' de los documentos de 'abilities'`);
    }
}); };
const getChildrens = (all_data_without_Childrens) => { var _a, all_data_without_Childrens_1, all_data_without_Childrens_1_1; return __awaiter(void 0, void 0, void 0, function* () {
    var _b, e_2, _c, _d, _e, e_3, _f, _g;
    let all_data = [];
    try {
        for (_a = true, all_data_without_Childrens_1 = __asyncValues(all_data_without_Childrens); all_data_without_Childrens_1_1 = yield all_data_without_Childrens_1.next(), _b = all_data_without_Childrens_1_1.done, !_b;) {
            _d = all_data_without_Childrens_1_1.value;
            _a = false;
            try {
                let data = _d;
                try {
                    for (var _h = true, _j = (e_3 = void 0, __asyncValues(data.items)), _k; _k = yield _j.next(), _e = _k.done, !_e;) {
                        _g = _k.value;
                        _h = false;
                        try {
                            let item = _g;
                            let newItemsChildren = [];
                            if (data.id && item.id) {
                                const itemSnapshot = yield collRef.doc(data.id).collection('items').doc(item.id).collection('childrens').get();
                                if (!itemSnapshot.empty) {
                                    itemSnapshot.forEach((children) => {
                                        const childrenData = children.data();
                                        childrenData['id'] = children.id;
                                        childrenData['items'] = [];
                                        newItemsChildren.push(childrenData);
                                    });
                                }
                            }
                            item.items.push(newItemsChildren);
                        }
                        finally {
                            _h = true;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (!_h && !_e && (_f = _j.return)) yield _f.call(_j);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                all_data.push(data);
            }
            finally {
                _a = true;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (!_a && !_b && (_c = all_data_without_Childrens_1.return)) yield _c.call(all_data_without_Childrens_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    if (all_data.length === 0) {
        return yield Promise.all(all_data);
    }
    else {
        return new error_model_1.CustomError(500, `Hubo un problema obtener colecciones 'childrends'`);
    }
}); };
