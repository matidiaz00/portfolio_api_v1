export const error = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100, "Error!!");
    });
}