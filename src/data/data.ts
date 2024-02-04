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
    hero: 'https://images.mome.hu/image/xl/uploads/bak_vivien_reka_0_20220616_141901_4afb44b94a.jpg',
    blocks: [],
  },
  {
    title: 'The aesthetics of pause',
    index: 2,
    hero: 'https://images.mome.hu/image/xl/uploads/bak_vivien_reka_0_20220616_165755_7dda57df8f.jpg',
    date: '1st april 2022',
    blocks: [
      {
        html: `<p>The aim of my thesis is to understand the pause as a visual aesthetic element. Beyond its practical manifestation, I analyse the works of contemporary artists who use white space as an expressive tool.</p>`,
      },
    ],
  },
  {
    title: 'Veronika Szalai’s doctoral thesis defence',
    index: 3,
    hero: 'https://images.mome.hu/image/hero/uploads/bak_vivien_reka_0_20220616_165957_5b397c1231.jpg',
    date: '1st april 2022',
    blocks: [
      {
        html: `<p>The aim of my thesis is to understand the pause as a visual aesthetic element. Beyond its practical manifestation, I analyse the works of contemporary artists who use white space as an expressive tool.</p>`,
      },
    ],
  },
  {
    title: 'Furnpboldi Percoloeroe',
    hero: 'https://www.moma.org/media/W1siZiIsIjIxMTIwMyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTUwMFx1MDAzZSJdXQ.jpg?sha=582a516a14957aa3',
    date: '2 jan 2024',
    blocks: [],
    index: 4,
  },

  {
    title: 'Lynda Benglis: Victor',
    index: 5,
    hero: 'https://images.mome.hu/image/xl-2x/uploads/11_szalai_veronika_vedese_557b67e7ad.jpg',
    date: '1st april 2022',
    blocks: [
      {
        html: `<p>The aim of my thesis is to understand the pause as a visual aesthetic element. Beyond its practical manifestation, I analyse the works of contemporary artists who use white space as an expressive tool.</p>`,
      },
      {
        expandable: true,
        title: 'Joany',
        html: '<b>bla bla</b>',
      },
      {
        expandable: true,
        title: 'Joany in the slurperloere with friends',
        html: '<b>bla bla</b>',
      },
      {
        expandable: true,
        title: 'Joany on the spot',
        html: '<b>bla bla</b>',
      },
      {
        expandable: true,
        title: 'Joany GURT',
        html: '<b>bla bla</b>',
      },
    ],
  },
  {
    title: 'Aestetoeroe Dankelitus',
    hero: 'https://walker-web.imgix.net/cms/ex2014ld_ins_027.jpg?auto=format,compress&w=1920&h=1200&fit=crop&dpr=1.5',
    date: '2 jan 2024',
    blocks: [],
    index: 4,
  },
]
