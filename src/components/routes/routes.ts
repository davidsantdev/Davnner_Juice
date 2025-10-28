import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../Main.vue";
import Produto from "@/page/Produto.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/produtos", component: Produto },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
