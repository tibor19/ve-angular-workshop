import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipe(): Observable<IRecipe> {
    return this.http.get<IRecipe>('/assets/data/recipe.json');
  }

  getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>('/assets/data/recipes.json');
  }
}
