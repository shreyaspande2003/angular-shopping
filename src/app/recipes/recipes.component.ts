import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // event emit hone par andar ka function ko hamne subscribe kia ya use kia
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
