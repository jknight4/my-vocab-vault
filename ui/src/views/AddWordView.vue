<script setup lang="ts">
import router from '@/router'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

interface Definition {
  definition: string
  synonyms: string[]
  antonyms: string[]
  example?: string
}

interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

interface DictionaryEntry {
  word: string
  meanings: Meaning[]
}

function back() {
  router.go(-1)
}

function validateFields(): boolean {
  return true
}

const route = useRoute()
const wordFromUrl = route.params.word

const dictionaryApiData = ref<DictionaryEntry[]>([])

async function getWordData(wordFromUrl: string) {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordFromUrl}`)

  const data = await response.json()
  console.log('data: ', data)
  dictionaryApiData.value = data
}

// onMounted(() => {
//   getWordData(wordFromUrl.toString())
// })

function createWord() {}

function getAvailablePartsOfSpeech(wordMeanings: Meaning[] | undefined): string[] {
  if (!wordMeanings) return []
  return wordMeanings.map((meaning) => meaning.partOfSpeech)
}
</script>

<template>
  <form>
    <nav>
      <button @click.prevent="back">Back</button>
      <button @click.prevent="createWord" :disabled="validateFields()">Create</button>
    </nav>
    <!--
    <div>
      <h2>{{ wordFromUrl }}</h2>
      <ul>
        <li
          v-for="(part, index) in getAvailablePartsOfSpeech(dictionaryApiData[0].meanings)"
          :key="index"
        >
          {{ part }}
        </li>
      </ul> -->
    <!-- <p>{{ dictionaryApiData?.at(0)?.meanings?.at(0)?.partOfSpeech }}</p> -->
    <!-- </div> -->
  </form>
</template>

<style lang="css" scoped>
form {
  padding: 2.2rem;
}

nav {
  display: flex;
  justify-content: space-between;
}

h2 {
  font-weight: 700;
  color: var(--primary);
}

p {
  color: var(--primary);
}
</style>
