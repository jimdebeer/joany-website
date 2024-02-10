import { render } from 'react-dom'
import { App } from './App.js'
import React from 'react'

window.global = window

new EventSource('/esbuild').addEventListener('change', () => location.reload())

render(<App />, document.getElementById('root'))
