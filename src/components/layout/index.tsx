import { createSignal } from 'solid-js'
import Menu from '../menu'
import './layout.css'
import { DataItem, DataBlock } from '../../data/data'
import { week1 } from '~/data/week1'

const Block = (p: { block: DataBlock }) => {
  // add expandable

  if (p.block.expandable) {
    const [open, setOpen] = createSignal(false)

    return (
      <div>
        <div
          onClick={() => {
            setOpen(!open())
          }}
          style={{
            cursor: 'pointer',
            display: 'flex',
            width: '75%',
            'margin-top': '32px',
          }}
        >
          <div
            style={{
              'font-weight': '500',
              'padding-right': '12px',
              'white-space': 'nowrap',
            }}
          >
            {p.block.title}
          </div>
          <div
            style={{
              transform: 'translate(0px,-4px)',

              display: 'flex',
              'align-items': 'end',
              width: '100%',
            }}
          >
            <div
              style={{
                'border-bottom': '2px solid black',
                width: '100%',
              }}
            />
            <svg
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              style={{
                transform: open()
                  ? 'rotate(180deg) translate(2px,0px)'
                  : 'translate(-1px,7px)',
              }}
            >
              <path
                d="M1 1L5.7027 7L11.7027 1"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
        {open() ? (
          <div style={{ 'margin-top': '-16px' }}>
            <Block block={{ html: p.block.html }} />
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div
      style={{
        'margin-top': '32px',
      }}
      innerHTML={p.block.html}
    />
  )
}

const Page = (p: { data: DataItem }) => {
  return (
    <div
      style={{
        width: '100%',
        'margin-top': '24px',
      }}
    >
      <img
        style={{
          'min-width': '100%',
          'background-color': '#eee',
        }}
        src={p.data.hero}
      />
      <div class="page-inner">
        <div
          style={{
            'padding-right': '90px',
          }}
        >
          <div
            style={{
              'font-size': '98px',
            }}
          >
            {p.data.index < 9 ? '0' : ''}
            {p.data.index + 1}
          </div>
          <div style={{ 'margin-bottom': '8px' }}>{p.data.title}</div>
          <div>{p.data.date}</div>
        </div>
        <div
          style={{
            'margin-top': '-16px',
            width: '100%',
          }}
        >
          {p.data.blocks.map((b) => {
            return <Block block={b} />
          })}
        </div>
      </div>
    </div>
  )
}

const HomePage = () => {
  return <div>HOME!</div>
}

const About = () => {
  return <div class="page-about" innerHTML={week1.blocks[0].html}></div>
}

export default function Layout(p: { data: DataItem[] }) {
  const [active, setActive] = createSignal(0)

  return (
    <div class="page">
      <div class="page-menu">
        <Menu active={active()} data={p.data} setActive={setActive} />
      </div>
      <div class="page-main">
        <div class="page-nested">
          {active() === -2 ? (
            <About />
          ) : active() === -1 ? (
            <HomePage />
          ) : (
            <Page data={p.data[active()]} />
          )}
        </div>
      </div>
      <div class="page-rest" />
    </div>
  )
}
