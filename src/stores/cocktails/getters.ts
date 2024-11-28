import type { Cocktails, State } from "./state";
import type { GetCocktailInfo } from "./types";

type Getters = {
  getCocktailCompositionList(state: State): GetCocktailInfo;
};

export const getters: Getters = {
  getCocktailCompositionList: (state) => (cocktailName: Cocktails) => {
    return JSON.parse(JSON.stringify(state[cocktailName]));
  },
};
