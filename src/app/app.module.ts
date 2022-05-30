import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from 'nest-router';
import { FirebaseModule } from 'nestjs-firebase';
import { AbilitiesModule } from './abilities/abilities.module';
import { AbilitiesRoutes } from './abilities/abilities.routes';
import { CategoriesModule } from './abilities/categories/categories.module';
import { ChildrensModule } from './abilities/childrens/childrens.module';
import { ItemsModule } from './abilities/items/items.module';
import { environments, firebaseKey } from './app.config';
import { ExperienceModule } from './experience/experience.module';
import { ExperienceRoutes } from './experience/experience.routes';
import { AuthModule } from './auth/auth.module';
import { AuthRoutes } from './auth/auth.routes';

const routes: any = AbilitiesRoutes.concat(ExperienceRoutes).concat(AuthRoutes)

const Modules = [
  FirebaseModule.forRoot(firebaseKey),
  ConfigModule.forRoot(environments),
  RouterModule.forRoutes(routes),
  ExperienceModule,
  AbilitiesModule,
  CategoriesModule,
  ItemsModule,
  ChildrensModule,
  AuthModule
];

const Services = []

@Module({
  imports: Modules,
  controllers: [],
  providers: Services,
})
export class AppModule {}
