import axios from 'axios';

const api = axios.create({
  baseURL: '', //your base url
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.response && error?.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.pathname = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
