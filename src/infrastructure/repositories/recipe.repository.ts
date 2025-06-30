
import { randomUUID } from 'node:crypto';
import { Recipe } from 'src/domain/entities/recipe.entity';

export class RecipeRepository {
  private recipes: Recipe[] = [];

  async create(data: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>): Promise<Recipe> {
    const recipe: Recipe = {
      ...data,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.recipes.push(recipe);
    return recipe;
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipes;
  }

  async findById(id: string): Promise<Recipe | null> {
    return this.recipes.find((r) => r.id === id) || null;
  }
}