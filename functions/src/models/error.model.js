"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
const _1xx_errors_1 = require("./errors/1xx.errors");
const _2xx_errors_1 = require("./errors/2xx.errors");
const _3xx_errors_1 = require("./errors/3xx.errors");
const _4xx_errors_1 = require("./errors/4xx.errors");
const _5xx_errors_1 = require("./errors/5xx.errors");
class CustomError {
    constructor(status = 500, additionalInfo) {
        this.status = status;
        this.additionalInfo = additionalInfo ? additionalInfo : undefined;
        this.setErrorData(status)
            .then(res => this.setData(res))
            .catch(err => this.setData(err));
    }
    setErrorData(status) {
        return new Promise((resolve, reject) => {
            const ErrorsList = this.getErrorList(status);
            if (ErrorsList && Array.isArray(ErrorsList.items)) {
                const ItemsArr = ErrorsList.items.find(item => item.status === status);
                if (ItemsArr) {
                    let data = ErrorsList;
                    delete data.items;
                    data.item = ItemsArr;
                    resolve(data);
                }
                else {
                    reject(this.defaultError());
                }
            }
        });
    }
    defaultError() {
        return {
            type: _5xx_errors_1.Errors5xx.type,
            description: _5xx_errors_1.Errors5xx.description,
            message_general: _5xx_errors_1.Errors5xx.message_general,
            item: {
                type: _5xx_errors_1.Errors5xx.items[0].type,
                description: _5xx_errors_1.Errors5xx.items[0].description,
                message_developer: _5xx_errors_1.Errors5xx.items[0].message_developer,
                message_client: _5xx_errors_1.Errors5xx.items[0].message_client
            }
        };
    }
    getErrorList(status) {
        const main_status = String(status).charAt(0);
        let ErrorsList = undefined;
        if (main_status == "1")
            ErrorsList = _1xx_errors_1.Errors1xx;
        else if (main_status == "2")
            ErrorsList = _2xx_errors_1.Errors2xx;
        else if (main_status == "3")
            ErrorsList = _3xx_errors_1.Errors3xx;
        else if (main_status == "4")
            ErrorsList = _4xx_errors_1.Errors4xx;
        else
            ErrorsList = _5xx_errors_1.Errors5xx;
        return ErrorsList;
    }
    setData(errorData) {
        this.type = errorData.type;
        this.description = errorData.description;
        this.message_general = errorData.message_general;
        this.error = {
            type: errorData.item.type,
            description: errorData.item.description,
            message_developer: errorData.item.message_developer,
            message_client: errorData.item.message_client
        };
    }
}
exports.CustomError = CustomError;
