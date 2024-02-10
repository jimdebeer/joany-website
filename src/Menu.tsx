import { styled } from 'inlines'
import React from 'react'
import { DataItem } from './data/index.js'
import { useRoute } from 'kabouter'

export const Menu = (p: { data: DataItem[] }) => {
  const route = useRoute('[project]')
  return (
    <styled.div
      style={{
        display: 'flex',
        gap: 8,
        padding: 64,
        flexWrap: 'wrap',
        flexDirection: 'column',
        '@media (width <= 900px)': {
          flexDirection: 'row',
          padding: '32px !important',
        },
      }}
    >
      {[
        { title: 'about', menuLabel: 'a', path: 'about' },
        { title: 'home', menuLabel: 'h', path: 'home' },
        ...p.data,
      ].map((d, i) => {
        const isActive =
          d.path === route.path.project ||
          (d.title === 'home' && !route.path.project)
        return (
          <styled.div
            key={i}
            style={{
              cursor: 'pointer',
              padding: '2px',
              borderRadius: '50%',
              height: '29px',
              width: '29px',
              color: isActive ? 'white' : 'black',
              backgroundColor: isActive ? 'black' : 'white',
              /* anti-alias for active state (vs border) */
              boxShadow: isActive
                ? '0 0 1px 0 gray inset, 0 0 1px 0 gray'
                : null,
            }}
            onClick={() => {
              route.setPath({ project: d.path })
            }}
          >
            <styled.div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                height: '100%',
                width: '100%',
                backgroundColor: isActive ? 'black' : 'white',
                /* anti-alias for active state (vs border) */
                boxShadow: isActive
                  ? '0 0 1px 0 gray inset, 0 0 1px 0 gray'
                  : null,
              }}
            >
              {d.menuLabel ?? i - 1}
            </styled.div>
          </styled.div>
        )
      })}
    </styled.div>
  )
}
