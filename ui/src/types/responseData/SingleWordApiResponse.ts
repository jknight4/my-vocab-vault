import type { MeaningResponse } from './MeaningResponse'

export interface SingleWordApiResponse {
  word: string
  tags: Array<string>
  meanings: Array<MeaningResponse>
  createdAt: string
  updatedAt: string
}
