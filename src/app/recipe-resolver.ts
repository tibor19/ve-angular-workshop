import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RecipeService } from './recipe.service';

@Injectable()
export class RecipeResolver implements Resolve<IRecipe> {
  constructor(private service: RecipeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getRecipe(route.params.id);
  }
}
