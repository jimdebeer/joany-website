import { For, createSignal, createEffect } from 'solid-js'
import Menu from '../menu'
import './layout.css'
import { DataItem, DataBlock } from '../../data/data'
import { week1 } from '~/data/week1'

const Block = (p: { block: DataBlock }) => {
  if (p.block.expandable) {
    const [open, setOpen] = createSignal(false)
    return (
      <div>
        <div
          onClick={() => {
            setOpen(!open())
          }}
          class="expander"
          style={{
            display: 'flex',
            'border-bottom': '2px solid black',
          }}
        >
          <div
            class=""
            style={{
              transition: 'border-radius 0.5s',
              cursor: 'pointer',
              display: 'flex',
              width: '30px',
              'border-top-left-radius': '148px',
              'border-top-right-radius': '148px',
              height: '15px',
              background: 'black',
              color: 'white',
              'justify-content': 'center',
              'align-items': 'center',
              'margin-top': '30px',
              'padding-top': '4px',
              'margin-left': ~~(Math.random() * 10) * 10 + '%',
              position: 'relative',
            }}
          >
            {open() ? '-' : '+'}
          </div>
        </div>
        <div
          onClick={() => {
            setOpen(!open())
          }}
          style={{
            'user-select': 'none',
            'margin-top': '10px',
            'max-width': '450px',
            'margin-bottom': '15px',
            'font-weight': '500',
          }}
        >
          {p.block.title}
        </div>
        {open() ? <Block block={{ html: p.block.html }} /> : null}
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

const Page = (p: { data: DataItem; index: number }) => {
  return (
    <div
      class="page-nested"
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
            {p.index < 9 ? '0' : ''}
            {p.index + 1}
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

const HomePage = (p: { data: DataItem[]; setActive: (nr: number) => void }) => {
  return (
    <div
      class="home"
      style={{
        display: 'flex',
        gap: '30px',
        'flex-wrap': 'wrap',
      }}
    >
      <For each={p.data}>
        {(item, index) => {
          return (
            <div
              onClick={() => {
                p.setActive(index())
              }}
              class="home-item"
              style={{
                padding: '10px',
                cursor: 'pointer',
                display: 'flex',
                width: '450px',
                position: 'relative',
                'margin-bottom': '60px',
              }}
            >
              <div
                style={{
                  width: '200px',
                  height: '60px',
                  border: '1xp solid blue',
                  position: 'absolute',
                  'transform-origin': 'left',
                  transform: 'rotate(90deg) translate(20px,-50px)',
                  'font-size': '18px',
                }}
              >
                {item.title}
                <div
                  style={{
                    'font-size': '11px',
                    'margin-top': '5px',
                    opacity: 0.4,
                    'font-weight': 600,
                  }}
                >
                  {item.date}
                </div>
              </div>
              <div
                style={{
                  width: '160px',
                  'margin-right': '14px',
                  'font-size': '32px',
                }}
              >
                {index() < 9 ? '0' : null}
                {index() + 1}
              </div>
              <div
                style={{
                  width: '100%',
                  'box-sizing': 'border-box',
                  height: '300px',
                  'background-image': `url(${item.hero})`,
                  'background-repeat': 'no-repeat',
                  'background-size': 'cover',
                  'background-position': 'center',
                }}
              ></div>
            </div>
          )
        }}
      </For>
    </div>
  )
}

const About = () => {
  return (
    <div class="page-about page-nested" innerHTML={week1.blocks[0].html}></div>
  )
}

export default function Layout(p: { data: DataItem[] }) {
  const [active, setActive] = createSignal(-1)

  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      // @ts-ignore
      setActive(Number(window.location.hash.split('#')[1] * 1))
    })

    const h = window.location.hash.split('#')[1]

    // @ts-ignore
    setActive(h !== undefined ? h * 1 : -1)

    createEffect(() => {
      window.location.hash = active() + ''
    })
  }

  return (
    <div class="page">
      <div class="page-menu">
        <Menu active={active()} data={p.data} setActive={setActive} />
      </div>
      <div class="page-main">
        {active() === -2 ? (
          <About />
        ) : active() === -1 ? (
          <HomePage data={p.data} setActive={setActive} />
        ) : (
          <Page data={p.data[active()]} index={active()} />
        )}
      </div>
      <div class="page-rest" />
    </div>
  )
}
