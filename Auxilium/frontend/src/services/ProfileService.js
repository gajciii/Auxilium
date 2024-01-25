import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/uporabniki';

const ProfileService = {
    getUserProfile: async (userId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/${userId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateUserProfile: async (userId, updatedUserData) => {
        try {
            const response = await axios.put(
                `${API_BASE_URL}/${userId}`,
                updatedUserData,
                {
                    headers: {
                        'Content-Type': 'application/json',

                    },
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    },


};

export default ProfileService;
