<script setup lang="ts">
import type { Word } from '@/types/Word'

defineProps<{
  word: Word
  index?: number
}>()
</script>

<template>
  <RouterLink to="/">
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
  transition: all 0.3s ease;
}

a:hover {
  transform: translateY(-5px);
}

.word-card {
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  padding: 1.6rem;
}

.word-card > h3 {
  text-transform: capitalize;
  color: var(--dark-primary);
}

.word-card > p {
  color: var(--dark-secondary);
}
</style>
