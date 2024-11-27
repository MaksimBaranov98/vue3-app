import { defineStore } from "pinia";
import { state } from "@/stores/user/state";
import { actions } from "@/stores/user/actions";
import type { StoreTyped } from "@/stores/type";

const _useUserStore = defineStore("user", {
  state,
  actions,
});

type UserStoreType = typeof _useUserStore;

export type UserStore = StoreTyped<UserStoreType>;

export const useUserStore = () => _useUserStore() as UserStore;
