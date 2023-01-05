/**
 * @openapi
 * /auth:
 *   get:
 *     tags:
 *       - Auth
 *     description: Welcome to swagger-jsdoc!
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

/**
 * @openapi
 * /auth/logout:
 *   post:
 *     tags:
 *       - Auth
 *     description: Welcome to swagger-jsdoc!
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     description: Welcome to swagger-jsdoc!
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/auth'
 *           example:
 *             email: 'asd@asd.com.ar'
 *             description: 'asd123asd'
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