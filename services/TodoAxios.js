import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
//   getEvents(perPage, page) {
//     return apiClient.get('/todo_list?_limit=' + perPage + '&_page=' + page)
//   },

  getTodoList() {
    return apiClient.get('/todo_list')
  },

  getTodo(id) {
    return apiClient.get('/todo_list/' + id)
  }

}