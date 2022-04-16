import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        layout: 'full',
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../views/ForgotPassword.vue"),
      meta: {
        layout: 'full',
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
      meta: {
        layout: 'vertical',
      },
    },
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: {
        layout: 'vertical',
      },
    },
    {
      path: "/cases",
      name: "cases",
      component: () => import("../views/CasesView.vue"),
      meta: {
        layout: 'vertical',
      },
    },
    {
      path: "/laboratory",
      name: "laboratory",
      component: () => import("../views/LaboratoryView.vue"),
      meta: {
        layout: 'vertical',
      },
    },
  ],
});

export default router;
