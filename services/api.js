import axios from 'axios';

// create new axios instance with custom configuration
const apiClient = axios.create({
  // The base URL of the backend API
  baseURL: 'https://localhost:3000/api',
  headers: {
    // tell the server we are sending JSON
    'Content-Type': 'application/json'
  }
});

export default apiClient;