import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  @Input() ingredients: IRecipeIngredient[];
  constructor() { }

  ngOnInit() {
  }

}
