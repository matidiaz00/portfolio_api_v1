"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const items_controller_1 = require("./items.controller");
const childrens_route_1 = __importDefault(require("./../childrens/childrens.route"));
const abilities_middleware_1 = __importDefault(require("./../abilities.middleware"));
const app_middleware_1 = require("./../../app.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 * components:
 *  schemas:
 *   post_mutation_request:
 *     type: object
 *     properties:
 *       dna:
 *         type: array
 *         items:
 *           type: string
 */
/**
 * @openapi
 * components:
 *  schemas:
 *   post_mutation_response:
 *     type: object
 *     properties:
 *       hasMutation:
 *         type: boolean
 *       message:
 *         type: string
 *       data:
 *         type: object
 *         properties:
 *           hasMutation:
 *             type: boolean
 *           upsert:
 *             type: boolean
 *           new:
 *             type: boolean
 *           setDefaultsOnInsert:
 *             type: boolean
 *           dna:
 *             type: array
 *             items:
 *               type: string
 */
/**
 * @openapi
 * /dna/mutations:
 *   post:
 *     summary: Indicates if a DNA has been mutated.
 *     tags:
 *       - DNA
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/post_mutation_request'
 *           examples:
 *             hasMutation1:
 *                value:
 *                  dna: [ "ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "AGTCAG", "TCACTG" ]
 *             hasMutation2:
 *                value:
 *                  dna: [ "ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG" ]
 *             noMutation:
 *                value:
 *                  dna: [ "ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG" ]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/post_mutation_response'
 *             example:
 *               hasMutation: true
 *               message: Has mutation
 *               data:
 *                  dna: [ "ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "AGTCAG", "TCACTG" ]
 *                  hasMutation: true
 *                  upsert: true
 *                  new: true
 *                  setDefaultsOnInsert: true
 *       401:
 *         description: Not authenticated
 *       403:
 *         description: Access token does not have the required scope
 */
router.get('/', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), items_controller_1.FindAllController);
router.post('/', abilities_middleware_1.default, items_controller_1.CreateController);
router.get('/:item_id', (0, app_middleware_1.CacheMiddleWare)('5 minutes'), items_controller_1.FindOneController);
router.patch('/:item_id', abilities_middleware_1.default, items_controller_1.UpdateController);
router.delete('/:item_id', items_controller_1.RemoveController);
router.use('/:item_id/childrens', childrens_route_1.default);
exports.default = router;
