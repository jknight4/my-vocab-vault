import type { Meaning } from './Meaning'

export interface Word {
  word: string
  tags: Array<string>
  meanings: Array<Meaning>
  createdAt: string
  updatedAt: string
}
