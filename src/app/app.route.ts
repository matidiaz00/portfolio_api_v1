import { Router } from 'express'
import AuthRouting from './auth/auth.route';
import ErrorRouting from './error/error.route';
import MainRouting from './main/main.route';

const router = Router();

router.use('/', MainRouting);
router.use('/error', ErrorRouting);
router.use('/auth', AuthRouting);

export default router;