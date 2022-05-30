import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://13.125.150.135:8000',
});