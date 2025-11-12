import api from './api';

export const authService = {
  login: async (email, password) => {
    const response = await api.post('/signin', { email, password });
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post('/signup', userData);
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/logout');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get('/me');
    return response.data;
  }
};