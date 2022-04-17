import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        layout: "full",
        requiresAuth: false,
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../views/ForgotPassword.vue"),
      meta: {
        layout: "full",
        requiresAuth: false,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
      meta: {
        layout: "vertical",
        requiresAuth: true,
      },
    },
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: {
        layout: "vertical",
        requiresAuth: true,
      },
    },
    {
      path: "/cases",
      name: "cases",
      component: () => import("../views/CasesView.vue"),
      meta: {
        layout: "vertical",
        requiresAuth: true,
      },
    },
    {
      path: "/laboratory",
      name: "laboratory",
      component: () => import("../views/LaboratoryView.vue"),
      meta: {
        layout: "vertical",
        requiresAuth: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: to => { return 'login' }
    }
  ],
});

router.beforeEach((to, from) => {

  const token = localStorage.getItem('x-token');

  if (to.meta.requiresAuth && !token) {
    return {
      path: "/login",
    };
  }

});

export default router;
