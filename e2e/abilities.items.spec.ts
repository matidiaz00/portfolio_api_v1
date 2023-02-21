import { describe, expect, it } from '@jest/globals';
import fetch from 'node-fetch';
import body from './settings/body_example';

const title_url = `/v1/abilities/:category_id/items`;

const baseURL = `${process.env.API_URL}/v1/abilities/${process.env.TEST_CATEGORY_ID}/items`;

let NewPost = { body: body, id: '' }

describe('Items of a specific ability', () => {

    it(`POST ${title_url}`, async () => {
        const call = await fetch(`${baseURL}`, {
            method: 'post',
            body: NewPost.body,
            headers: process.env.TEST_JWT ? { 'Authorization': process.env.TEST_JWT } : undefined
        });
        const status = call.status;
        const res = await call.json();
        NewPost.id = res.id;
        expect(status).toEqual(200);
    });

    it(`GET ${title_url}`, async () => {
        const call = await fetch(`${baseURL}`);
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
    });

    it(`GET ${title_url}/:item_id`, async () => {
        const call = await fetch(`${baseURL}/${NewPost.id}`);
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
    });

    it(`PATCH ${title_url}/:item_id`, async () => {
        const call = await fetch(`${baseURL}/${NewPost.id}`, {
            method: 'patch',
            body: NewPost.body,
            headers: process.env.TEST_JWT ? { 'Authorization': process.env.TEST_JWT } : undefined
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
    });

    it(`DELETE ${title_url}/:item_id`, async () => {
        const call = await fetch(`${baseURL}/${NewPost.id}`, {
            method: 'delete',
            headers: process.env.TEST_JWT ? { 'Authorization': process.env.TEST_JWT } : undefined
        });
        const status = call.status;
        const res = await call.json();
        expect(status).toEqual(200);
    });

});