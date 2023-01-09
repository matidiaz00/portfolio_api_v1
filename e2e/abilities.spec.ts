import request from 'supertest';
import { describe, expect, it, beforeAll, afterAll } from '@jest/globals';
import { environment } from '../src/environment/environment';
import { api } from '../src/index';

const req = request.agent(api);

const baseURL = '/v1/abilities';

describe('Abilities', () => {

    /*
    let token: string;

    beforeAll(async () => {
        const resAuth = await req.post('/auth/login').send(environment.user);
        const accessToken = resAuth.body.idToken;
        token = `Bearer ${accessToken}`;
    });

    afterAll(async () => {
        await req.post('/auth/logout');
    });
    */
   
    it(`GET ${baseURL}`, async () => {
        /*
        const res = await req.get(baseURL + '/all').set('Authorization', token);
        expect(res.statusCode).toEqual(200);
        */
    });

});