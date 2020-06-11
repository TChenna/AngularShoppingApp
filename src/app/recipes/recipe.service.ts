import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private shpListServ: ShoppingListService) {}
    private recipes: Recipe[] = [
        new Recipe('Biryani',
        'Hyderabad Dumm Biryani',
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg', 
        [new Ingredients('Chicken', 1),
        new Ingredients('Rice', 2)]),
        new Recipe('Pulao',
        'Chicken Pulao',
        'https://upload.wikimedia.org/wikipedia/commons/7/78/Bangladeshi_Home-made_Beef_Biryani.jpg',
        [new Ingredients('Chicken', 1),
        new Ingredients('Rice', 1)])
      ];

    getRecipe(id: number) {
       return this.recipes.slice()[id];
    }
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientstoShoppingList(ingredients: Ingredients[]) {
        this.shpListServ.addIngredients(ingredients);
    }
}
