import fetch from 'node-fetch';

module.exports = async () => {
    try {
        process.stdout.write("\n1/3 Final config for testing\n")
        const category = await fetch(`${process.env.API_URL}/v1/abilities/${process.env.TEST_CATEGORY_ID}`, { method: 'delete', headers: {'Authorization': process.env.TEST_JWT} });
        if (category.status === 200) {
            process.stdout.write(`\n2/3 Delete category and his item successfully - Category_ID: ${process.env.TEST_CATEGORY_ID} and Item_ID: ${process.env.TEST_ITEM_ID}\n`)
            delete process.env.TEST_CATEGORY_ID;
            delete process.env.TEST_ITEM_ID;

            const user = await fetch(`${process.env.API_URL}/auth/logout`, { method: 'get' });
            if (user.status === 200) {
                process.stdout.write("\n3/3 Logout successfully\n\n")
                delete process.env.TEST_JWT;
                delete process.env.API_URL;
            } else {
                process.stderr.write("\n3/3 ERROR No se pudo borrar la variable TEST_JWT:\n")
                process.stderr.write(JSON.stringify(user))
                process.stderr.write("\n")
            }
        } else {
            process.stderr.write("\n2/3 ERROR No se pudieron borrar las variables de TEST_CATEGORY_ID y TEST_ITEM_ID:\n")
            process.stderr.write(JSON.stringify(category))
            process.stderr.write("\n")
        }
    } catch (e) {
        process.stderr.write("\n1/3 ERROR\n")
        process.stderr.write(JSON.stringify(e))
        process.stderr.write("\n")
    }
};