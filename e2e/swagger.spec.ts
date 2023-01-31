import { describe, expect, it } from '@jest/globals';
import fetch from 'node-fetch';

const title_url = `/swagger`;

const baseURL = process.env.API_URL + title_url;

describe('Documentation', () => {

    it(`GET ${title_url}`, async () => {
        const call = await fetch(`${baseURL}`, {
            method: 'get'
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
    });

});