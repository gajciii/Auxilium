import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import UporabnikTabele from "./UporabnikTabele"; // Posodobljen import

const Uporabnik = () => {
    const [uporabniki, setUporabniki] = useState([]);

    useEffect(() => {
        const pridobiUporabnike = () => {
            // Pridobivanje podatkov iz Spring Boot API
            api.get("/uporabniki/TopDonatorji").then((result) => {
                setUporabniki(result.data);
                console.log(result);
            });
        }

        pridobiUporabnike();
    }, []);

    return (
        <>
            <h1>Uporabniki</h1>
            <Link to="/hise/dodaj"><Button variant="contained">Dodaj hišo</Button></Link>
            <UporabnikTabele uporabniki={uporabniki} />
        </>
    );
}

export default Uporabnik;
