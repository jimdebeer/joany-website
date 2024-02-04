import { createSignal } from 'solid-js'
import Menu from '../menu'
import './layout.css'
import { DataItem } from '../../data/data'

const Page = (p: { data: DataItem }) => {
  return (
    <div
      style={{
        border: '1px solid red',
        width: '100%',
        'margin-top': '150px',
      }}
    >
      <img
        style={{
          'min-width': '100%',
          'background-color': '#eee',
        }}
        src={p.data.hero}
      />
      PAGE {p.data.index}
    </div>
  )
}

const HomePage = () => {
  return <div>HOME!</div>
}

const About = () => {
  return <div>About!</div>
}

export default function Layout(p: { data: DataItem[] }) {
  const [active, setActive] = createSignal(0)

  return (
    <div class="page">
      <Menu active={active()} data={p.data} setActive={setActive} />
      <div>
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
      <div />
    </div>
  )
}
