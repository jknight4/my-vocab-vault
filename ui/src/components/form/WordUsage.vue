<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'getExamples', examples: string[]): void
}>()

const exampleSentence = ref('')
const exampleSentencesList = ref<string[]>([])

function addSentence() {
  exampleSentencesList.value.push(exampleSentence.value)
  exampleSentence.value = ''
  emit('getExamples', [...exampleSentencesList.value])
}

function removeSentence(index: number) {
  exampleSentencesList.value.splice(index, 1)
  emit('getExamples', [...exampleSentencesList.value])
}
</script>

<template>
  <section>
    <label>Examples</label>
    <div class="examples-output">
      <div v-for="(example, index) in exampleSentencesList" :key="index">
        <p class="example-sentence">{{ example }}</p>
        <button @click.prevent="removeSentence(index)"><i class="bi bi-x"></i></button>
      </div>
    </div>
    <div class="examples-input">
      <textarea
        placeholder="She was a vivacious host, filling the party with laughter and energy."
        v-model="exampleSentence"
        @keydown.enter.prevent="addSentence"
      ></textarea>
      <p>Press 'Enter' to add an example</p>
    </div>
  </section>
</template>

<style lang="css" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

textarea {
  line-height: 1.5;
}

.examples-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.examples-input > p {
  color: var(--secondary-text);
  font-size: 1.4rem;
}

.examples-output > div {
  display: flex;
  padding: 0 1.8rem;
  margin-bottom: 0.8rem;
  align-items: center;
}

.examples-output > div > p {
  flex: 2;
  flex-wrap: wrap;
  color: var(--secondary-text);
}

.bi-x {
  font-size: 3rem;
  color: var(--warning);
  transition: all 0.3s ease-in;
}

button:hover .bi {
  color: var(--light-gray);
}
</style>
