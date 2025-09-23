import apiClient from "./api.js";

export const login = async (credentials) => {
  try{
    // make a POST request to the /auth/login endpoint
    const response = await apiClient.post('/auth/login', credentials);

    // if the API returns a token, we have a successful login
    if (response.data.token) {
      // Store the token in the browser's localStorage
      localStorage.setItem('authToken', response.data.token);
    }
    return response.data
  } catch (error) {
    // If there is an error (e.g wrong password), log it and re-throw it
    console.log("Login error:", error.response?.data || error.message);
    throw error
  }
};

