import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';

import { RecipeComponent } from './recipe/recipe.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ImagePipe } from './pipes/image.pipe';
import { RecipeService } from './services/recipe.service';

@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  declarations: [
    RecipeComponent,
    WeeklyMenuComponent,
    IngredientsComponent,
    InstructionsComponent,
    ImagePipe
  ],
  providers: [RecipeService]
})
export class RecipeModule { }
