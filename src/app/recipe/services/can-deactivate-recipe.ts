import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { RecipeComponent } from '../recipe/recipe.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanDeactivateRecipe implements CanDeactivate<RecipeComponent> {

  canDeactivate(component: RecipeComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate(currentRoute, currentState, nextState);
  }
}
