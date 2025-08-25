<script setup lang="ts">
import { ref } from 'vue'
const searchOption = ref('')
const searchingInProgress = ref(false)

const emit = defineEmits<{
  searchSubmit: [
    {
      isSubmitted: boolean
      searchTerm: string
    },
  ]
}>()

function searchSubmitted() {
  searchingInProgress.value = true
  emit('searchSubmit', {
    isSubmitted: true,
    searchTerm: searchOption.value,
  })
}

function startedSearching() {
  searchingInProgress.value = true

  emit('searchSubmit', {
    isSubmitted: false,
    searchTerm: searchOption.value,
  })
}

function clearSearch() {
  searchingInProgress.value = false
  searchOption.value = ''
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
      <button v-if="searchingInProgress" class="close-btn" @click="clearSearch">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  </form>
</template>

<style lang="css" scoped>
form {
  margin-bottom: 3.2rem;
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

.close-btn {
  transition: all 0.3s ease-in;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
}

.close-btn:hover > .bi-x-lg {
  color: rgba(0, 0, 0, 0.75);
}

.bi-search,
.bi-x-lg {
  font-size: 2.8rem;
}

.search-input::placeholder {
  font-size: 1.8rem;
}

.search-input::placeholder,
.bi-search,
.bi-x-lg {
  font-weight: 600;
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
