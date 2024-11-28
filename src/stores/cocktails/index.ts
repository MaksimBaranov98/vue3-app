import { defineStore } from "pinia";
import { state } from "@/stores/cocktails/state";
import { getters } from "@/stores/cocktails/getters";
import { actions } from "@/stores/cocktails/actions";

export const useCocktailsStore = defineStore("cocktails", {
  state,
  getters,
  actions,
});

export type CocktailsStore = ReturnType<typeof useCocktailsStore>;
