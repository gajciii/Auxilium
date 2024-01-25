// Administrator/NesrecaForm.js
import React, { useState, useEffect } from "react";
import { Button, TextField, MenuItem } from "@mui/material";
import apiWithAuth from "../../services/api";


const NesrecaForm = ({ refreshNesrece }) => {
  const [datum, setDatum] = useState("");
  const [lokacija, setLokacija] = useState("");
  const [opis, setOpis] = useState("");
  const [selectedOskodovanec, setSelectedOskodovanec] = useState(""); 
  const [oskodovanci, setOskodovanci] = useState([]);

  useEffect(() => {

    const fetchOskodovanci = async () => {
      try {
        const response = await apiWithAuth.api.get("/oskodovanci/oskodovanci");
        setOskodovanci(response.data);
      } catch (error) {
        console.error("Error fetching oskodovanci:", error.message);
      }
    };

    fetchOskodovanci();
  }, []);

  const handleSubmit = async () => {
    try {

      const oskodovanecId = selectedOskodovanec ? selectedOskodovanec.id : null;

      const response = await apiWithAuth.api.post("/nesrece/dodajNesreco", {
        datum: datum,
        lokacija: lokacija,
        opis: opis,
        oskodovanecId: oskodovanecId,
      });

      console.log(response); 

      refreshNesrece();
    } catch (error) {
      console.error("Napaka pri dodajanju nesreče:", error.message);
    }
  };

  const handleOskodovanecChange = (event) => {
    const oskodovanecId = event.target.value;
    const selected = oskodovanci.find((oskodovanec) => oskodovanec.id === oskodovanecId);
    setSelectedOskodovanec(selected);
  };

  return (
    <div>
      <p>Vnašanje podatkov o nesreči</p>
      <TextField
        variant="outlined"
        value={datum}
        onChange={(event) => setDatum(event.target.value)}
        label="Datum"
      />
      <br />
      <TextField
        variant="outlined"
        value={lokacija}
        onChange={(event) => setLokacija(event.target.value)}
        label="Lokacija"
      />
      <br />
      <TextField
        variant="outlined"
        value={opis}
        onChange={(event) => setOpis(event.target.value)}
        label="Opis"
      />
      <br />
      <TextField
        select
        label="Izberi oškodovanca"
        value={selectedOskodovanec ? selectedOskodovanec.id : ""}
        onChange={handleOskodovanecChange}
        variant="outlined"
      >
        {oskodovanci.map((oskodovanec) => (
          <MenuItem key={oskodovanec.id} value={oskodovanec.id}>
            {oskodovanec.ime} {oskodovanec.priimek}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <Button variant="contained" onClick={handleSubmit}>
        Dodaj nesrečo
      </Button>
    </div>
  );
};

export default NesrecaForm;
