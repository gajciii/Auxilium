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
        
        console.log("Odgovor po prijavi:", response);

 
        if (response.data !== null && response.data !== "-1") {
            const adminId = response.data;
            
      
            localStorage.setItem("authToken", adminId);
            
            console.log("adminId shranjen v Local Storage:", localStorage.getItem("adminId"));
        }
    
        return response.data;
    } catch (error) {
        throw error;
    }
};


const AuthService = {
  login,
};

export default AuthService;
