import request from 'supertest';
import { describe, expect, it } from '@jest/globals';
import { api } from '../src/index';

const req = request.agent(api);

describe('Error', () => {

    it('GET error 404', async () => {
        const res = await req.get('/404');
        expect(res.statusCode).toEqual(404)
    });

});