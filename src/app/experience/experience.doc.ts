/**
 * @openapi
 * /v1/experience:
 *   get:
 *     tags:
 *       - Experience
 *     summary: Update an existing pet
 *     description: Welcome to swagger-jsdoc!
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

/**
 * @openapi
 * /v1/experience/{type}:
 *   get:
 *     tags:
 *       - Experience
 *     summary: Update an existing pet
 *     description: Welcome to swagger-jsdoc!
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: type
 *         in: path
 *         description: ID of pet to return
 *         required: true
 *         schema:
 *           type: string
 *           enum: ['nubela', 'linkedin']
 *           default: 'linkedin'
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */