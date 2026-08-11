export interface Commit {
  hash: string;
  message: string;
  author: string;
  date: string;
}

export type Tone = 'professional' | 'funny' | 'concise';