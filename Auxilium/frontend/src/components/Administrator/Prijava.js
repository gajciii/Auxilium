// Administrator/Prijava.js
import React, { useState } from "react";
import AuthService from "../../services/AuthService";

const Prijava = ({ onPrijava }) => {
  const [uporabniskoIme, setUporabniskoIme] = useState("");
  const [geslo, setGeslo] = useState("");

  const obdelajPrijava = async () => {
    try {
      const response = await AuthService.login({
        uporabniskoIme: uporabniskoIme,
        geslo: geslo,
      });

      // Po uspešni prijavi sprožimo dogodek za spremembo stanja v staršu
      onPrijava();

    } catch (error) {
      console.error("Napaka pri prijavi:", error.message);
    }
  };

  return (
    <div>
      <p>Prijava</p>
      <input
        type="text"
        placeholder="Uporabniško ime"
        value={uporabniskoIme}
        onChange={(e) => setUporabniskoIme(e.target.value)}
      />
      <input
        type="password"
        placeholder="Geslo"
        value={geslo}
        onChange={(e) => setGeslo(e.target.value)}
      />
      <button onClick={obdelajPrijava}>Prijava</button>
    </div>
  );
};

export default Prijava;
