import { Errors1xx } from "./errors/1xx.errors";
import { Errors2xx } from "./errors/2xx.errors";
import { Errors3xx } from "./errors/3xx.errors";
import { Errors4xx } from "./errors/4xx.errors";
import { Errors5xx } from "./errors/5xx.errors";

export interface ErrorInterface {
    status?: number;
    type: string;
    description: string;
    message_developer: string;
    message_client: string;
}

export interface ErrorDataInterface {
    type: string;
    description: string;
    message_general: string;
    items: Array<ErrorInterface>;
}

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
        this.setErrorData(status);
    }

    setErrorData(status: number): void {
        const ErrorsList = this.getErrorList(status);
        const DefaultErr = this.defaultError();
        if (ErrorsList && Array.isArray(ErrorsList.items)) {
            const ItemsArr = ErrorsList.items.find(item => item.status === status);
            if (ItemsArr) {
                let data: any = ErrorsList;
                delete data.items;
                data.item = ItemsArr;
                this.setData(data)
            } else this.setData(DefaultErr)
        } else this.setData(DefaultErr)
    }

    defaultError() {
        const item = (Errors5xx.items ?? [])[0];
        return {
            type: Errors5xx.type,
            description: Errors5xx.description,
            message_general: Errors5xx.message_general,
            item: item
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
        if (errorData.item) {
            this.error = {
                type: errorData.item.type,
                description: errorData.item.description,
                message_developer: errorData.item.message_developer,
                message_client: errorData.item.message_client
            }
        }
    }
}