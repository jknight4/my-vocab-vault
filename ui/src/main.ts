import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { supabase } from '@/lib/supabaseClient'
import { useAuthStore } from './stores/authStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const authStore = useAuthStore()
authStore.initialize()

supabase.auth.onAuthStateChange(async (event) => {
  console.log('Auth state changed:', event)

  const currentRoute = router.currentRoute.value

  if (event === 'SIGNED_OUT') {
    if (currentRoute.meta.requiresAuth) {
      authStore.clearSession()
      console.log('User signed out, redirecting to home')
      router.push('/login')
    }
  } else if (event === 'SIGNED_IN') {
    router.push('/dashboard')
  }
})

app.mount('#app')
