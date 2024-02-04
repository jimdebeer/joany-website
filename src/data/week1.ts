import { DataItem } from './data/data'

export const week1: DataItem = {
  title: 'Principles & Practices',
  date: Date.now(),
  index: 0,
  hero: 'https://i.imgur.com/L2jS3Uk.jpeg',
  blocks: [
    {
      html: `<p>bla bla</p> <img src="https://i.imgur.com/L2jS3Uk.jpeg"/>
`,
    },
    {
      expandable: true,
      title: 'Joany',
      html: 'bla bla',
    },
  ],
}
