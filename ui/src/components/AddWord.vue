<script setup lang="ts">
import { ref } from 'vue'

const vocabWord = ref<string>('')
const errorMessage = ref<string>('')

const emit = defineEmits(['addWord'])

function startWordCreation() {
  if (vocabWord.value.trim() !== '') {
    emit('addWord', true, vocabWord.value)
  } else {
    errorMessage.value = 'Word must have more than one characters'
  }
}
</script>

<template>
  <form>
    <h4>Add a new word</h4>
    <div class="word-inputs">
      <input class="add-word-input" type="text" v-model="vocabWord" />
      <RouterLink class="btn btn-blue" :to="`/addWord/${vocabWord}`" :disabled="!vocabWord"
        >Next</RouterLink
      >
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </form>
</template>

<style lang="css" scoped>
h4 {
  text-transform: uppercase;
  color: var(--dark-secondary);
  margin-bottom: 1.2rem;
}
form {
  margin-bottom: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.word-inputs {
  display: flex;
  align-items: center;
  gap: 2.2rem;
}

.add-word-input {
  border: 1px solid var(--light-secondary);
  background: none;
  color: var(--dark-secondary);
}

.add-word-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(0, 53, 102, 0.2);
}

.btn {
  padding: 1.4rem 2.2rem;
}
</style>
