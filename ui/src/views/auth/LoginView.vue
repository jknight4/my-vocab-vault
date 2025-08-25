<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import router from '@/router'
import logo from '@/assets/images/mwv-logo-white.png'

const PWD_MAX_LENGTH: number = 32

const email = ref<string>('')
const password = ref<string>('')
const isLoading = ref<boolean>(false)
const errorMessage = ref<string>('')

async function login() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (error) throw error
    console.log('Login Log: ', data)
    router.push('/dashboard')
  } catch (error) {
    errorMessage.value = 'Login failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="user-main-container">
    <div class="auth-container">
      <header class="auth-header">
        <h1 class="auth-page-logo">myWordVault</h1>
      </header>
      <form class="user-form" @submit.prevent="login">
        <h2>Log in</h2>
        <div class="user-form-inputs">
          <div>
            <label>Email</label>
            <input type="email" name="email" v-model="email" required />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              v-model="password"
              :maxlength="PWD_MAX_LENGTH"
              required
            />
          </div>

          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <button type="submit" class="user-form-submit-btn">
            <span v-if="!isLoading">Log in</span>
            <span v-else class="loading">Logging in...</span>
          </button>
        </div>

        <p class="auth-link">
          Don't have an account? <RouterLink to="/signup">Sign up</RouterLink>
        </p>
      </form>
    </div>
  </main>
</template>

<style lang="css" scoped>
.error-message {
  font-size: 1.4rem;
  text-align: center;
  margin-top: 0.8rem;
}
</style>
