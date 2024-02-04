// @refresh reload
import './app.css'
import Layout from './components/layout/index.js'
import { data } from './data/data.js'

export default function App() {
  return <Layout data={data} />
}
