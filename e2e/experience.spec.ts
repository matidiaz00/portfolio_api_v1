import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import { app } from './../src/index';

const title_url = `/v1/experience`;

const baseURL = title_url;

describe('Experience', () => {

    it(`GET ${title_url}`, async () => {
        const res = await request(app)
            .get(`${baseURL}`)
            .set({ 'Authorization': process.env.TEST_JWT });
        expect(res.status).toEqual(200);
    });

    it(`GET ${title_url}/linkedin`, async () => {
        const res = await request(app)
            .get(`${baseURL}/linkedin`)
            .set({ 'Authorization': process.env.TEST_JWT });
        expect(res.status).toEqual(200);
    });

    it(`GET ${title_url}/nubela`, async () => {
        const res = await request(app)
            .get(`${baseURL}/nubela`)
            .set({ 'Authorization': process.env.TEST_JWT });
        expect(res.status).toEqual(200);
    });

});