<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import router from '@/router'

const PWD_MIN_LENGTH: number = 8
const PWD_MAX_LENGTH: number = 32

const email = ref('')
const password = ref('')
const isLoading = ref<boolean>(false)
const errorMessage = ref<string>('')

async function createUser() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: 'http://localhost:5173/login',
      },
    })

    if (error) throw error
    console.log(data)
    router.push('/login')
  } catch (error) {
    errorMessage.value = 'Sign up. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="user-main-container">
    <div class="auth-container">
      <h1 class="auth-page-logo">myWordVault</h1>
      <form class="user-form" @submit.prevent="createUser">
        <h2>Sign Up</h2>
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
              :minlength="PWD_MIN_LENGTH"
              :maxlength="PWD_MAX_LENGTH"
              required
            />
          </div>

          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <button type="submit" class="user-form-submit-btn">
            <span v-if="!isLoading">Sign up</span>
            <span v-else class="loading">Signing up...</span>
          </button>
        </div>

        <p class="auth-link">
          Already have an account? <RouterLink to="/login">Log in</RouterLink>
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
