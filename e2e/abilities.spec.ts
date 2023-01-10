import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import { app } from './../src/index';

const title_url = `/v1/abilities`;

const baseURL = title_url;

describe('Abilities', () => {
   
    it(`GET ${title_url}/all`, async () => {
        /*
        const res = await request(app)
            .get(`${baseURL}/all`)
            .set({ 'Authorization': process.env.TEST_JWT });
        expect(res.status).toEqual(200);
        */
    });

});