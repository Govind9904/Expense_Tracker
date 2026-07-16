import axios from 'axios';

import { Storage } from '../storage/storage';

const api = axios.create({
  baseURL: 'http://192.168.1.24:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// Attach JWT automatically
api.interceptors.request.use(
  async config => {
    const token = await Storage.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);


// Global response error handling
api.interceptors.response.use(
  response => response,

  error => {
    if (error.response) {
      console.log(
        'API Error:',
        error.response.data,
      );
    } else if (error.request) {
      console.log(
        'Network Error:',
        error.request,
      );
    } else {
      console.log(
        'Request Error:',
        error.message,
      );
    }

    return Promise.reject(error);
  },
);


export default api;