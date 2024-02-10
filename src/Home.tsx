import { styled } from 'inlines'
import React from 'react'
import { DataItem } from './data/index.js'
import { useRoute } from 'kabouter'

export const Home = (p: { data: DataItem[] }) => {
  const route = useRoute('[project]')
  return (
    <styled.div
      style={{
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap',
      }}
    >
      {p.data.map((item, index) => {
        return (
          <styled.div
            onClick={() => {
              route.setPath({ project: item.path })
            }}
            style={{
              padding: '10px',
              cursor: 'pointer',
              display: 'flex',
              width: '450px',
              position: 'relative',
              marginBottom: '60px',
              transition: 'transform 0.1s',
              '&:active': {
                transform: 'scale(0.9)',
              },
              '@media (width <= 900px)': {
                padding: '0px !important',
              },
              '@media (hover: hover)': {
                '&:hover': {
                  color: 'white',
                  background: 'black',
                },
              },
            }}
          >
            <styled.div
              style={{
                width: '200px',
                height: '60px',
                border: '1xp solid blue',
                position: 'absolute',
                transformOrigin: 'left',
                transform: 'rotate(90deg) translate(20px,-50px)',
                fontSize: '18px',
              }}
            >
              {item.title}
              <styled.div
                style={{
                  fontSize: '11px',
                  marginTop: '5px',
                  opacity: 0.4,
                  fontWeight: 600,
                }}
              >
                {item.date}
              </styled.div>
            </styled.div>
            <styled.div
              style={{
                width: '160px',
                marginRight: '14px',
                fontSize: '32px',
              }}
            >
              {index < 9 ? '0' : null}
              {index + 1}
            </styled.div>
            <styled.div
              style={{
                width: '100%',
                boxSizing: 'border-box',
                height: '300px',
                backgroundImage: `url(${item.hero})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </styled.div>
        )
      })}
    </styled.div>
  )
}
