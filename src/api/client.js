import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Добавьте интерцепторы при необходимости
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Обработка неавторизованных запросов
      console.error('Unauthorized request');
    }
    return Promise.reject(error);
  }
);

export default apiClient;

