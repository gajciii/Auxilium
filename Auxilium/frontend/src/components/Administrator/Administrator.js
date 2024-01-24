import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import api from "../../services/api";

const Administrator = () => {
    const [uporabniskoIme, setUporabniskoIme] = useState("");
    const [geslo, setGeslo] = useState("");

    const dodajAdministratorja = () => {
        api.post("/administratorji/dodajAdministratorja", {
            uporabniskoIme: uporabniskoIme,
            geslo: geslo
        })
            .then((result) => console.log(result.data))
            .catch(error => console.error('AxiosError:', error));
    }

    return (
        <div>
            <p>Dodajanje administratorja</p>
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
            <Button variant="contained" onClick={dodajAdministratorja}>Dodaj administratorja</Button>
        </div>
    );
};

export default Administrator;
