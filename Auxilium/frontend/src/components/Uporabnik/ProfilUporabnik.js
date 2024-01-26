import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileService from '../../services/ProfileService';
import { TextField, Button } from '@mui/material';

const ProfilUporabnik = () => {
    const [user, setUser] = useState({

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
            window.location.reload();
        } catch (error) {
            console.error('Error updating profile:', error.message);
        }
    };

    const handleLogout = () => {

        sessionStorage.clear();
        navigate('/login');
        window.location.reload();
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
            <Button onClick={handleLogout} variant="contained" style={logoutButtonStyle}>
                تسجيل الخروج
            </Button>
        </div>
    );
}

const formContainerStyle = {
    textAlign: "center",
    maxWidth: "400px",
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
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
};

const logoutButtonStyle = {
    marginTop: "20px",
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#dc3545",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
};


export default ProfilUporabnik;
