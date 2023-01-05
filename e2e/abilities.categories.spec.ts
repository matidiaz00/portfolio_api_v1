import request from 'supertest';
import { beforeAll, describe, expect, it, afterAll } from '@jest/globals';
import { api } from '../src/index';
import { environment } from '../src/environment/environment';

const req = request(api);

const baseURL = '/v1/abilities/categories';

let NewPost = {
    body: {
        title: 'Test example category title',
        description: 'This is a example created by the test.',
        order: 0
    },
    id: ''
}

describe('Specific ability', () => {

    let token: string;

    beforeAll(async () => {
        const resAuth = await req.post('/auth/login').send(environment.user);
        const accessToken = resAuth.body.stsTokenManager.accessToken;
        token = `Bearer ${accessToken}`;
    });

    afterAll(async () => {
        await req.post('/auth/logout');
    });

    it(`POST ${baseURL}`, async () => {
        const res = await req.post(baseURL).send(NewPost.body).set('Authorization', token);
        NewPost.id = res.body.id;
        expect(res.statusCode).toEqual(200);
    });

    it(`GET ${baseURL}`, async () => {
        const res = await req.get(baseURL).set('Authorization', token);
        expect(res.statusCode).toEqual(200);
    });

    it(`GET ${baseURL}/:category_id`, async () => {
        const res = await req.get(baseURL + '/' + NewPost.id).set('Authorization', token);
        expect(res.statusCode).toEqual(200);
    });

    it(`PATCH ${baseURL}/:category_id`, async () => {
        NewPost.body.title = "New Test Title";
        const res = await req.patch(baseURL + '/' + NewPost.id).send(NewPost.body).set('Authorization', token);
        expect(res.statusCode).toEqual(200);
    });

    it(`DELETE ${baseURL}/:category_id`, async () => {
        const res = await req.delete(baseURL + '/' + NewPost.id).set('Authorization', token);
        expect(res.statusCode).toEqual(200);
    });

});