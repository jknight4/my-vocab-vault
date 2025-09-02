<script setup lang="ts">
import type { Word } from '@/types/Word'

defineProps<{
  word: Word
  index?: number
}>()
</script>

<template>
  <RouterLink :to="{ path: `/word/${word.word.toLowerCase()}` }">
    <article class="word-card">
      <h3>
        {{ word.word.toLocaleLowerCase() }}
      </h3>
      <p>{{ word.meanings[0].definition }}</p>
    </article>
  </RouterLink>
</template>

<style lang="css" scoped>
a {
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

a:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

a:hover > article > h3 {
  color: var(--dark-cta);
}

.word-card {
  padding: 1.6rem;
}

.word-card > h3 {
  text-transform: capitalize;
  color: var(--primary-text);
  font-weight: 600;
}

.word-card > p {
  color: var(--secondary-text);
  font-weight: 400;
}
</style>
