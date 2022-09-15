import { Router } from 'express'
import AbrilitiesRouting from './abilities/abilities.route';
import ExperienceRouting from './experience/experience.route';
import SwaggerRouting from './swagger/swagger.route';

const router = Router();

router.use('/abilities', AbrilitiesRouting);
router.use('/eperience', ExperienceRouting);
router.use('/swagger', SwaggerRouting);

export default router;