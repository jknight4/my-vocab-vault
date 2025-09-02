<script setup lang="ts">
import FooterNavigation from '@/components/common/FooterNavigation.vue'
import Logo from '@/components/common/Logo.vue'
import SearchBar from '@/components/SearchBar.vue'
import Words from '@/components/Words.vue'
import { useFilteredWords } from '@/composables/useFilteredWords'
import { useWordStore } from '@/stores/wordsStore'
import { computed, onMounted, ref } from 'vue'

const wordStore = useWordStore()
const isSearchSubmitted = ref(false)
const searchTerm = ref('')

onMounted(() => {
  wordStore.fetchWords()
})

const handleSearch = (payload: { isSubmitted: boolean; searchTerm: string }) => {
  console.log('function update search called: ', payload)
  isSearchSubmitted.value = payload.isSubmitted
  searchTerm.value = payload.searchTerm
}

const mutatedWords = useFilteredWords(
  computed(() => wordStore.wordResponse.words),
  searchTerm,
)
</script>

<template>
  <div class="container">
    <header>
      <Logo />
    </header>
    <section class="search-bar">
      <SearchBar @search-submit="handleSearch" />
    </section>
    <main>
      <Words :list-of-words="mutatedWords" :search-word="searchTerm" />
    </main>
    <FooterNavigation />
  </div>
</template>

<style lang="css" scoped>
main {
  min-height: 100vh;
}

.search-bar {
  align-self: center;
  width: 90%;
}

@media (min-width: 1024px) {
  input {
    width: 45%;
  }
}
</style>
