// services/AuthService.js
import axios from "axios";

const api = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
   timeout: 30000,
   headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
   },
});

const login = async (credentials) => {
  try {
    const response = await api.post("/administratorji/prijava", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const AuthService = {
  login,
};

export default AuthService;
