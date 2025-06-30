import { Controller, Get, Post, Param, Body, NotFoundException, } from '@nestjs/common';
import { CreateRecipeUseCase } from 'src/application/use-cases/create-recipe.usecase';
import { GetRecipeByIdUseCase } from 'src/application/use-cases/get-recipe-by-id.usecase';
import { ListAllRecipesUseCase } from 'src/application/use-cases/list-all-recipes.usecase';
import { RecipeRepository } from 'src/infrastructure/repositories/recipe.repository';
import { RecipePresenter } from '../presenters/recipe.presenter';
import { CreateRecipeDto } from '../dtos/create-recipe.dto';

const repo = new RecipeRepository();

@Controller('recipes')
export class RecipeController {
  private createUseCase = new CreateRecipeUseCase(repo);
  private listUseCase = new ListAllRecipesUseCase(repo);
  private getByIdUseCase = new GetRecipeByIdUseCase(repo);

  @Post()
  async create(@Body() body: CreateRecipeDto) {
    const recipe = await this.createUseCase.execute(body);
    return RecipePresenter.toHTTP(recipe);
  }

  @Get()
  async listAll() {
    const recipes = await this.listUseCase.execute();
    if (recipes.length === 0) {
      throw new NotFoundException('Nenhuma receita cadastrada');
    }
    return recipes.map(RecipePresenter.toHTTP);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const recipe = await this.getByIdUseCase.execute(id);
    if (!recipe) {
      throw new NotFoundException('Nenhuma receita cadastrada com esse ID');
    }
    return RecipePresenter.toHTTP(recipe);
  }
}