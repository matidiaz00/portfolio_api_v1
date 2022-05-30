import { Routes } from 'nest-router';
import { AuthModule } from './auth.module';

export const AuthRoutes: Routes = [
  {
    path: '/auth',
    module: AuthModule
  },
];