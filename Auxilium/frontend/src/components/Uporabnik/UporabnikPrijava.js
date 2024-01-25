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
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Prijava;
