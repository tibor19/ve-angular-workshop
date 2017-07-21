import { Component, OnInit } from '@angular/core';
import { AfterContentInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { IngredientsComponent } from '../ingredients/ingredients.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: IRecipe;
  leave: boolean;

  constructor(route: ActivatedRoute) {
    this.recipe = route.snapshot.data['recipe'];
  }

  ngOnInit() {
  }

  canDeactivate(currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot) {
          return this.leave;
  }
}
