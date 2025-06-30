import { RecipeRepository } from "../../infrastructure/repositories/recipe.repository";
import { CreateRecipeUseCase } from "./create-recipe.usecase";


describe('CreateRecipeUseCase', () => {
  let recipeRepo: RecipeRepository;
  let createRecipeUseCase: CreateRecipeUseCase;

  beforeEach(() => {
    recipeRepo = new RecipeRepository();
    createRecipeUseCase = new CreateRecipeUseCase(recipeRepo);
  });

  it('criar uma receita', async () => {
    const input = {
      title: 'Bolo de Chocolate',
      description: 'Receita de bolo',
      ingredients: ['chocolate', 'farinha', 'açúcar', 'ovos'],
    };

    const recipe = await createRecipeUseCase.execute(input);

    expect(recipe).toHaveProperty('id');
    expect(recipe.title).toBe(input.title);
    expect(recipe.description).toBe(input.description);
    expect(recipe.ingredients).toEqual(input.ingredients);
    expect(recipe.createdAt).toBeInstanceOf(Date);
    expect(recipe.updatedAt).toBeInstanceOf(Date);
  });
});