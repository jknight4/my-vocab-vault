import type { Word } from '@/types/Word'
import { computed, type Ref } from 'vue'

export function useFilteredWords(words: Ref<Word[]>, searchTerm?: Ref<string>) {
  return computed(() => {
    let items = [...words.value]

    if (searchTerm?.value) {
      const query = searchTerm.value.toLowerCase()
      items = items.filter((item) => item.word.toLowerCase().includes(query))
    }

    return items
  })
}
