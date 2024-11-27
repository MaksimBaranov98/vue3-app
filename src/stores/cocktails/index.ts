import { defineStore } from "pinia";
import { state } from "@/stores/cocktails/state";
import { getters } from "@/stores/cocktails/getters";
import { actions } from "@/stores/cocktails/actions";
import type { StoreTyped } from "@/stores/type";

export const useCocktailsStore = defineStore("cocktails", {
  state,
  getters,
  actions,
});

type CocktailsStoreType = typeof useCocktailsStore;

export type CocktailsStore = StoreTyped<CocktailsStoreType>;
