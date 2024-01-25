// UporabnikRegister.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';

const UporabnikRegister = () => {
    const [uporabniskoIme, setUporabniskoIme] = useState('');
    const [geslo, setGeslo] = useState('');
    const [ime, setIme] = useState('');
    const [priimek, setPriimek] = useState('');
    const [email, setEmail] = useState('');
    const [naslov, setNaslov] = useState('');
    const navigate = useNavigate();

    const handleRegistracija = async () => {
        try {
            const response = await UserService.registerUser({
                uporabniskoIme,
                geslo,
                ime,
                priimek,
                email,
                naslov,
            });

            if (response.status === 200) {
                alert(response.data);
                navigate('/prijava');
            } else {
                alert(response.data);
            }
        } catch (error) {
            console.error('Napaka pri registraciji:', error);
        }
    };

    return (
        <div>
            <h2>Registracija</h2>
            <form>
                <div>
                    <label>Uporabniško ime:</label>
                    <input
                        type="text"
                        value={uporabniskoIme}
                        onChange={(e) => setUporabniskoIme(e.target.value)}
                    />
                </div>
                <div>
                    <label>Geslo:</label>
                    <input
                        type="password"
                        value={geslo}
                        onChange={(e) => setGeslo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Ime:</label>
                    <input
                        type="text"
                        value={ime}
                        onChange={(e) => setIme(e.target.value)}
                    />
                </div>
                <div>
                    <label>Priimek:</label>
                    <input
                        type="text"
                        value={priimek}
                        onChange={(e) => setPriimek(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Naslov:</label>
                    <input
                        type="text"
                        value={naslov}
                        onChange={(e) => setNaslov(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleRegistracija}>
                    Registriraj se
                </button>
            </form>
        </div>
    );
};

export default UporabnikRegister;
