<script setup lang="ts">
import { ref } from 'vue'
const searchOption = ref('')

const emit = defineEmits<{
  searchSubmit: [
    {
      isSubmitted: boolean
      searchTerm: string
    },
  ]
}>()

function searchSubmitted() {
  emit('searchSubmit', {
    isSubmitted: true,
    searchTerm: searchOption.value,
  })
}

function startedSearching() {
  emit('searchSubmit', {
    isSubmitted: false,
    searchTerm: searchOption.value,
  })
}
</script>

<template>
  <form @submit.prevent="searchSubmitted">
    <div class="search">
      <i class="bi bi-search"></i>
      <input
        @input="startedSearching"
        v-model="searchOption"
        class="search-input"
        type="text"
        placeholder="Search"
      />
    </div>
  </form>
</template>

<style lang="css" scoped>
form {
  margin-bottom: 2.2rem;
}

.search {
  display: flex;
  align-items: center;
  padding: 0.8rem 2.2rem;
  gap: 1.2rem;
  border-radius: 64px;
  background-color: var(--light-gray);
}

.search-input {
  cursor: text;
  font-size: 1.8rem;
  font-weight: 500;
  width: 100%;

  color: var(--primary-text);
  transition: box-shadow 0.3s ease-in;

  outline: none;
  background: none;
  background: transparent;
  border: none;
}

.search:focus-within {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.75);
}

.bi-search {
  font-size: 2.8rem;
}

.search-input::placeholder {
  font-size: 1.8rem;
}

.search-input::placeholder,
.bi-search {
  font-weight: 700;
  color: rgba(0, 0, 0, 0.25);
}

input:focus {
  outline: none;
  background: none;
  background: transparent;
  box-shadow: none;
  border: none;
}
</style>
