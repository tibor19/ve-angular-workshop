import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuth } from '../services/can-activate-auth';

import { CanDeactivateRecipe } from './services/can-deactivate-recipe';
import { RecipeResolver } from './services/recipe-resolver';
import { RecipeComponent } from './recipe/recipe.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';

const routes: Routes = [
  {
    path: 'weekly-menu',
    component: WeeklyMenuComponent,
    canActivate: [CanActivateAuth]
  },
  {
    path: ':id',
    component: RecipeComponent,
    resolve: {
      recipe: RecipeResolver
    },
    canDeactivate: [CanDeactivateRecipe]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RecipeResolver, CanDeactivateRecipe]
})
export class RecipeRoutingModule { }
