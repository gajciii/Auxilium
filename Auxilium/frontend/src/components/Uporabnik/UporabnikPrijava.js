import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you have react-router-dom installed
import AuthServicesUser from '../../services/AuthServiceUser.js';

const Prijava = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const loggedIn = await AuthServicesUser.login(username, password);

            if (loggedIn) {
                // Redirect to the dashboard or any other page upon successful login
                navigate('/profil-uporabnik');
            } else {
                // Handle failed login
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error.message);
            // Handle more specific error handling if needed
        }
    };

    return (
        <div style={formContainerStyle}>
            <h1 style={pageTitleStyle}>Prijava</h1>
            <form>
                <div style={formRowStyle}>
                    <label style={labelStyle}>
                        Uporabniško ime:
                    </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
                </div>
                <div style={formRowStyle}>
                    <label style={labelStyle}>
                        Geslo:
                    </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
                </div>
                <div style={formRowStyle}>
                    <button type="button" onClick={handleLogin} style={submitButtonStyle}>
                        Prijava
                    </button>
                </div>
            </form>
        </div>
    );
};

const formContainerStyle = {
    textAlign: "center",
};

const pageTitleStyle = {
    fontSize: "36px",
    marginBottom: "20px",
};

const formRowStyle = {
    marginBottom: "15px",
};

const labelStyle = {
    display: "block",
    fontSize: "16px",
    marginBottom: "5px",
};

const inputStyle = {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
};

const submitButtonStyle = {
    padding: "15px 20px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
};

export default Prijava;
