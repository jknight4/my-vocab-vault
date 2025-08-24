<script setup lang="ts">
import type { Word } from '@/types/Word'
import WordCard from './WordCard.vue'
import NoWordFound from './NoWordFound.vue'
import { ApiName } from '@/types/ApiName'

defineProps({
  listOfWords: Array<Word>,
  searchWord: String,
})
</script>

<template>
  <article>
    <nav>
      <h2 class="active">MY WORDS</h2>
      <h2 class="disabled">SEARCH RESULTS</h2>
    </nav>
    <div v-if="listOfWords?.length != 0">
      <WordCard v-for="(word, index) in listOfWords" :key="word.word" :word="word" :index="index" />
    </div>
    <div v-else>
      <NoWordFound :search-type="ApiName.MY_WORDS" :search-word="searchWord" />
    </div>
  </article>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  gap: 3.2rem;
  margin-bottom: 2.2rem;
}

article {
  padding: 1.2rem;
}

article > div {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
}

h2 {
  font-size: 1.8rem;
  letter-spacing: -0.75px;
  color: var(--primary-text);
  margin-bottom: 1.2rem;
}

.active {
  border-bottom: 2px solid var(--primary-text);
}

.disabled {
  color: var(--light-secondary);
}
</style>
