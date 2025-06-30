import { Module } from '@nestjs/common';
import { RecipeController } from './presentation/controllers/recipe.controller';


@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [],
})
export class AppModule {}
