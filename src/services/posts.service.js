import axios from 'axios'

const postsApi = axios.create({
  baseURL: 'http://70.34.201.18:8080',
  params: {
    limit: 6
  }
})

export const getPostsService = async (params) => {
  const { data } = await postsApi.get(`/posts`, { params }) // params => {search: 'cat', page: 2}
  return data
}

// 'baseURL/endpoint?page=1&limit=10&search=adfdf'
