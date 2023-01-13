import { describe, expect, it } from '@jest/globals';
import config from './../src/config';
import request from 'supertest';
import { app } from './../src/index';

const title_url = `/auth`;

const baseURL = title_url;

describe('Authentication', () => {

    it(`GET ${title_url}/user`, async () => {
        const res = await request(app)
            .get(`${baseURL}/user`)
            .set({ 'Authorization': process.env.TEST_JWT });
        expect(res.status).toEqual(200);
    });

    it(`POST ${title_url}/login`, async () => {
        const res = await request(app)
            .post(`${baseURL}/login`)
            .send(config.user);
        expect(res.status).toEqual(200);
    });

    it(`GET ${title_url}/logout`, async () => {
        const res = await request(app)
            .get(`${baseURL}/logout`);
        expect(res.status).toEqual(200);
    });

});