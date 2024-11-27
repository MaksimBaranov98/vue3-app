import type { Router } from "vue-router";

export type StoreTyped<T extends (...args: any) => any> = ReturnType<T> & { $router: Router };
