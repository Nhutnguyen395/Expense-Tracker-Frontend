import axios from 'axios';

// create new axios instance with custom configuration
const apiClient = axios.create({
  /*
    The base URL of the backend API
    Any request we make using apiClient will be auto sent to 'https://localhost:3000/api'.
    Saves us time from having to type the full URL out every time.
  */
  baseURL: 'http://localhost:3000/api',
  headers: {
    // tell the server we are sending JSON
    'Content-Type': 'application/json'
  }
});

export default apiClient;