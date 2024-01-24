// Uporabnik.js
import React, { useState } from "react";
import { handleLogin, handleLogout, isLoggedIn } from "../Services/AuthUporabnik";

const Uporabnik = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLoginClick = async () => {
        try {
            const success = await AuthService.login({ uporabniskoIme: username, geslo: password });

            if (success) {
                console.log("Uspešna prijava!");
                history.push("/");
            } else {
                console.log("Neuspešna prijava!");
            }
        } catch (error) {
            console.error("Napaka pri prijavi:", error.message);
        }
    };

    const handleLogoutClick = () => {
        AuthService.logout();
        console.log("Odjava uspešna!");
    };

    return (
        <div>
            {AuthService.isLoggedIn() ? (
                <div>
                    <h1>Prijavljeni ste</h1>
                    <button onClick={handleLogoutClick}>Odjava</button>
                </div>
            ) : (
                <div>
                    <h1>Prijava</h1>
                    <label>Uporabniško ime:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Geslo:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLoginClick}>Prijava</button>
                </div>
            )}
        </div>
    );
};

export default Uporabnik;