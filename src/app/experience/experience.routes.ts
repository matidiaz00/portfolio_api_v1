import { Routes } from 'nest-router';
import { ExperienceModule } from './experience.module';

export const ExperienceRoutes: Routes = [
  {
    path: '/experience',
    module: ExperienceModule
  }
];