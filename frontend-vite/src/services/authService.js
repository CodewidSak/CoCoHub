import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1'

console.log('🔧 API Base URL:', API_BASE_URL)

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Simple response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // If unauthorized, redirect to login
    if (error.response?.status === 401) {
      localStorage.removeItem('user')
      localStorage.removeItem('isAuthenticated')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

const authService = {
  // Login
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password })
      const { user } = response.data

      // Store user info only (no JWT tokens for now)
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('isAuthenticated', 'true')

      return { success: true, data: response.data }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed',
      }
    }
  },

  // Register
  register: async (userData) => {
    try {
      console.log('📤 Registering user:', userData)
      console.log('📍 Full URL:', `${API_BASE_URL}/auth/register`)
      
      const response = await api.post('/auth/register', userData)
      
      console.log('✅ Registration successful:', response.data)
      return { success: true, data: response.data }
    } catch (error) {
      console.error('❌ Registration error:', error)
      console.error('Response data:', error.response?.data)
      console.error('Response status:', error.response?.status)
      
      return {
        success: false,
        error: error.response?.data?.message || 'Registration failed',
      }
    }
  },

  // Logout
  logout: async () => {
    try {
      // No backend call needed for now
      console.log('Logging out...')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear local storage
      localStorage.removeItem('user')
      localStorage.removeItem('isAuthenticated')
    }
  },

  // Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return localStorage.getItem('isAuthenticated') === 'true'
  },
}

export default authService
export { api }
