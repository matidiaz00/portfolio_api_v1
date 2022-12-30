import request from 'supertest';
import { describe, expect, it } from '@jest/globals';
import api from '../src/index';

const req = request.agent(api);

const baseURL = '/v1/abilities';

describe('Abilities', () => {

    it(`GET ${baseURL}`, async () => {
        /*
        const res = await req.get(baseURL).set('Authorization', global.token);;
        expect(res.statusCode).toEqual(200);
        */
    });

});