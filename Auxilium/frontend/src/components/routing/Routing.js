// Routing.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Administrator from "../Administrator/Administrator";
import PageNotFound from "../PageNotFound/PageNotFound";
import Prijava from "../Uporabnik/UporabnikPrijava";
import UporabnikRegister from '../Uporabnik/UporabnikRegister';

export default function Routing() {
    return (
        <Routes>
            <Route path="/administrator" element={<Administrator />} />
            <Route path="/dashboard" element={<Prijava />} />
            <Route path="/registracija" element={<UporabnikRegister />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}
