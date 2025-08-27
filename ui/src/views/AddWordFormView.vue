<script setup lang="ts">
import FooterNavigation from '@/components/common/FooterNavigation.vue'
import PartsOfSpeech from '@/components/form/PartsOfSpeech.vue'
import Tags from '@/components/form/Tags.vue'
import WordUsage from '@/components/form/WordUsage.vue'
import router from '@/router'
import type { CreateWordRequestData } from '@/types/CreateWordRequestData'
import { ref } from 'vue'

function back() {
  router.go(-1)
}

function handleExampleSentences(examples: string[]) {
  wordFormData.value.examples = examples
  console.log('example sentences: ', examples)
}

function handlePartOfSpeech(partOfSpeech: string) {
  wordFormData.value.partsOfSpeech = partOfSpeech
  console.log('part of speech: ', partOfSpeech)
}

const defaultWordFormData: CreateWordRequestData = {
  word: '',
  partsOfSpeech: '',
  tags: [],
  definition: '',
  examples: [],
}

const wordFormData = ref({ ...defaultWordFormData })

function submitForm() {
  console.log('payload: ', wordFormData.value)
}
</script>

<template>
  <div class="container">
    <main>
      <header>
        <button @click.prevent="back">
          <i class="bi bi-arrow-left-circle-fill"></i>
        </button>
        <h2>Add word to your vault</h2>
        <div></div>
      </header>
      <form>
        <div>
          <label>Word</label>
          <input type="text" v-model="wordFormData.word" placeholder="Vivacious" />
        </div>

        <PartsOfSpeech @get-part-of-speech="handlePartOfSpeech" />

        <div>
          <label>Definition</label>
          <textarea
            v-model="wordFormData.definition"
            placeholder="lively in temper, conduct, or spirit"
          ></textarea>
        </div>

        <WordUsage @get-examples="handleExampleSentences" />

        <Tags />

        <div>
          <button @click.prevent="submitForm" class="btn cta-btn">SAVE</button>
        </div>
      </form>
    </main>
    <FooterNavigation />
  </div>
</template>

<style lang="css" scoped>
main {
  padding: 1.6rem;
  width: 100%;
  align-self: center;
  margin-bottom: 9.6rem;
}

.bi {
  font-size: 3rem;
  transition: all 0.3s ease-in;
  color: var(--primary);
}

button:hover .bi {
  color: var(--light-gray);
}

header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.8rem;
}

h2 {
  color: var(--primary);
}

form {
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
}

form > div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.cta-btn {
  align-self: center;
  width: 40%;
}

@media (min-width: 1024px) {
  main {
    padding: 0;
    width: 60%;
  }
}
</style>
