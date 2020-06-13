import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';

@Injectable()
export class RecipeService {

    constructor() {}
    private recipes: Recipe[] = [
        new Recipe('Caesar Salad',
        'Caesar Salad(Descr)',
        'https://upload.wikimedia.org/wikipedia/commons/c/c9/Caesar_salad_%283010150846%29.jpg',
        [new Ingredients('Place 4 large vine tomates, cut into wedges, 1 peeled deseeded and chopped cucumber', 1),
        new Ingredients('Lighthy season, then serve with crusty bread to mop up all of the juices', 2)]),
        new Recipe('Greek Salad',
        'Greek Salad(Descr)',
        'https://upload.wikimedia.org/wikipedia/commons/c/cd/Glistrida_Greek_salad.JPG',
        [new Ingredients('Place 4 large vine tomates, cut into wedges, 1 peeled deseeded and chopped cucumber', 1),
        new Ingredients('Lighthy season, then serve with crusty bread to mop up all of the juices', 2)]),
        new Recipe('Beef & Asparagus pasta toss',
        'Beef & Asparagus pasta toss (Descr)',
        'https://p1.pxfuel.com/preview/988/624/868/tortellini-noodles-pasta-italian.jpg',
        [new Ingredients('Cooked pasta in salted boiling water 10 minutes or untill almost tender', 1)])
      ];

    getRecipe(id: number) {
       return this.recipes.slice()[id];
    }
    getRecipes() {
        return this.recipes.slice();
    }
}
