import { Routes } from 'nest-router';
import { AbilitiesModule } from './abilities.module';
import { ItemsModule } from './items/items.module';
import { ChildrensModule } from './childrens/childrens.module';
import { CategoriesModule } from './categories/categories.module';

export const AbilitiesRoutes: Routes = [
  {
    path: '/abilities',
    module: AbilitiesModule,
    children: [
      {
        path: '/categories',
        module: CategoriesModule,
      },
      {
        path: '/categories/:category_id/items',
        module: ItemsModule,
      },
      {
        path: '/categories/:category_id/items/:item_id/childrens',
        module: ChildrensModule,
      }
    ],
  },
];