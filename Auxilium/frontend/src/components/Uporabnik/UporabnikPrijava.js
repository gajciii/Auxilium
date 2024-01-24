// Prijava.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you have react-router-dom installed
import AuthServicesUser from '../../services/AuthServiceUser.js';

const Prijava = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleLogin = async () => {
        // You can use AuthServicesUser here to handle the login logic
        const loggedIn = await AuthServicesUser.login(username, password);

        // For simplicity, let's assume login is successful
        // const loggedIn = true;

        if (loggedIn) {
            // Redirect to the dashboard or any other page upon successful login
            history('/');
        } else {
            // Handle failed login
            alert('Login failed. Please check your credentials.');
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
