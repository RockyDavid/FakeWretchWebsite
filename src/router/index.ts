import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/post/:id/:showId",
      name: "post",
      component: () => import("../views/PostView.vue"),
    },
    {
      path: "/album",
      name: "album",
      component: () => import("../views/AlbumView.vue"),
    },
    {
      path: "/albumdetail/:id/:idx",
      name: "albumdetail",
      component: () => import("../views/AlbumDetailView.vue"),
    },
  ],
});

export default router;
