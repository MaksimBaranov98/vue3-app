import { Components } from "@/router/routes";
import { Cocktails } from "@/stores/cocktails/state";
import type { UserStore } from "@/stores/user";

type Actions = {
  setActivePage(this: UserStore, cocktail?: Cocktails, push?: boolean): void;
  clearActivePage(this: UserStore): void;
};

export const actions: Actions = {
  async setActivePage(page: Cocktails = Cocktails.Margarita) {
    this.activePage = page;

    this.$router.push({ name: Components.Cocktail, params: { name: page } });
  },

  async clearActivePage() {
    this.activePage = null;
  },
};
