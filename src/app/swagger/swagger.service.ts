export const swagger = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100, "Swagger!!!");
    });
}