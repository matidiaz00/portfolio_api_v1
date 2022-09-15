export const main = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100, "Main!!!");
    });
}