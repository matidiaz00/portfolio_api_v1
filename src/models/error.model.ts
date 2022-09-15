import { ErrorDataInterface, ErrorInterface } from "./error.interface";
import { Errors1xx } from "./errors/1xx.errors";
import { Errors2xx } from "./errors/2xx.errors";
import { Errors3xx } from "./errors/3xx.errors";
import { Errors4xx } from "./errors/4xx.errors";
import { Errors5xx } from "./errors/5xx.errors";

export class CustomError {

    status: number;
    type: string | undefined;
    description: string | undefined;
    message_general: string | undefined;
    error: ErrorInterface | undefined;
    additionalInfo: any;
  
    constructor(status: number = 500, additionalInfo?: any) {
        this.status = status;
        this.additionalInfo = additionalInfo ? additionalInfo : undefined;
        this.setErrorData(status)
            .then(res => this.setData(res))
            .catch(err => this.setData(err))
    }

    setErrorData(status: number): Promise<any> {
        return new Promise((resolve, reject) => {
            const ErrorsList = this.getErrorList(status);
            if (ErrorsList && Array.isArray(ErrorsList.items)) {
                const ItemsArr = ErrorsList.items.find(item => item.status === status);
                if (ItemsArr) {
                    let data: any = ErrorsList;
                    delete data.items;
                    data.item = ItemsArr;
                    resolve(data)
                } else {
                    reject(this.defaultError())
                }
            }
        })
    }

    defaultError() {
        return {
            type: Errors5xx.type,
            description: Errors5xx.description,
            message_general: Errors5xx.message_general,
            item: {
                type: Errors5xx.items[0].type,
                description: Errors5xx.items[0].description,
                message_developer: Errors5xx.items[0].message_developer,
                message_client: Errors5xx.items[0].message_client
            }
        }
    }

    getErrorList(status: number): ErrorDataInterface {
        const main_status = String(status).charAt(0)
        let ErrorsList: ErrorDataInterface | undefined = undefined;
        if (main_status == "1") ErrorsList = Errors1xx;
        else if (main_status == "2") ErrorsList = Errors2xx;
        else if (main_status == "3") ErrorsList = Errors3xx;
        else if (main_status == "4") ErrorsList = Errors4xx;
        else ErrorsList = Errors5xx;
        return ErrorsList
    }

    setData(errorData: any): void {
        this.type = errorData.type;
        this.description = errorData.description;
        this.message_general = errorData.message_general;
        this.error = {
            type: errorData.item.type,
            description: errorData.item.description,
            message_developer: errorData.item.message_developer,
            message_client: errorData.item.message_client
        }
    }
}