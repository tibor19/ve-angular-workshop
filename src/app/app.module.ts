import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ImagePipe } from './image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RecipeComponent,
    WeeklyMenuComponent,
    IngredientsComponent,
    InstructionsComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
