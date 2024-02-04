import { For, createSignal } from 'solid-js'
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
            display: 'flex',
            'border-bottom': '2px solid black',
          }}
        >
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              // width: '75%',
              width: '30px',

              'border-top-left-radius': '148px',
              'border-top-right-radius': '148px',
              height: '15px',
              background: 'black',
              color: 'white',
              'justify-content': 'center',
              // padding: '15px',
              'align-items': 'center',
              'margin-top': '30px',
              'margin-left': ~~(Math.random() * 10) * 10 + '%',
              position: 'relative',
            }}
          >
            {/* <div
              style={{
                'font-size': '78px',
                position: 'absolute',
                // top: '-36px',
                // left: '-20px',
              }}
            >
              +
            </div> */}
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

const Page = (p: { data: DataItem }) => {
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

const HomePage = (p: { data: DataItem[] }) => {
  return (
    <div
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
              style={{
                display: 'flex',
                width: '450px',
                position: 'relative',
                'margin-bottom': '60px',
              }}
            >
              <div
                style={{
                  // border: '1px solid blue',
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
                  // 'margin-top': '3px',
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
  const [active, setActive] = createSignal(0)

  return (
    <div class="page">
      <div class="page-menu">
        <Menu active={active()} data={p.data} setActive={setActive} />
      </div>
      <div class="page-main">
        {active() === -2 ? (
          <About />
        ) : active() === -1 ? (
          <HomePage data={p.data} />
        ) : (
          <Page data={p.data[active()]} />
        )}
      </div>
      <div class="page-rest" />
    </div>
  )
}
