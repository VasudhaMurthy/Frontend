import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Example API Calls
export const loginUser = async (userData) => {
  return await api.post("/auth/login", userData);
};

export const bookRide = async (rideData) => {
  return await api.post("/rides/book", rideData);
};

export const fetchRewards = async (userId) => {
  return await api.get(`/rewards/${userId}`);
};

export const findPool = async (data) => {
  try {
    const response = await api.post("/pooling/find", data);
    return response;
  } catch (error) {
    console.error("Error finding pool:", error);
    throw error;
  }
};

export const signupUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, credentials);
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

export default api;