import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    }
  },
  {
    path: 'weekly-menu',
    component: WeeklyMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RecipeResolver]
})
export class AppRoutingModule { }
