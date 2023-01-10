import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import { app } from './../src/index';

const baseURL = '/404';

describe('Error', () => {

    it('GET error 404', async () => {
        const res = await request(app)
            .get(`${baseURL}`);
        expect(res.status).toEqual(404);
    });

});