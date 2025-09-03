import { defineStore } from 'pinia'
import type { Word } from '@/types/Word'
import { useAuthStore } from './authStore'
import type { CreateWordRequestData } from '@/types/CreateWordRequestData'
import type { SingleWordApiResponse } from '@/types/responseData/SingleWordApiResponse'
import type { WordsResponse } from '@/types/responseData/WordsResponse'
import type { MeaningResponse } from '@/types/responseData/MeaningResponse'

export const useWordStore = defineStore('word', {
  state: () => ({
    wordResponse: {
      numberOfWords: 0,
      words: [] as Word[],
    } as WordsResponse,
    selectedWord: {
      word: '',
      tags: [] as string[],
      meanings: [] as MeaningResponse[],
      createdAt: '',
      updatedAt: '',
    } as SingleWordApiResponse,
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
    async createWord(requestData: CreateWordRequestData) {
      const authStore = useAuthStore()
      const token = authStore.getToken

      try {
        await fetch('http://localhost:8080/api/word-management/word', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        })
      } catch (error) {
        console.error('Error fetching')
      }
      await this.fetchWords()
    },
    async findWord(word: string | string[]) {
      const authStore = useAuthStore()
      const token = authStore.getToken

      try {
        const response = await fetch(`http://localhost:8080/api/word-management/word/${word}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (!response.ok) throw new Error('Failed to fetch')

        const data: SingleWordApiResponse = await response.json()

        console.log('word response: ', data)
        this.selectedWord = data
      } catch (error) {
        console.error('Error fetching')
      }
    },
    async deleteWord(word: string) {
      const authStore = useAuthStore()
      const token = authStore.getToken

      try {
        await fetch(`http://localhost:8080/api/word-management/word/${word}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      } catch (error) {
        console.error('Error fetching')
      }
      await this.fetchWords()
    },
  },
})
