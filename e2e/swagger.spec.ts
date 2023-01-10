import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import { app } from './../src/index';

const title_url = `/swagger`;

const baseURL = title_url;

describe('Documentation', () => {

    it(`GET ${title_url}`, async () => {
        const res = await request(app)
            .get(`${baseURL}`);
        expect(res.status).toEqual(301);
    });

    it(`GET ${title_url}/swagger.json`, async () => {
        const res = await request(app)
            .get(`${baseURL}/swagger.json`)
            .set({ 'Authorization': process.env.TEST_JWT });
        expect(res.status).toEqual(200);
    });

});