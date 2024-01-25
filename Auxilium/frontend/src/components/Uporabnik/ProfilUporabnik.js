import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileService from '../../services/ProfileService';

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
