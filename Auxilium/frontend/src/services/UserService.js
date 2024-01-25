// UserService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const UserService = {
    registerUser: async (userData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/registracija`, userData);
            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default UserService;
