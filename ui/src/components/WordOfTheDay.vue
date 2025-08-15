<script setup lang="ts">
import { ref, onMounted } from 'vue'
const formattedDate = ref('')

const formatDate = (date: Date = new Date()): string => {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  })
}

onMounted(() => {
  formattedDate.value = formatDate()
})
</script>

<template>
  <article>
    <header>
      <p class="light-text">{{ formattedDate }}</p>
    </header>
    <div class="word-details">
      <h2>Fastidious</h2>
      <p class="light-text">Adjective</p>
      <p class="gray-text">Very attentive to and concerned about accuracy and detail</p>
    </div>
  </article>
</template>

<style lang="css" scoped>
article {
  padding: 2.2rem 0.8rem;
  text-align: center;
  background-color: var(--primary-light);
  cursor: pointer;
}

header {
  margin-bottom: 1.2rem;
}

.light-text {
  color: var(--primary-light-text);
}

.gray-text {
  color: var(--primary-text);
}

header > p {
  font-weight: 700;
  letter-spacing: -0.6px;
  font-size: 1.6rem;
  text-transform: uppercase;
}

.word-details {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.word-details > h2 {
  font-weight: 600;
  font-size: 3.4rem;
  color: var(--primary);
}
</style>
