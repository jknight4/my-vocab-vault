<script setup lang="ts">
import FooterNavigation from '@/components/common/FooterNavigation.vue'
import Logo from '@/components/common/Logo.vue'
import Words from '@/components/Words.vue'
import { supabase } from '@/lib/supabaseClient'
import { useWordStore } from '@/stores/wordsStore'
import { onMounted, ref } from 'vue'

const wordStore = useWordStore()

async function signOut() {
  const { error } = await supabase.auth.signOut()
}
const newVocabWord = ref<string>('')

onMounted(() => {
  wordStore.fetchWords()
  console.log(wordStore.wordResponse)
})
</script>

<template>
  <div class="container">
    <Logo />
    <main>
      <input type="text" />

      <Words :list-of-words="wordStore.wordResponse.words" />

      <!-- <button @click="signOut">Sign out</button> -->

      <FooterNavigation />
    </main>
  </div>
</template>

<style lang="css" scoped>
.container {
  padding-top: 2.2rem;
  overflow-x: hidden;
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
  margin-bottom: 3.2rem;
}
input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(0, 53, 102, 0.2);
}

.word {
  margin-bottom: 2.2rem;
}

@media (min-width: 1024px) {
  input {
    width: 45%;
  }
}
</style>
