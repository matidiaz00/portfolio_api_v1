/**
 * @openapi
 * tags:
 * 
 * - name: Auth
 *   description: Everything about your Pets
 *   externalDocs:
 *     description: Find out more
 *     url: http://swagger.io
 * 
 * - name: Experience
 *   description: Everything about your Pets
 *   externalDocs:
 *     description: Find out more
 *     url: http://swagger.io
 * 
 * - name: Abilities
 *   description: Everything about your Pets
 *   externalDocs:
 *     description: Find out more
 *     url: http://swagger.io
 * 
 * - name: Abilities/items
 *   description: Everything about your Pets
 *   externalDocs:
 *     description: Find out more
 *     url: http://swagger.io
 * 
 * - name: Abilities/items/childrens
 *   description: Everything about your Pets
 *   externalDocs:
 *     description: Find out more
 *     url: http://swagger.io
 * 
 */

/**
 * @openapi
 * components:
 *  schemas:
 * 
 *   abilities:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       order:
 *         type: integer
 * 
 *   auth:
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 * 
 *  securitySchemes:
 *   BearerAuth:
 *     type: http
 *     scheme: bearer
 *     bearerFormat: JWT
 */