import { describe, expect, it } from '@jest/globals';
import fetch from 'node-fetch';

const baseURL = `${process.env.API_URL}/404`;

describe('Error', () => {

    it('GET error 404', async () => {
        const call = await fetch(`${baseURL}`, {
            method: 'get'
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(404);
    });

});