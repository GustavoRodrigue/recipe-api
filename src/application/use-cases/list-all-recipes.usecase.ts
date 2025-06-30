import { RecipeRepository } from "src/infrastructure/repositories/recipe.repository";

export class ListAllRecipesUseCase {
  constructor(private recipeRepo: RecipeRepository) {}

  async execute() {
    return this.recipeRepo.findAll();
  }
}