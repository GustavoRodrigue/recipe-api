import { RecipeRepository } from "src/infrastructure/repositories/recipe.repository";

export class GetRecipeByIdUseCase {
  constructor(private recipeRepo: RecipeRepository) {}

  async execute(id: string) {
    return this.recipeRepo.findById(id);
  }
}