import { Component, OnInit } from '@angular/core';
import { AfterContentInit,  ViewChild } from '@angular/core';
import { IngredientsComponent } from '../ingredients/ingredients.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, AfterContentInit {

  @ViewChild(IngredientsComponent)
  private ingredientsComponent: IngredientsComponent;

  recipe: IRecipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe();
  }

  ngAfterContentInit(): void {
    this.ingredientsComponent.ingredients = this.recipe.recipeIngredients;
  }

}
