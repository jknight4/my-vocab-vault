import type { PartsOfSpeech } from './PartsOfSpeech'

export interface Meaning {
  id: string
  partsOfSpeech: PartsOfSpeech
  definition: string
  examples: Array<String>
}
