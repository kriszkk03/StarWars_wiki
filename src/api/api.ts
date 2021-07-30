import axios from 'axios';
export const ApiInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: {
    'content-type': 'application/json',
  },
  timeout: 100000,
});
