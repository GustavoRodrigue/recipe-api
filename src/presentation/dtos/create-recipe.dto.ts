import { IsNotEmpty, IsString, IsArray, ArrayNotEmpty } from 'class-validator';
import { RecipeMessages } from 'src/domain/messages/recipe.messages';

export class CreateRecipeDto {
  @IsString({message: RecipeMessages.TITLE_STRING})
  @IsNotEmpty({ message: RecipeMessages.TITLE_REQUIRED })
  title: string;

  @IsString({message: RecipeMessages.DESCRIPTION_STRING})
  @IsNotEmpty({ message: RecipeMessages.DESCRIPTION_REQUIRED })
  description: string;

  @IsArray({message: RecipeMessages.INGREDIENTS_ARRAY})
  @ArrayNotEmpty({message: RecipeMessages.INGREDIENTS_REQUIRED})
  @IsString({ each: true, message: RecipeMessages.INGREDIENTS_STRING })
  ingredients: string[];
}