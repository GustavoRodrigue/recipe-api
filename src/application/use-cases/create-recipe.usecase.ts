import { Recipe } from "src/domain/entities/recipe.entity";
import { RecipeRepository } from "src/infrastructure/repositories/recipe.repository";



export class CreateRecipeUseCase {
  constructor(private recipeRepo: RecipeRepository) {}

  async execute(data: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>): Promise<Recipe> {
    return this.recipeRepo.create(data);
  }
}