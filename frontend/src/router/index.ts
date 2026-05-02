import Card from '@/pages/Card.vue';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import NotFound from '@/pages/NotFound.vue';
import { useAuthStore } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/card",
      component: Card,
      meta: { requiresAuth: true }
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound
    }
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isLogged) {
    next("/login");
  } else {
    next();
  }
});

export default router;
