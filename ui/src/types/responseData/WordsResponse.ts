import type { Word } from '../Word'

export interface WordsResponse {
  numberOfWords: number
  words: Array<Word>
}
