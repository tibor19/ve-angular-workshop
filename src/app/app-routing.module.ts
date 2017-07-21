import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { CanDeactivateRecipe } from './can-deactivate-recipe';
import { RecipeResolver } from './recipe-resolver';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent,
    resolve: {
      recipe: RecipeResolver
    },
    canDeactivate: [CanDeactivateRecipe]
  },
  {
    path: 'weekly-menu',
    component: WeeklyMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: !environment.production})],
  exports: [RouterModule],
  providers: [RecipeResolver, CanDeactivateRecipe]
})
export class AppRoutingModule { }
