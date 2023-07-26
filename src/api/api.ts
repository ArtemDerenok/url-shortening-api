import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.shrtco.de/v2/shorten?url=',
  timeout: 10000,
})

export default axiosInstance;
