// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import axios from "axios";
const api = axios.create({

  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,

  }

})


//categories
export const fetchCategories = async () => {
  return (
    api.get('/api/categories')
  )
}

//blogs
export const fetchArticles = async (queryString) => {

  return (
    api.get(`/api/blogs?${queryString}`)
  )
}
