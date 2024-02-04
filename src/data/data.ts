import { week1 } from './week1'

export type DataBlock = {
  html: string
  expandable?: boolean
  title?: string
}

export type DataItem = {
  title: string
  index: number
  date: string
  hero: string // url
  blocks: DataBlock[]
}

export const data: DataItem[] = [
  week1,
  {
    title: 'Principles & Practices',
    date: '1st april 2022',
    index: 1,
    hero: 'https://i.imgur.com/L2jS3Uk.jpeg',
    blocks: [],
  },
  {
    title: 'Bla',
    index: 2,
    hero: 'https://i.imgur.com/L2jS3Uk.jpeg',
    date: '1st april 2022',
    blocks: [],
  },
]
