import axios from 'axios'

export const api = axios.create({ baseURL: 'https://your-books-app.herokuapp.com' })