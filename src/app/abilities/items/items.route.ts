import { Router } from 'express';
import { FindAllController, CreateController, FindOneController, UpdateController, RemoveController } from './items.controller';
import ChildrenRouting from '../childrens/childrens.route';
import AbilitiesMiddleware from '../abilities.middleware';

const router = Router();

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

router.get('/', FindAllController);
router.post('/', AbilitiesMiddleware, CreateController);
router.get('/:item_id', FindOneController);
router.patch('/:item_id', AbilitiesMiddleware, UpdateController);
router.delete('/:item_id', RemoveController);

router.use('/:item_id/childrens', ChildrenRouting);

export default router;