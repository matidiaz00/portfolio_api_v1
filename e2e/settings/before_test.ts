import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

const envPath = resolve(__dirname, './.env');

dotenv.config({ path: envPath })

module.exports = async () => {
    try {
        process.stdout.write("\n1/4 Initial config for testing\n")
        const userdata = {email:"matidiaz00@gmail.com",password:"1991R1k1s1m0"}
        const res = await fetch(`http://localhost:5001/matidiaz000/us-central1/api/auth/login`, { method: 'POST', body: JSON.stringify(userdata) });
        const user = await res.json();
        console.log(user)
        if (user.idToken) {
            process.stdout.write("\n2/4 Login successfully\n")
            const token = `Bearer ${user.idToken}`
            process.env.TEST_JWT = token;

            const res = await fetch(`${process.env.API_URL}/v1/abilities`, { method: 'post', body: process.env.BODY, headers: {'Authorization': token} });
            const category = await res.json();
            if (category.id) {
                process.stdout.write(`\n3/4 Create category successfully - Category_ID: ${category.id}\n`)
                process.env.TEST_CATEGORY_ID = category.id;

                const res = await fetch(`${process.env.API_URL}/v1/abilities/${category.id}/items`, { method: 'post', body: process.env.BODY, headers: {'Authorization': token} });
                const item = await res.json();
                if (item.id) {
                    process.stdout.write(`\n4/4 Create item successfully - Item_ID: ${item.id}\n\n`)
                    process.env.TEST_ITEM_ID = item.id;
                } else {
                    process.stderr.write("\n4/4 ERROR No se pudo crear el item de ejemplo dentro de la categoria:\n")
                    process.stderr.write(JSON.stringify(item))
                    process.stderr.write("\n")
                }
            } else {
                process.stderr.write("\n3/4 ERROR No se pudo crear una categoria de ejemplo:\n")
                process.stderr.write(JSON.stringify(category))
                process.stderr.write("\n")
            }
        } else {
            process.stderr.write("\n2/4 ERROR No se pudo obtener el token id del usuario:\n")
            process.stderr.write(JSON.stringify(user))
            process.stderr.write("\n")
        }
        
    } catch (e) {
        process.stderr.write("\n1/4 ERROR:\n")
        process.stderr.write(JSON.stringify(e))
        process.stderr.write("\n")
    }
};