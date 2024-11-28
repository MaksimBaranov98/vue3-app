import type { Cocktails } from "./state";

export interface CocktailComposition {
  // base
  idDrink: string;
  strDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;

  // reactive
  strMeasure1: string; // 1 - N
  strIngredient1: string; // 1 - N
}

export type GetCocktailInfo = (cocktailName: Cocktails) => CocktailComposition[];
