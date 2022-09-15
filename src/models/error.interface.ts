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