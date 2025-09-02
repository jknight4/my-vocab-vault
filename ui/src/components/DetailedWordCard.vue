<script setup lang="ts">
import type { SingleWordApiResponse } from '@/types/responseData/SingleWordApiResponse';


defineProps<{
  word: SingleWordApiResponse
}>()
</script>

<template>
    <article>
        <header>
      <h1>{{ word.word.toLowerCase() }}</h1>
<div class="tool-bar"><i class="bi bi-trash-fill"></i></div>
        </header>
      <div class="tags">
        <p class="tag" v-for="tag in word.tags">{{ tag }}</p>
      </div>
      <div class="meaning-card" v-for="meaning in word.meanings">
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

h1 {
    text-transform: capitalize;
    font-size: 4rem;
}

.tool-bar > i {
    font-size: 2rem;
    color: var(--secondary-text);
}  


header{
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 1.2rem;
}

.tags {
    display: flex;
    column-gap: 2.2rem;
    row-gap: 1.2rem;
    margin-bottom: 3.2rem;
    flex-wrap: wrap;
}

.tag {
    background-color: var(--light-gray);
    font-size: 1.5rem;
    border-radius: 8px;
    padding: 0.2rem 1.2rem;
    width: fit-content;
    color: var(  --secondary-text);
    font-weight: 600;
}

article{
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
      ul li  {
    padding: 0.2rem 1.2rem;

  }
  article{
    width: 70%;
    margin: 0 auto;
}


}

</style>
