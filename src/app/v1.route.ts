import { Router } from 'express'
import { AuthMiddleware } from './auth/auth.middleware';
import AbrilitiesRouting from './abilities/abilities.route';
import ExperienceRouting from './experience/experience.route';
import SwaggerRouting from './swagger/swagger.route';

const router = Router();

router.use('*', AuthMiddleware);
router.use('/abilities', AbrilitiesRouting);
router.use('/experience', ExperienceRouting);
router.use('/swagger', SwaggerRouting);

export default router;