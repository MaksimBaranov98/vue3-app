import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import { markRaw } from "vue";

const pinia = createPinia();

pinia.use(({ store }) => (store.$router = markRaw(router)));

const app = createApp(App);

app.use(router).use(pinia).mount("#app");
