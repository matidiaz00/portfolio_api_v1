import request from 'supertest';
import { describe, expect, it, beforeAll } from '@jest/globals';
import api from '../src/index';
import { environment } from '../src/environment/environment';

const req = request.agent(api);

const baseURL = '/v1/abilities';

describe('Abilities', () => {

    let token: string;

    beforeAll(async () => {
        const resAuth = await req.post('/auth/login').send(environment.user);
        const accessToken = resAuth.body.stsTokenManager.accessToken;
        token = `Bearer ${accessToken}`;
    });

    it(`GET ${baseURL}`, async () => {
        /*
        const res = await req.get(baseURL).set('Authorization', token);;
        expect(res.statusCode).toEqual(200);
        */
    });

});