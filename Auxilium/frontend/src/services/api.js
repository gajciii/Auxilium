import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const dodajNesreco = async (nesrecaData) => {
    try {
      const response = await api.post("/administratorji", nesrecaData);
      return response.data;
    } catch (error) {
      console.error("Error in dodajNesreco:", error);
      throw error;
    }
  };

const apiWithAuth = {
    api,
  dodajNesreco,
  // Dodaj ostale funkcije, če obstajajo
};

export default apiWithAuth;
