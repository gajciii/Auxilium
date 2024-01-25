// UporabnikRegister.js
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
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
            }, { withCredentials: true });

            if (response.status === 200) {
                alert(response.data);
                navigate('/login');
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
                <TextField
                    label="Uporabniško ime"
                    variant="outlined"
                    value={uporabniskoIme}
                    onChange={(e) => setUporabniskoIme(e.target.value)}
                /><br />
                <TextField
                    label="Geslo"
                    variant="outlined"
                    type="password"
                    value={geslo}
                    onChange={(e) => setGeslo(e.target.value)}
                /><br />
                <TextField
                    label="Ime"
                    variant="outlined"
                    value={ime}
                    onChange={(e) => setIme(e.target.value)}
                /><br />
                <TextField
                    label="Priimek"
                    variant="outlined"
                    value={priimek}
                    onChange={(e) => setPriimek(e.target.value)}
                /><br />
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <TextField
                    label="Naslov"
                    variant="outlined"
                    value={naslov}
                    onChange={(e) => setNaslov(e.target.value)}
                /><br />
                <Button variant="contained" onClick={handleRegistracija}>
                    Registriraj se
                </Button>
            </form>
        </div>
    );
};

export default UporabnikRegister;