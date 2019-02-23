import axios from 'axios';

const http = axios.create({
  baseURL: '',
  headers: {
    Accept: 'application/json'
  },
  proxy: {
    port: 4444
  },
  maxContentLength: 1024 * 1024 * 20
});

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;
