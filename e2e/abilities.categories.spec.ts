import { describe, expect, it } from '@jest/globals';
import fetch from 'node-fetch';

const title_url = `/v1/abilities`;

const baseURL = `${process.env.API_URL}/v1/abilities`;

let NewPost = { body: process.env.BODY ? JSON.parse(process.env.BODY) : null, id: '' }

describe('Specific ability', () => {

    it(`POST ${title_url}`, async () => {
        const call = await fetch(`${baseURL}`, {
            method: 'post',
            body: JSON.stringify(NewPost.body),
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
        NewPost.body.title = "New Test Title";
        const call = await fetch(`${baseURL}/${NewPost.id}`, {
            method: 'patch',
            body: JSON.stringify(NewPost.body),
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