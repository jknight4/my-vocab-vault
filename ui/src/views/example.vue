<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'vue-router'
import router from '@/router'

const PWD_MIN_LENGTH = 8
const PWD_MAX_LENGTH = 32

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

async function login() {
  if (!email.value || !password.value) {
    errorMessage.value = 'Please fill in all fields'
    return
  }

  if (password.value.length < PWD_MIN_LENGTH) {
    errorMessage.value = `Password must be at least ${PWD_MIN_LENGTH} characters`
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error

    console.log(data)
    router.push('/dashboard')
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = error instanceof Error ? error.message : 'Login failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main>
    <div class="auth-container">
      <h1 class="logo">myWordVault</h1>
      <form @submit.prevent="login">
        <h2>Welcome back</h2>
        <p class="subtitle">Log in to access your vocabulary</p>

        <div class="form-inputs">
          <div class="input-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              v-model="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div class="input-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              v-model="password"
              :minlength="PWD_MIN_LENGTH"
              :maxlength="PWD_MAX_LENGTH"
              placeholder="At least 8 characters"
              required
            />
          </div>

          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <button type="submit" :disabled="isLoading" class="submit-btn">
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

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #003566 0%, #001d3d 100%);
  padding: 2rem;
}

.auth-container {
  width: 100%;
  max-width: 480px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 3.2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  color: white;
  text-align: center;
  font-size: 3.2rem;
  margin-bottom: 2.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

h2 {
  color: white;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 0.8rem;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 3.2rem;
  font-size: 1.6rem;
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

label {
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
}

input {
  padding: 1.2rem 1.6rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.6rem;
  transition: all 0.2s ease;
}

input:focus {
  outline: none;
  border-color: #ffd60a;
  box-shadow: 0 0 0 2px rgba(255, 214, 10, 0.2);
}

input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.user-form-submit-btn {
  width: 100%;
  padding: 1.4rem;
  border-radius: 8px;
  border: none;
  background: #ffd60a;
  color: #001d3d;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1.6rem;
}

.user-form-submit-btn:hover {
  background: #ffc300;
  transform: translateY(-1px);
}

.user-form-submit-btn:disabled {
  background: rgba(255, 214, 10, 0.5);
  cursor: not-allowed;
  transform: none;
}

.loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.error-message {
  color: #ff6d6d;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 0.8rem;
}

.auth-link {
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-size: 1.4rem;
}

.auth-link a {
  color: #ffd60a;
  text-decoration: none;
  font-weight: 500;
}

.auth-link a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .auth-container {
    padding: 2.4rem;
  }

  .logo {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
