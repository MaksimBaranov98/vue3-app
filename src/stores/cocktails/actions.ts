import { Cocktails } from "@/stores/cocktails/state";
import axios from "axios";
import type { CocktailsStore } from "@/stores/cocktails";

type Actions = {
  fetchCocktailData(this: CocktailsStore, cocktail: Cocktails): Promise<void>;
};

export const actions: Actions = {
  async fetchCocktailData(cocktail: Cocktails = Cocktails.Margarita) {
    if (this[cocktail]) return;

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;

    const res = await axios.get(url);

    if (res.status !== 200) return;

    this[cocktail] = res.data;
  },
};
