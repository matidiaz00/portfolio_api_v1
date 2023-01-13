import config from './../../src/config';
import request from 'supertest';
import { app } from './../../src/index';
import { body } from "./settings";

module.exports = async () => {
    console.warn(" ")
    try {
        console.warn("1/4 Initial config for testing")
        const user = await request(app).post(`/auth/login`).send(config.USER);
        if (user.status === 200 && user.body.idToken) {
            console.warn("2/4 Login successfully")
            const token = `Bearer ${user.body.idToken}`
            process.env.TEST_JWT = token;

            const category = await request(app).post(`/v1/abilities`).send(body).set({ 'Authorization': token });
            if (category.status === 200 && category.body.id) {
                console.warn("3/4 Create category successfully:", category.body.id)
                process.env.TEST_CATEGORY_ID = category.body.id;

                const item = await request(app).post(`/v1/abilities/${category.body.id}/items`).send(body).set({ 'Authorization': token });
                if (item.status === 200 && item.body.id) {
                    console.warn("4/4 Create item successfully:", item.body.id)
                    process.env.TEST_ITEM_ID = item.body.id;
                } else {
                    console.error("4/4 ERROR No se pudo crear el item de ejemplo dentro de la categoria:", item.status)
                }
                console.warn(" ")
            } else {
                console.error("3/4 ERROR No se pudo crear una categoria de ejemplo:", category.status)
            }
        } else {
            console.error("2/4 ERROR No se pudo obtener el token id del usuario:", user.status)
        }
    } catch (e) {
        console.error("1/4 ERROR", e)
    }
};