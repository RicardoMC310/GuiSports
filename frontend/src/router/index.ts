import Card from '@/pages/Card.vue';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import NotFound from '@/pages/NotFound.vue';
import Register from '@/pages/Register.vue';
import { useAuthStore } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        title: "Home",
        headerTitle: "Main Page",
        headerSubTitle: "Só os mais vendidos"
      }
    },
    {
      path: "/login",
      component: Login,
      meta: {
        title: "Login",
        headerTitle: "Entrar",
        headerSubTitle: "Bem-vindo de volta!"
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        title: "Register",
        headerTitle: "Registrar",
        headerSubTitle: "Obrigado pela preferência"
      }
    },
    {
      path: "/card",
      component: Card,
      meta: { 
        requiresAuth: true,
        title: "Card"
      }
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
      meta: {
        title: "Not Found"
      }
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

router.afterEach((to) => {
  const defaultTitle = "GuiSports";

  document.title = to.meta.title ? `${to.meta.title} | ${defaultTitle}` : defaultTitle;
});

export default router;
