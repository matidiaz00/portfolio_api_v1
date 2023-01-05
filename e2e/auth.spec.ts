import request from 'supertest';
import { describe, expect, it } from '@jest/globals';
import { api } from '../src/index';
import { environment } from '../src/environment/environment';

const req = request.agent(api);

const baseURL = '/auth';

describe('Authentication', () => {

    it(`POST ${baseURL}/login`, async () => {
        const res = await req.post(baseURL + '/login').send(environment.user);
        expect(res.statusCode).toEqual(200)
    });

    it(`POST ${baseURL}/logout`, async () => {
        const res = await request(api).post(baseURL + '/logout');
        expect(res.statusCode).toEqual(200)
    });

});