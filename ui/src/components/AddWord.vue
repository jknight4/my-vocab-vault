<script setup lang="ts">
import { ref } from 'vue'

const vocabWord = ref<string>('')
</script>

<template>
  <form>
    <h1>Add New Word</h1>
    <div>
      <label>Word</label>
      <input type="text" v-model="vocabWord" />
    </div>
  </form>
</template>

<style scoped></style>
