<script setup lang="ts">
import { ref } from 'vue'

const tag = ref('')
const tags = ref<string[]>([])

const emit = defineEmits<{
  (e: 'getTags', tags: string[]): void
}>()

function addTag() {
  tags.value.push(tag.value)
  tag.value = ''
  emit('getTags', [...tags.value])
}

function removeTag(index: number) {
  tags.value.splice(index, 1)
  emit('getTags', [...tags.value])
}
</script>

<template>
  <section>
    <label> Tags </label>
    <div class="tags">
      <div v-for="(tag, index) in tags" :key="index" class="tag-div">
        <p>{{ tag }}</p>
        <button @click.prevent="removeTag(index)"><i class="bi bi-x"></i></button>
      </div>
      <input
        class="tags-input"
        type="text"
        v-model="tag"
        @keydown.enter.prevent="addTag"
        placeholder="Start typing"
      />
    </div>
    <p>Press 'Enter' to separate tags</p>
  </section>
</template>

<style lang="css" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

section > p {
  color: var(--secondary-text);
  font-size: 1.4rem;
}

.tags {
  border: 1px solid var(--light-secondary);
  border-radius: 8px;
  padding: 0.8rem;
  margin-bottom: 0.6rem;

  display: flex;
  flex-wrap: wrap;
  column-gap: 1.2rem;
  row-gap: 0.8rem;

  font-family: inherit;
  font-size: 1.5rem;
  color: var(--primary-text);
}

.tags-input {
  padding: 0 0.8rem;
  font-size: 1.5rem;
  min-height: 3.2rem;
  cursor: text;
  outline: none;
  background: none;
  border: none;
}

.tag-div {
  border-radius: 8px;
  padding: 0.4rem 1.2rem;
  background-color: var(--light-gray);

  display: flex;
  align-items: center;
  gap: 0.4rem;
}

button:hover .bi-x {
  background-color: var(--light-secondary);
  border-radius: 50%;
}

.bi-x {
  font-size: 2.4rem;
  line-height: 0;
}

.tags:focus-within {
  outline: none;
  border: 2px solid var(--dark-cta);
}
</style>
