import fetch from 'node-fetch';

module.exports = async () => {
    console.warn(" ")
    try {
        console.warn("1/3 Final config for testing")
        const category = await fetch(`${process.env.API_URL}/v1/abilities/${process.env.TEST_CATEGORY_ID}`, { method: 'delete', headers: {'Authorization': process.env.TEST_JWT} });
        if (category.status === 200) {
            console.warn("2/3 Delete category successfully:", process.env.TEST_CATEGORY_ID, process.env.TEST_ITEM_ID)
            delete process.env.TEST_CATEGORY_ID;
            delete process.env.TEST_ITEM_ID;

            const user = await fetch(`${process.env.API_URL}/auth/logout`, { method: 'get' });
            if (user.status === 200) {
                console.warn("3/3 Logout successfully")
                delete process.env.TEST_JWT;
                delete process.env.API_URL;
            } else {
                console.error("3/3 ERROR No se pudo borrar la variable TEST_JWT:", user.status)
            }
            console.warn(" ")
        } else {
            console.error("2/3 ERROR No se pudieron borrar las variables de TEST_CATEGORY_ID y TEST_ITEM_ID:", category.status)
        }
    } catch (e) {
        console.error("1/3 ERROR", e)
    }
};