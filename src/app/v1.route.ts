import { Router } from "express";
import AbrilitiesRouting from "./abilities/abilities.route";
import ExperienceRouting from "./experience/experience.route";

const router = Router();

router.use('/abilities', AbrilitiesRouting);
router.use('/experience', ExperienceRouting);

export default router;