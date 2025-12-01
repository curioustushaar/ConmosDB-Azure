import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const studentAPI = {
  // Get all students
  getAll: () => api.get('/students'),

  // Get student by ID
  getById: (id) => api.get(`/students/${id}`),

  // Create new student
  create: (data) => api.post('/students', data),

  // Update student
  update: (id, data) => api.put(`/students/${id}`, data),

  // Delete student
  delete: (id) => api.delete(`/students/${id}`),
}

export default api
