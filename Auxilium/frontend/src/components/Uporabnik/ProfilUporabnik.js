import React, { useState } from 'react';

const ProfilUporabnik = () => {
    // Assume user is the predefined object containing user details
    const [user, setUser] = useState({
        ime: '', // name
        priimek: '', // surname
        uporabniskoIme: '', // username
        geslo: '', // password
        naslov: '', // address
        email: '' // email
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to send the updated user details to the server
        console.log('Updated user:', user);
    }

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
                    <label>UporabniÅ¡ko Ime:</label>
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