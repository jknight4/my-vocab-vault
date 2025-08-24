import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Word } from '@/types/Word'
import { useAuthStore } from './authStore'
import type { WordsResponse } from '@/types/WordsResponse'

export const useWordStore = defineStore('word', {
  state: () => ({
    wordResponse: {
      numberOfWords: 0,
      words: [] as Word[],
    } as WordsResponse,
  }),
  actions: {
    async fetchWords() {
      const authStore = useAuthStore()
      const token = authStore.getToken

      try {
        const response = await fetch('http://localhost:8080/api/word-management/words', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (!response.ok) throw new Error('Failed to fetch')

        const data: WordsResponse = await response.json()

        console.log('store log: ', data)
        this.wordResponse = data
      } catch (error) {
        console.error('Error fetching')
      }
    },
  },
})
