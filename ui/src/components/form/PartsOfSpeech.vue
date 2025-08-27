<script setup lang="ts">
import { PartsOfSpeech } from '@/types/PartsOfSpeech'
import { computed, ref } from 'vue'

const emit = defineEmits<{
  (e: 'getPartOfSpeech', partOfSpeech: string): void
}>()

const allPartsOfSpeechValues: PartsOfSpeech[] = Object.values(PartsOfSpeech)

const orderedPartsOfSpeech = new Set<PartsOfSpeech>([
  PartsOfSpeech.NOUN,
  PartsOfSpeech.ADJECTIVE,
  PartsOfSpeech.VERB,
  ...allPartsOfSpeechValues,
])

const showAll = ref(false)

const displayedPartsOfSpeech = computed(() => {
  return showAll.value ? [...orderedPartsOfSpeech] : [...orderedPartsOfSpeech].slice(0, 3)
})

function toggleView() {
  showAll.value = !showAll.value
}

const selectedPartsOfSpeech = ref()

function selectWord(partOfSpeechIndex: number) {
  if (selectedPartsOfSpeech.value === partOfSpeechIndex) {
    selectedPartsOfSpeech.value = null
    emit('getPartOfSpeech', '')
  } else {
    selectedPartsOfSpeech.value = partOfSpeechIndex
    emit('getPartOfSpeech', [...orderedPartsOfSpeech][selectedPartsOfSpeech.value])
  }
}
</script>

<template>
  <section>
    <label>Part of speech</label>
    <div class="part-of-speech-div">
      <button
        class="btn part-of-speech-btn"
        v-for="(partOfSpeech, index) in displayedPartsOfSpeech"
        :key="index"
        @click.prevent="selectWord(index)"
        :class="{ active: selectedPartsOfSpeech === index }"
      >
        {{ partOfSpeech }}
      </button>
      <button class="less-btn" @click.prevent="toggleView" v-if="showAll">
        <i class="bi bi-x"></i>
      </button>
      <button class="more-btn" @click.prevent="toggleView" v-else>
        More <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </section>
</template>

<style lang="css" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.more-btn {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  transition: all 0.3s ease-in;
  font-weight: 500;
  color: var(--primary-text);
}

.more-btn:hover {
  transform: translateX(10px);
}

.bi {
  font-size: 2rem;
  color: var(--primary-text);
}

.bi-x {
  font-size: 2.8rem;
}

.part-of-speech-div {
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  padding: 0 1.8rem;
}

.part-of-speech-btn {
  transition: all 0.3s ease-in;
  background-color: var(--light-gray);
  border-radius: 64px;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
}

.part-of-speech-btn.active {
  background-color: var(--primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
}

.part-of-speech-btn:hover {
  background-color: var(--primary);
  color: white;
}
</style>
