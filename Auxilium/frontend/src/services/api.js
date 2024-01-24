import axios from "axios";

const api = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
   timeout: 30000,
   headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
   },
});


export const dodajNesreco = (nesrecaData) => {
  return api.post("/administratorji", nesrecaData);
};

export default api;
