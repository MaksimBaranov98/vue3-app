import Cocktail from "@/pages/Cocktail.vue";
import NotFound from "@/pages/NotFound.vue";
import type { RouteRecordRaw } from "vue-router";
import { type Cocktails, cocktailsArray } from "@/stores/cocktails/state";
import { useUserStore } from "@/stores/user";

export enum Components {
  Cocktail = "Cocktail",
  NotFound = "NotFound",
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/cocktail/:name?",
    name: Components.Cocktail,
    component: Cocktail,
    beforeEnter: (to, from, next) => {
      const cocktail = to.params?.name as Cocktails;

      console.log(11);

      if (!cocktailsArray.includes(cocktail)) next({ name: Components.NotFound });
      else next();
    },
  },
  {
    path: "/404",
    name: Components.NotFound,
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    beforeEnter: (to, from, next) => {
      const catchAll = to.params.catchAll;
      const userStore = useUserStore();

      console.log(catchAll);

      if (catchAll === "") userStore.setActivePage();
      else next();
    },
  },
];

export { routes };
