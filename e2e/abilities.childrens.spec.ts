import { describe, expect, it } from '@jest/globals';
import { body } from './settings/settings'
import request from 'supertest';
import { app } from './../src/index';

const title_url = `/v1/abilities/:category_id/items/:item_id/childrens`;

const baseURL = `/v1/abilities/${process.env.TEST_CATEGORY_ID}/items/${process.env.TEST_ITEM_ID}/childrens`;

let NewPost = { body: body, id: '' }

describe('Childrens of a specific item of a one ability', () => {

    it(`POST ${title_url}`, async () => {
        const res = await request(app)
            .post(`${baseURL}`)
            .send(NewPost.body)
            .set({ 'Authorization': process.env.TEST_JWT });
        NewPost.id = res.body.id;
        expect(res.status).toEqual(200);
    });

    it(`GET ${title_url}`, async () => {
        const res = await request(app)
            .get(`${baseURL}`)
            .set({ 'Authorization': process.env.TEST_JWT });
        expect(res.status).toEqual(200);
    });

    it(`GET ${title_url}/:item_id`, async () => {
        const res = await request(app)
            .get(`${baseURL}/${NewPost.id}`)
            .set({ 'Authorization': process.env.TEST_JWT });
        expect(res.status).toEqual(200);
    });

    it(`PATCH ${title_url}/:item_id`, async () => {
        NewPost.body.title = "New Test Title";
        const res = await request(app)
            .patch(`${baseURL}/${NewPost.id}`)
            .send(NewPost.body)
            .set({ 'Authorization': process.env.TEST_JWT });
        expect(res.status).toEqual(200);
    });

    it(`DELETE ${title_url}/:item_id`, async () => {
        const res = await request(app)
            .delete(`${baseURL}/${NewPost.id}`)
            .set({ 'Authorization': process.env.TEST_JWT });
        expect(res.status).toEqual(200);
    });

});