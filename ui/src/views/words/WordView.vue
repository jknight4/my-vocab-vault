<script setup lang="ts">
import FooterNavigation from '@/components/common/FooterNavigation.vue'
import DetailedWordCard from '@/components/DetailedWordCard.vue'
import router from '@/router'
import { useWordStore } from '@/stores/wordsStore'

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const wordStore = useWordStore()

onMounted(() => {
  console.log(route.params.word)
  wordStore.findWord(route.params.word)
})

function back() {
  router.go(-1)
}

function deleteWord(wordName: string) {
  wordStore.deleteWord(wordName)
  router.push('/')
}
</script>

<template>
  <div class="container">
    <main>
      <header>
        <button @click.prevent="back">
          <i class="bi bi-arrow-left-circle-fill"></i>
        </button>
        <h2>{{ wordStore.selectedWord.word.toLowerCase() }}</h2>
        <div>
          <button @click.prevent="deleteWord(wordStore.selectedWord.word)" class="btn delete-btn">
            Delete Word<i class="bi bi-trash3-fill"></i>
          </button>
        </div>
      </header>
      <DetailedWordCard />
    </main>
    <FooterNavigation />
  </div>
</template>

<style lang="css" scoped>
.delete-btn {
  display: flex;
  gap: 0.8rem;
  color: var(--primary);
  font-size: 1.6rem;
  align-items: center;
  background-color: white;
  border: 0.2px solid var(--primary);
  cursor: pointer;
}

main {
  padding: 1.6rem;
  width: 100%;
  align-self: center;
  margin-bottom: 9.6rem;
}

.bi-arrow-left-circle-fill {
  font-size: 3rem;
  transition: all 0.3s ease-in;
  color: var(--primary);
}

button:hover .bi-arrow-left-circle-fill {
  color: var(--light-gray);
}

.delete-btn {
  display: flex;
  gap: 0.8rem;
  color: var(--primary);
  font-size: 1.6rem;
  align-items: center;
  background-color: white;
  border: 0.2px solid var(--primary);
  cursor: pointer;
}

.delete-btn:hover {
  border: 0.2px solid var(--light-gray);
}

header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.8rem;
}

h2 {
  font-size: 3.2rem;
  color: var(--primary);
  text-transform: capitalize;
}

@media (min-width: 1024px) {
  main {
    padding: 0;
    width: 60%;
  }
}
</style>
