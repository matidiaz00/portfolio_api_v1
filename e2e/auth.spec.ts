import { describe, expect, it } from '@jest/globals';
import fetch from 'node-fetch';

const title_url = `/auth`;

const baseURL = process.env.API_URL + title_url;

describe('Authentication', () => {

    it(`GET ${title_url}/user`, async () => {
        const call = await fetch(`${baseURL}/user`, {
            method: 'get',
            headers: process.env.TEST_JWT ? { 'Authorization': process.env.TEST_JWT } : undefined
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
    });

    /*
    it(`GET ${title_url}/logout`, async () => {
        const call = await fetch(`${baseURL}/logout`, {
            method: 'get',
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
    });

    it(`POST ${title_url}/login`, async () => {
        const call = await fetch(`${baseURL}/login`, {
            method: 'post',
            body: JSON.stringify(process.env.USER)
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
    });
    */

});