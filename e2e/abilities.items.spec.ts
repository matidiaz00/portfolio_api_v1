import request from 'supertest';
import { afterAll, describe, expect, it, beforeAll } from '@jest/globals';
import { api } from '../src/index';
import { environment } from '../src/environment/environment';

const req = request.agent(api);

let NewPost = {
    body: {
        title: 'Test example children of category title',
        description: 'This is a example created by the test.',
        order: 0
    },
    id: ''
}

describe('Items of a specific ability', () => {

    let token: string;
    let category_id: string;
    let baseURL: string = `/v1/abilities/categories/:category_id/items`;

    beforeAll(async () => {
        const resAuth = await req.post('/auth/login').send(environment.user);
        const accessToken = resAuth.body.stsTokenManager.accessToken;
        token = `Bearer ${accessToken}`;

        const resNewCategory = await req.post('/v1/abilities/categories').send(NewPost.body).set('Authorization', token);
        category_id = resNewCategory.body.id;

        baseURL = `/v1/abilities/categories/${category_id}/items`
    });

    afterAll(async () => {
        await req.delete(`/v1/abilities/categories/${category_id}`).set('Authorization', token);
        await req.post('/auth/logout');
    });

    it(`POST ${baseURL}`, async () => {
        const res = await req.post(baseURL).send(NewPost.body).set('Authorization', token);
        NewPost.id = res.body.id;
        expect(res.statusCode).toEqual(200)
    });

    it(`GET ${baseURL}`, async () => {
        const res = await req.get(baseURL).set('Authorization', token);
        expect(res.statusCode).toEqual(200)
    });

    it(`GET ${baseURL}/:item_id`, async () => {
        const res = await request(api).get(baseURL + '/' + NewPost.id).set('Authorization', token);
        expect(res.statusCode).toEqual(200)
    });

    it(`PATCH ${baseURL}/:item_id`, async () => {
        const res = await request(api).get(baseURL + '/' + NewPost.id).set('Authorization', token);
        expect(res.statusCode).toEqual(200)
    });

    it(`DELETE ${baseURL}/:item_id`, async () => {
        const res = await request(api).get(baseURL + '/' + NewPost.id).set('Authorization', token);
        expect(res.statusCode).toEqual(200)
    });

});