import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileService from '../../services/ProfileService';
import { TextField, Button } from '@mui/material';

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
            const userData = await ProfileService.getUserProfile(userId);
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user data:', error.message);
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleProfileUpdate();
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
