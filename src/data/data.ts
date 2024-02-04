import { week1 } from './week1'

export type DataItem = {
  title: string
  index: number
  date: number
  hero: string // url
  blocks: {
    html: string
    expandable?: boolean
    title?: string
  }[]
}

export const data: DataItem[] = [
  week1,
  {
    title: 'Principles & Practices',
    date: Date.now(),
    index: 1,
    hero: 'https://i.imgur.com/L2jS3Uk.jpeg',
    blocks: [],
  },
  {
    title: 'Bla',
    index: 2,
    hero: 'https://i.imgur.com/L2jS3Uk.jpeg',
    date: Date.now(),
    blocks: [],
  },
]
