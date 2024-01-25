// services/AuthServicesUser.js
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/v1/uporabniki", // Adjust the base URL accordingly
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

class AuthServicesUser {
    static async login(username, password) {
        try {
            const url = "/login";
            console.log("Request URL:", api.defaults.baseURL + url);

            const response = await api.post(url, {
                uporabniskoIme: username,
                geslo: password,
            });

            if (response.status === 200) {
                const userData = response.data;

                // Successful login
                // Save user data to sessionStorage
                sessionStorage.setItem("userId", userData.id);
                sessionStorage.setItem("uporabniskoIme", userData.uporabniskoIme);
                sessionStorage.setItem("geslo", userData.geslo);
                sessionStorage.setItem("ime", userData.ime);
                sessionStorage.setItem("priimek", userData.priimek);
                sessionStorage.setItem("naslov", userData.naslov);
                sessionStorage.setItem("email", userData.email);

                return true;
            } else {
                console.error("Login failed:", response.data.message);
                return false;
            }
        } catch (error) {
            console.error("Error during login:", error.message);
            return false;
        }
    }
}

export default AuthServicesUser;
