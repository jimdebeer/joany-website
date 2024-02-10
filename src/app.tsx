import './global.css'
import React from 'react'
import { styled } from 'inlines'
import { Menu } from './Menu.js'
import { DataItem, data } from './data/index.js'
import { useRoute } from 'kabouter'
import { Home } from './Home.js'
import { SimplePage } from './SimplePage.js'
import { about } from './data/about.js'
import { Project } from './Project.js'

const Routes = (p: { data: DataItem[] }) => {
  const route = useRoute('[project]')

  const project = route.path.project

  if (project === 'about') {
    return <SimplePage html={about} />
  }

  for (let i = 0; i < data.length; i++) {
    const projectData = data[i]
    if (projectData.path === project) {
      return <Project data={projectData} index={i} />
    }
  }

  return <Home data={p.data} />
}

export const App = () => {
  return (
    <styled.div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'row',
        '@media (width <= 900px)': {
          flexDirection: 'column',
          overflow: 'auto',
        },
      }}
    >
      <Menu data={data} />
      <styled.div
        style={{
          width: '100%',
          maxHeight: '100vh',
          padding: 64,
          overflow: 'auto',
          paddingBottom: 128,
          '@media (width <= 900px)': {
            overflow: 'visible',
            padding: '32px',
            maxHeight: 'none',
          },
        }}
      >
        <Routes data={data} />
      </styled.div>
    </styled.div>
  )
}
