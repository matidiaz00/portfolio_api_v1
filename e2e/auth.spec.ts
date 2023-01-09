import request from 'supertest';
import { describe, expect, it, beforeAll, afterAll } from '@jest/globals';
import { api } from '../src/index';
import { environment } from '../src/environment/environment';

const req = request.agent(api);

const baseURL = '/auth';

describe('Authentication', () => {

    let token: string;

    beforeAll(async () => {
        const resAuth = await req.post('/auth/login').send(environment.user);
        const accessToken = resAuth.body.idToken;
        token = `Bearer ${accessToken}`;
    });

    afterAll(async () => {
        await req.post('/auth/logout');
    });

    it(`GET ${baseURL}/user`, async () => {
        const res = await request(api).get(baseURL + '/user').set('Authorization', token);
        expect(res.statusCode).toEqual(200);
    });

    it(`POST ${baseURL}/login`, async () => {
        const res = await req.post(baseURL + '/login').send(environment.user);
        expect(res.statusCode).toEqual(200);
    });

    it(`POST ${baseURL}/logout`, async () => {
        const res = await request(api).post(baseURL + '/logout');
        expect(res.statusCode).toEqual(200);
    });

});