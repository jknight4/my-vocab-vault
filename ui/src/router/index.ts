import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '@/views/SignupView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { supabase } from '@/lib/supabaseClient'
import NewView from '@/views/NewView.vue'
import AddWordView from '@/views/AddWordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { public: true },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
      meta: { public: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { public: true },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/newPage',
      name: 'new',
      component: NewView,
      meta: { requiresAuth: true },
    },
    {
      path: '/addWord',
      name: 'addWord',
      component: AddWordView,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach(async (to) => {
  const { data, error } = await supabase.auth.getSession()
  console.log(data)
  console.log(error)

  if (to.meta.requiresAuth && !data.session) {
    return '/login'
  } else if (to.meta.public && data.session) {
    return '/dashboard'
  }
})

export default router
