// generate.js
import path from 'path'
import renderStatic from 'solid-ssr/static'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const pathToServer = path.resolve(__dirname, '/entry-client.js')
const pathToPublic = path.resolve(__dirname, '../public')
renderStatic([
  {
    entry: pathToServer,
    output: path.join(pathToPublic, `index.html`),
    url: '/index.html',
  },
])
