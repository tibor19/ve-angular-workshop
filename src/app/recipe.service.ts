import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  constructor() { }

  getRecipe(): IRecipe {
    return {
      'recipeId': 1,
      'name': 'Fish sticks and Rice',
      'price': 2.0,
      'time': 20,
      'image': 'fishsticks-mine',
      'recipeIngredients': [{
        'recipeIngredientId': 1,
        'ingredient': {
          'ingredientId': 1,
          'name': 'Fish sticks', 'Type': 'fish'
        },
        'amount': 2.0,
        'amountType': 'Portions of'
      }, {
        'recipeIngredientId': 2,
        'ingredient': {
          'ingredientId': 2,
          'name': 'Rice',
          'Type': 'Pasta'
        },
        'amount': 2.0,
        'amountType': 'Portions of'
      }, {
        'recipeIngredientId': 3,
        'ingredient': {
          'ingredientId': 3,
          'name': 'Mayonaise',
          'Type': 'Condiment'
        },
        'amount': null,
        'amountType': null
      }, {
        'recipeIngredientId': 4,
        'ingredient': {
          'ingredientId': 4,
          'name': 'Water',
          'Type': 'Condiment'
        },
        'amount': null,
        'amountType': null
      }],
      'recipeInstructions': [{
        'recipeInstructionId': 1,
        'instructionText': 'Follow instructions on rice package to make rice'
      }, {
        'recipeInstructionId': 2,
        'instructionText': 'Fry fish sticks'
      }, {
        'recipeInstructionId': 3,
        'instructionText': 'Plate and serve with mayo'
      }]
    };
  }

  getRecipes(): IRecipe[] {
    return [{
      'recipeId': 1,
      'name': 'Fish sticks and Rice',
      'price': 2.0,
      'time': 20,
      'image': 'fishsticks-mine',
      'recipeIngredients': [],
      'recipeInstructions': []
    }, {
      'recipeId': 2,
      'name': 'Pizza',
      'price': 13.0,
      'time': 30,
      'image': 'pizza-clip',
      'recipeIngredients': [],
      'recipeInstructions': []
    }, {
      'recipeId': 3,
      'name': 'Pasta with Meatsauce',
      'price': 3.0,
      'time': 11,
      'image': 'pasta-clip',
      'recipeIngredients': [],
      'recipeInstructions': []
    }, {
      'recipeId': 4,
      'name': 'Cereal with Millk',
      'price': 1.0,
      'time': 1,
      'image': 'cereal-clip',
      'recipeIngredients': [],
      'recipeInstructions': []
    }, {
      'recipeId': 5,
      'name': 'Meatballs and Mashed Potatoes',
      'price': 4.0,
      'time': 5,
      'image': 'meatballs-clip',
      'recipeIngredients': [],
      'recipeInstructions': []
    }, {
      'recipeId': 6,
      'name': 'Waffles and Jam',
      'price': 3.0,
      'time': 12,
      'image': 'waffles-clip',
      'recipeIngredients': [],
      'recipeInstructions': []
    }, {
      'recipeId': 7,
      'name': 'Hamburgers',
      'price': 3.0,
      'time': 15,
      'image': 'hamburger-clip',
      'recipeIngredients': [],
      'recipeInstructions': []
    }, {
      'recipeId': 8,
      'name': 'Ham and Cheeze Sandwich',
      'price': 2.0,
      'time': 5,
      'image': 'sandwich-clip',
      'recipeIngredients': [],
      'recipeInstructions': []
    }, {
      'recipeId': 9,
      'name': 'Magic Ice cream',
      'price': 4.0,
      'time': 3,
      'image': 'icecream-clip',
      'recipeIngredients': [],
      'recipeInstructions': []
    }];
  }
}
