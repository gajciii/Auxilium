import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilUporabnik = () => {
    const [user, setUser] = useState({
        ime: '',
        priimek: '',
        uporabniskoIme: '',
        geslo: '',
        naslov: '',
        email: ''
    });

    const navigate = useNavigate(); // useNavigate hook for navigation

    useEffect(() => {
        // Retrieve user ID from sessionStorage
        const userId = sessionStorage.getItem('userId');

        // Fetch user data using the user ID
        if (userId) {
            fetchUserData(userId);
        }
    }, []);

    const fetchUserData = async (userId) => {
        try {
            // Fetch user data from the server using the user ID
            const response = await axios.get(`http://localhost:8080/api/v1/uporabniki/${userId}`);


            // Set the user state with the retrieved user data
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error.message);
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send updated user details to the server using a PUT request
            const response = await axios.put(`http://localhost:8080/api/v1/uporabniki/${user.id}`, user);


            // Assuming the server returns the updated user object
            const updatedUser = response.data;

            // Optionally, you can update the state with the response from the server
            setUser(updatedUser);

            console.log('User updated successfully:', updatedUser);
        } catch (error) {
            console.error('Error updating user:', error.message);
        }
    }

    const handleLogout = () => {
        // Clear user data from sessionStorage
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('user');

        // Redirect to the login page or another desired route using navigate
        navigate('/login');
    };

    return (
        <div>
            <h1>Uredi Profil</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ime:</label>
                    <input
                        type="text"
                        name="ime"
                        value={user.ime}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Priimek:</label>
                    <input
                        type="text"
                        name="priimek"
                        value={user.priimek}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Uporabniško Ime:</label>
                    <input
                        type="text"
                        name="uporabniskoIme"
                        value={user.uporabniskoIme}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Geslo:</label>
                    <input
                        type="password"
                        name="geslo"
                        value={user.geslo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Naslov:</label>
                    <input
                        type="text"
                        name="naslov"
                        value={user.naslov}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Shrani Spremembe</button>
            </form>
        </div>
    );
}

export default ProfilUporabnik;
