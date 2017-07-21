import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { CanActivateAuth } from './services/can-activate-auth';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipe',
    loadChildren: 'app/recipe/recipe.module#RecipeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: !environment.production})],
  exports: [RouterModule],
  providers: [CanActivateAuth]
})
export class AppRoutingModule { }
