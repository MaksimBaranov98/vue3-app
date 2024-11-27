import type { Cocktails } from "@/stores/cocktails/state";

export type State = {
  activePage: Cocktails | null;
};

export const state = (): State => {
  return {
    activePage: null,
  };
};
