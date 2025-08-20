<script setup lang="ts">
import AddWord from '@/components/AddWord.vue'
import Navigation from '@/components/Navigation.vue'
import WordOfTheDay from '@/components/WordOfTheDay.vue'
import { supabase } from '@/lib/supabaseClient'
import router from '@/router'
import { ref } from 'vue'

async function signOut() {
  const { error } = await supabase.auth.signOut()
}

const newVocabWord = ref<string>('')
</script>

<template>
  <div class="container">
    <header>
      <h1 class="logo-blue">myWordVault</h1>
    </header>
    <main>
      <!-- <AddWord /> -->
      <Navigation />
      <input type="text" />
      <WordOfTheDay />
      <!-- <RouterLink to="/newPage">Next</RouterLink> -->
      <button @click="signOut">Sign out</button>
    </main>
  </div>
</template>

<style lang="css" scoped>
.container {
  padding-top: 2.2rem;
  overflow-x: hidden;
}
header {
  text-align: center;
  margin-bottom: 2.2rem;
}

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

input {
  border: 1px solid var(--light-secondary);
  width: 85%;
  align-self: center;
  border-radius: 16px;
  background: none;
  color: var(--dark-secondary);
  margin-bottom: 4.8rem;
}
input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(0, 53, 102, 0.2);
}

@media (min-width: 1024px) {
  input {
    width: 45%;
  }
}
</style>
