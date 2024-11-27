import type { State } from "./state";

type Getters = {
  nftsByActiveNetworks(state: State): [];
};

export const getters: Getters = {
  nftsByActiveNetworks(state) {
    return [];
  },
};
