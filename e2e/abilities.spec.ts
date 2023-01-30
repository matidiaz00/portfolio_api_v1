import { describe, expect, it } from '@jest/globals';
import fetch from 'node-fetch';

const title_url = `/v1/abilities`;

const baseURL = process.env.API_URL + title_url;

describe('Abilities', () => {
   
    it(`GET ${title_url}/all`, async () => {
        /*
        const call = await fetch(`${baseURL}/all`, {
            method: 'get',
            headers: process.env.TEST_JWT ? { 'Authorization': process.env.TEST_JWT } : undefined
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
        */
    });

});