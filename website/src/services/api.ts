import axios from 'axios'

export const api = axios.create({ baseURL: 'https://yourbooks-production.up.railway.app/' })