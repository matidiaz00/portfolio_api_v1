"use strict";
/**
 * @openapi
 * /v1/abilities/{category_id}/items/{item_id}/childrens:
 *   post:
 *     tags:
 *       - Abilities/items/childrens
 *     description: Welcome to swagger-jsdoc!
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: category_id
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *       - name: item_id
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/abilities'
 *           example:
 *             title: 'Test example category title'
 *             description: 'This is a example created by the test.'
 *             order: 0
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: '0cpEZBNV8YhgAMQF039O'
 *               title: 'Test example category title'
 *               description: 'This is a example created by the test.'
 *               order: 0
 */
/**
 * @openapi
 * /v1/abilities/{category_id}/items/{item_id}/childrens:
 *   get:
 *     tags:
 *       - Abilities/items/childrens
 *     description: Welcome to swagger-jsdoc!
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: category_id
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *       - name: item_id
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
/**
* @openapi
* /v1/abilities/{category_id}/items/{item_id}/childrens/{children_id}:
*   get:
*     tags:
*       - Abilities/items/childrens
*     description: Welcome to swagger-jsdoc!
*     security:
*       - bearerAuth: []
*     parameters:
*       - name: category_id
*         in: path
*         description: ID of pet to return
*         required: true
*         schema:
*           type: string
*       - name: item_id
*         in: path
*         description: ID of pet to return
*         required: true
*         schema:
*           type: string
*       - name: children_id
*         in: path
*         description: ID of pet to return
*         required: true
*         schema:
*           type: string
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
/**
 * @openapi
 * /v1/abilities/{category_id}/items/{item_id}/childrens/{children_id}:
 *   patch:
 *     tags:
 *       - Abilities/items/childrens
 *     description: Welcome to swagger-jsdoc!
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: category_id
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *       - name: item_id
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *       - name: children_id
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/abilities'
 *           example:
 *             title: 'Test example category title'
 *             description: 'This is a example created by the test.'
 *             order: 0
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: '0cpEZBNV8YhgAMQF039O'
 *               title: 'Test example category title'
 *               description: 'This is a example created by the test.'
 *               order: 0
 */
/**
 * @openapi
 * /v1/abilities/{category_id}/items/{item_id}/childrens/{children_id}:
 *   delete:
 *     tags:
 *       - Abilities/items/childrens
 *     description: Welcome to swagger-jsdoc!
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: category_id
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *       - name: item_id
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *       - name: children_id
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */ 
