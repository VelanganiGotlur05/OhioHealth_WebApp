import axios from 'axios';

const API_KEY = 'SampleSecretApiKey123'; // Replace with your actual API key

const api = axios.create({
  baseURL: 'http://localhost:5000/api/Employees', 
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': API_KEY 
  },
});

export default api;