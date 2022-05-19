import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://13.125.150.135:8000',
});