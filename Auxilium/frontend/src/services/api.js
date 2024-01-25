// api.js
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
    const response = await api.post("/nesrece/dodajNesreco", nesrecaData);
    return response.data;
  } catch (error) {
    console.error("Error in dodajNesreco:", error);
    throw error;
  }
};

const urediNesreco = async (id, updatedNesreca) => {
  try {
    const response = await api.put(`/nesrece/urediNesreco/${id}`, updatedNesreca);
    return response.data;
  } catch (error) {
    console.error("Error in urediNesreco:", error);
    throw error;
  }
};

const izbrisiNesreco = async (id) => {
  try {
    const response = await api.delete(`/nesrece/odstraniNesreco/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error in izbrisiNesreco:", error);
    throw error;
  }
};

const registrirajUporabnika = async (novUporabnik) => {
  try {
    const response = await api.post("/api/v1/uporabniki/registracija", novUporabnik);
    return response.data;
  } catch (error) {
    console.error("Error in registrirajUporabnika:", error);
    throw error;
  }
};


const apiWithAuth = {
  api,
  dodajNesreco,
  urediNesreco,
  izbrisiNesreco,
  registrirajUporabnika, // Dodaj novo funkcijo
  // Add other functions if needed
};

export default apiWithAuth;
