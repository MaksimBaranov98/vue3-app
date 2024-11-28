import type { CocktailComposition } from "./types";

export enum Cocktails {
  Margarita = "margarita",
  Mojito = "mojito",
  A1 = "a1",
  Kir = "kir",
}

export const cocktailsArray = Object.values(Cocktails);

export type State = {
  [Cocktails.Margarita]: CocktailComposition[];
  [Cocktails.Mojito]: CocktailComposition[];
  [Cocktails.A1]: CocktailComposition[];
  [Cocktails.Kir]: CocktailComposition[];
};

export const state = (): State => {
  return {
    [Cocktails.Margarita]: [],
    [Cocktails.Mojito]: [],
    [Cocktails.A1]: [],
    [Cocktails.Kir]: [],
  };
};
