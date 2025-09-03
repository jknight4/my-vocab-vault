<script setup lang="ts">
import { useWordStore } from '@/stores/wordsStore'
import { computed } from 'vue'

const wordStore = useWordStore()
const wordData = computed(() => wordStore.selectedWord)

function removeTag(index: number) {
  wordData.value.tags.splice(index, 1)
  //api call
}
</script>

<template>
  <article>
    <div class="tags">
      <div class="tag-div" v-for="(tag, index) in wordData.tags" :key="index">
        <p>{{ tag }}</p>
        <button @click.prevent="removeTag(index)"><i class="bi bi-x"></i></button>
      </div>
    </div>
    <div class="meaning-card" v-for="meaning in wordData.meanings">
      <div class="word-details">
        <p class="part-of-speech">{{ meaning.partsOfSpeech }}</p>
        <p class="definition">{{ meaning.definition }}</p>
      </div>
      <div class="examples">
        <h3>Example Sentences</h3>
        <ul>
          <li v-for="example in meaning.examples">{{ example }}</li>
        </ul>
      </div>
    </div>
  </article>
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

.tags {
  display: flex;
  column-gap: 2.2rem;
  row-gap: 1.2rem;
  margin-bottom: 3.2rem;
  flex-wrap: wrap;
}

.tag-div {
  background-color: var(--light-gray);
  font-size: 1.5rem;
  border-radius: 8px;
  padding: 0.2rem 1.2rem;
  width: fit-content;
  color: var(--secondary-text);
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.bi-x {
  font-size: 1.8rem;
  line-height: 0;
}

button:hover .bi-x {
  background-color: var(--light-secondary);
  border-radius: 50%;
}

article {
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
}

.meaning-card {
  margin-bottom: 4.8rem;
}

.word-details {
  margin-bottom: 1.8rem;
}

.word-details > p {
  line-height: 1.5;
  text-wrap: wrap;
}

.part-of-speech {
  text-transform: lowercase;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

ul {
  list-style: disc inside none;
  padding: 0;
}

ul li {
  padding: 0.8rem 1.2rem;
  line-height: 1.75;
}

@media (min-width: 800px) {
  ul li {
    padding: 0.2rem 1.2rem;
  }
}
</style>
