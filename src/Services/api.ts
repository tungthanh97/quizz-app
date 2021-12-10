import axios from 'axios';
import { BASE_URL } from './url';

const API_KEY = 'mXRhJ5bDj0UGhtJQ6pz5u7Etn8ipeocPgc0f4Mja';
export const API = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

API.interceptors.request.use((config) => {
  config.params = {
    // add your default ones
    apiKey: API_KEY,
    category: 'code',
    difficulty: 'Medium',
    limit: 10,
    // tags: 'JavaScript',
    // spread the request's params
    ...config.params,
  };
  return config;
});
