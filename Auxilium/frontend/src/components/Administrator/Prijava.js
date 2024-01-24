// Administrator/Prijava.js
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import AuthService from "../../services/AuthService";

const Prijava = ({ onPrijava }) => {
  const [uporabniskoIme, setUporabniskoIme] = useState("");
  const [geslo, setGeslo] = useState("");

  const handlePrijava = async () => {
    try {
      const response = await AuthService.login({
        uporabniskoIme: uporabniskoIme,
        geslo: geslo,
      });

      console.log(response); // Obdelaj uspešno prijavo (npr. shranjevanje žetona, preusmeritev itd.)
      onPrijava(); // Obvesti nadrejeno komponento o uspešni prijavi
    } catch (error) {
      console.error("Napaka pri prijavi:", error.message); // Obdelaj napako pri prijavi
    }
  };

  return (
    <div>
      <p>Prijava</p>
      <TextField
        variant="outlined"
        value={uporabniskoIme}
        onChange={(event) => setUporabniskoIme(event.target.value)}
        label="Uporabniško ime"
      /><br />
      <TextField
        variant="outlined"
        value={geslo}
        onChange={(event) => setGeslo(event.target.value)}
        label="Geslo"
        type="password"
      /><br />
      <Button variant="contained" onClick={handlePrijava}>Prijava</Button>
    </div>
  );
};

export default Prijava;
