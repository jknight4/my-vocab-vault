<script setup lang="ts">
import type { Word } from '@/types/Word'
import WordCard from './WordCard.vue'

defineProps({
  listOfWords: Array<Word>,
})
</script>

<template>
  <article>
    <h2>MY WORDS</h2>
    <div>
      <WordCard v-for="(word, index) in listOfWords" :key="word.word" :word="word" :index="index" />
    </div>
  </article>
</template>

<style lang="css" scoped>
article {
  padding: 1.2rem;
}

article > div {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
}

h2 {
  font-size: 2rem;
  letter-spacing: -0.75px;
  color: var(--primary-text);
  margin-bottom: 1.2rem;
}
</style>
