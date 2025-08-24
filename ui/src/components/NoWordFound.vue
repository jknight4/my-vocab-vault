<script setup lang="ts">
import { ApiName } from '@/types/ApiName'
import { computed } from 'vue'

const props = defineProps<{
  searchType: ApiName
  searchWord?: string
}>()

const isMyWordsSearch = computed(() => props.searchType === ApiName.MY_WORDS)
</script>

<template>
  <article class="no-word-found-article">
    <p class="heading">No results found for "{{ searchWord }}"</p>

    <p v-if="isMyWordsSearch" class="subheading">
      Press Enter to see full search results or
      <RouterLink class="cta-link" to="/add-word">add this word to your vault </RouterLink>
    </p>
    <p v-else>
      Check your spelling or
      <RouterLink class="cta-link" to="/add-word">add this word to your vault</RouterLink>
    </p>
  </article>
</template>

<style lang="css" scoped>
.cta-link {
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  color: var(--dark-cta);
  border-bottom: solid 1.2px var(--dark-cta);
  transition: all 0.3s ease-in;
}

.cta-link:hover {
  border-bottom: none;
}

.no-word-found-article {
  padding: 4.8rem;

  display: flex;
  gap: 1.4rem;
  flex-direction: column;
  text-align: center;
}

.heading {
  font-weight: 600;
  font-size: 2.2rem;
  color: var(--primary-text);
}

.subheading {
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--secondary-text);
}
</style>
