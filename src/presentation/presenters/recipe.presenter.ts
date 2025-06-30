import { Recipe } from "src/domain/entities/recipe.entity";


export class RecipePresenter {
  static toHTTP(recipe: Recipe) {
    return {
      id: recipe.id,
      title: recipe.title,
      ingredients: recipe.ingredients,
      createdAt: recipe.createdAt.toISOString(),
      
    };
  }
}