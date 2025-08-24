import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '@/views/auth/SignupView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { supabase } from '@/lib/supabaseClient'
import AddWordView from '@/views/AddWordView.vue'
import { useAuthStore } from '@/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { notViewableSignedIn: true },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
      meta: { notViewableSignedIn: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { notViewableSignedIn: true },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/add-word',
      name: 'addWord',
      component: AddWordView,
      meta: { requiresAuth: true },
    },
    {
      path: '/study',
      name: 'studyCenter',
      component: AddWordView,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  if (authStore.isLoading) {
    await authStore.initialize()
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return '/login'
  } else if (authStore.isAuthenticated && to.meta.notViewableSignedIn) {
    return '/dashboard'
  }
})

export default router
