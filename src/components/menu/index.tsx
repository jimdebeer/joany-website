import { createSignal, Index } from 'solid-js'
import './menu.css'
import { DataItem } from '../../data/data'

export default function Menu(p: {
  active: number
  data: DataItem[]
  setActive: (nr: number) => void
}) {
  const menuItems = ['a', 'h', ...p.data.map((d, i) => i)]
  return (
    <div class="menu">
      <Index each={menuItems}>
        {(name) => {
          const index =
            name() === 'a' ? -2 : name() === 'h' ? -1 : Number(name())

          return (
            <div
              onClick={() => {
                p.setActive(index)
              }}
              class={index === p.active ? 'menu-active' : undefined}
            >
              <div>
                {typeof name() === 'number' ? Number(name()) + 1 : name()}
              </div>
            </div>
          )
        }}
      </Index>
    </div>
  )
}
