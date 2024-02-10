import { styled } from 'inlines'
import React from 'react'
import { DataItem, DataBlock } from './data/index.js'

const Block = (p: { block: DataBlock }) => {
  if (p.block.expandable) {
    const [open, setOpen] = React.useState(false)

    const ref = React.useRef(~~(Math.random() * 10) * 10 + '%')

    return (
      <div>
        <styled.div
          onClick={() => {
            setOpen(!open)
          }}
          style={{
            display: 'flex',
            borderBottom: '2px solid black',
          }}
        >
          <styled.div
            style={{
              transition: 'border-radius 0.5s',
              cursor: 'pointer',
              display: 'flex',
              width: '30px',
              borderTopLeftRadius: '148px',
              borderTopRightRadius: '148px',
              height: '15px',
              background: 'black',
              color: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '30px',
              paddingTop: '4px',
              marginLeft: ref.current,
              position: 'relative',
              userSelect: 'none',
            }}
          >
            {open ? '-' : '+'}
          </styled.div>
        </styled.div>
        <styled.div
          onClick={() => {
            setOpen(!open)
          }}
          style={{
            userSelect: 'none',
            marginTop: '10px',
            maxWidth: '450px',
            marginBottom: '15px',
            fontWeight: '500',
          }}
        >
          {p.block.title}
        </styled.div>
        {open ? <Block block={{ html: p.block.html }} /> : null}
      </div>
    )
  }
  return (
    <styled.div
      className="text"
      style={{
        marginTop: '32px',
        maxWidth: 750,
      }}
      dangerouslySetInnerHTML={{ __html: p.block.html }}
    />
  )
}

export const Project = (p: { data: DataItem; index: number }) => {
  return (
    <styled.div>
      <styled.div
        style={{
          maxWidth: 1250,
          width: '100%',
        }}
      >
        <img
          style={{
            maxWidth: '100%',
            minWidth: '100%',
            backgroundColor: '#eee',
          }}
          src={p.data.hero}
        />
        <styled.div
          style={{
            marginTop: 64,
            display: 'flex',
            '@media (width <= 900px)': {
              flexDirection: 'column',
            },
          }}
        >
          <styled.div
            style={{
              paddingRight: '90px',
            }}
          >
            <styled.div
              style={{
                fontSize: '98px',
              }}
            >
              {p.index < 9 ? '0' : ''}
              {p.index + 1}
            </styled.div>
            <styled.div style={{ marginBottom: '8px' }}>
              {p.data.title}
            </styled.div>
            <styled.div>{p.data.date}</styled.div>
          </styled.div>
          <styled.div
            style={{
              marginTop: '-16px',
              width: '100%',
            }}
          >
            {p.data.blocks.map((b) => {
              return <Block block={b} />
            })}
          </styled.div>
        </styled.div>
      </styled.div>
    </styled.div>
  )
}
