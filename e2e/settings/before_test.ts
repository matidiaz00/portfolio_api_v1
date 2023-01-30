import fetch from 'node-fetch';
import { body } from './settings';

const url = 'http://localhost:5001/matidiaz000/us-central1/api';

module.exports = async () => {
    console.log(" ")
    process.env.API_URL = url;
    try {
        console.warn("1/4 Initial config for testing")
        const jsonUser = { email: "matidiaz00@gmail.com", password: "1991R1k1s1m0" };
        const res = await fetch(`${url}/auth/login`, { method: 'POST', body: JSON.stringify(jsonUser) });
        const user = await res.json();
        if (user.idToken) {
            console.warn("2/4 Login successfully")
            const token = `Bearer ${user.idToken}`
            process.env.TEST_JWT = token;

            const res = await fetch(`${url}/v1/abilities`, { method: 'post', body: JSON.stringify(body), headers: {'Authorization': token} });
            const category = await res.json();
            if (category.id) {
                console.warn("3/4 Create category successfully:", category.id)
                process.env.TEST_CATEGORY_ID = category.id;

                const res = await fetch(`${url}/v1/abilities/${category.id}/items`, { method: 'post', body: JSON.stringify(body), headers: {'Authorization': token} });
                const item = await res.json();
                if (item.id) {
                    console.warn("4/4 Create item successfully:", item.id)
                    process.env.TEST_ITEM_ID = item.id;
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