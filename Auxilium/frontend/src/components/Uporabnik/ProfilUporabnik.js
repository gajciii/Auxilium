import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { TextField, Button } from '@mui/material';
=======
import ProfileService from '../../services/ProfileService';
>>>>>>> ce1bce4f3fc399a46a9b39be002963a21e9bc6cf

const ProfilUporabnik = () => {
    const [user, setUser] = useState({
        // ... initial user data
    });

    const navigate = useNavigate();

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');

        if (userId) {
            fetchUserProfile(userId);
        }
    }, []);

    const fetchUserProfile = async (userId) => {
        try {
<<<<<<< HEAD
            const response = await axios.get(`http://localhost:8080/api/v1/uporabniki/${userId}`);
            setUser(response.data);
=======
            const userData = await ProfileService.getUserProfile(userId);
            setUser(userData);
>>>>>>> ce1bce4f3fc399a46a9b39be002963a21e9bc6cf
        } catch (error) {
            console.error('Error fetching user data:', error.message);
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8080/api/v1/uporabniki/${user.id}`, user);
            const updatedUser = response.data;
            setUser(updatedUser);

            console.log('User updated successfully:', updatedUser);
        } catch (error) {
            console.error('Error updating user:', error.message);
        }
    }

    const handleLogout = () => {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('user');
        navigate('/login');
    };

    const handleProfileUpdate = async () => {
        try {
            const userId = sessionStorage.getItem('userId');
            await ProfileService.updateUserProfile(userId, user);
            console.log('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error.message);
        }
    };
    return (
        <div style={formContainerStyle}>
            <h1 style={pageTitleStyle}>Uredi Profil</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Ime"
                    variant="outlined"
                    name="ime"
                    value={user.ime}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <TextField
                    label="Priimek"
                    variant="outlined"
                    name="priimek"
                    value={user.priimek}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <TextField
                    label="Uporabniško Ime"
                    variant="outlined"
                    name="uporabniskoIme"
                    value={user.uporabniskoIme}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <TextField
                    label="Geslo"
                    variant="outlined"
                    type="password"
                    name="geslo"
                    value={user.geslo}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <TextField
                    label="Naslov"
                    variant="outlined"
                    name="naslov"
                    value={user.naslov}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <Button type="submit" variant="contained" style={submitButtonStyle}>
                    Shrani
                </Button>
            </form>
        </div>
    );
}

const formContainerStyle = {
    textAlign: "center",
    maxWidth: "400px", // Adjust the maximum width as needed
    margin: "0 auto",
};

const pageTitleStyle = {
    fontSize: "36px",
    marginBottom: "20px",
};

const inputStyle = {
    marginBottom: "15px",
    width: "100%",
};

const submitButtonStyle = {
    padding: "10px 15px", // Adjust the padding as needed
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
};

export default ProfilUporabnik;
