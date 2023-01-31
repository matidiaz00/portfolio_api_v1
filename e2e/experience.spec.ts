import { describe, expect, it } from '@jest/globals';
import fetch from 'node-fetch';

const title_url = `/v1/experience`;

const baseURL = process.env.API_URL + title_url;

describe('Experience', () => {

    it(`GET ${title_url}`, async () => {
        /*
        const call = await fetch(`${baseURL}`, {
            method: 'get',
            headers: process.env.TEST_JWT ? { 'Authorization': process.env.TEST_JWT } : undefined
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
        */
    });

    it(`GET ${title_url}/linkedin`, async () => {
        /*
        const call = await fetch(`${baseURL}/linkedin`, {
            method: 'get',
            headers: process.env.TEST_JWT ? { 'Authorization': process.env.TEST_JWT } : undefined
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
        */
    });

    it(`GET ${title_url}/nubela`, async () => {
        /*
        const call = await fetch(`${baseURL}/nubela`, {
            method: 'get',
            headers: process.env.TEST_JWT ? { 'Authorization': process.env.TEST_JWT } : undefined
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
        */
    });

});