import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RAWG_API_URL,
  params: {
    key: process.env.NEXT_PUBLIC_RAWG_API_KEY,
  },
})
