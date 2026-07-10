import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
    baseURL : Config.API_BASE_URL,
    timeout:15000,
    headers:{
        "Content-Type" : "application/json"
    }
})


api.interceptors.request.use(
    async config => {
        return config;
    },
    error => Promise.reject(error)
)

api.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);

export default api;