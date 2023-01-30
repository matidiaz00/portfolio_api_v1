import { describe, expect, it } from '@jest/globals';
import fetch from 'node-fetch';

const title_url = `/swagger`;

const baseURL = process.env.API_URL + title_url;

describe('Documentation', () => {

    /*
    it(`GET ${title_url}`, async () => {
        const call = await fetch(`${baseURL}`, {
            method: 'get'
        });
        console.log(call)
        const status = call.status;
        //const res = await call.json();
        expect(status).toEqual(301);
    });
    */

    it(`GET ${title_url}/swagger.json`, async () => {
        const call = await fetch(`${baseURL}/swagger.json`, {
            method: 'get',
            headers: process.env.TEST_JWT ? { 'Authorization': process.env.TEST_JWT } : undefined
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
    });

});