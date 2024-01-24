// Administrator/NesrecaForm.js
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import apiWithAuth from "../../services/api";

const NesrecaForm = () => {
  const [datum, setDatum] = useState("");
  const [lokacija, setLokacija] = useState("");
  const [opis, setOpis] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await apiWithAuth.dodajNesreco({
        datum: datum,
        lokacija: lokacija,
        opis: opis,
      });

      console.log(response); // Obdelaj uspešno dodajanje nesreče
    } catch (error) {
      console.error("Napaka pri dodajanju nesreče:", error.message); // Obdelaj napako pri dodajanju nesreče
    }
  };

  return (
    <div>
      <p>Vnašanje podatkov o nesreči</p>
      <TextField
        variant="outlined"
        value={datum}
        onChange={(event) => setDatum(event.target.value)}
        label="Datum"
      /><br />
      <TextField
        variant="outlined"
        value={lokacija}
        onChange={(event) => setLokacija(event.target.value)}
        label="Lokacija"
      /><br />
      <TextField
        variant="outlined"
        value={opis}
        onChange={(event) => setOpis(event.target.value)}
        label="Opis"
      /><br />
      <Button variant="contained" onClick={handleSubmit}>Dodaj nesrečo</Button>
    </div>
  );
};

export default NesrecaForm;
