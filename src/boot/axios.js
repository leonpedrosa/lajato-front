import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

const url = import.meta.env.VITE_API || 'http://127.0.0.1:8001/api/'
const api = axios.create({ baseURL: url })

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
