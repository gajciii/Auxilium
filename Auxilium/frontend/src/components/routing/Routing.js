// Routing.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Administrator from "../Administrator/Administrator";
import PageNotFound from "../PageNotFound/PageNotFound";
import Prijava from "../Uporabnik/UporabnikPrijava";
import UporabnikRegister from '../Uporabnik/UporabnikRegister';
import UserEditForm from '../Uporabnik/ProfilUporabnik'; 
import NavigationBar from "../Navbar/Navbar";
import NesreceList from "../Nesrece/PrikazNesrec";

export default function Routing() {
    return (
    <div>
        <NavigationBar />

        <Routes>
            <Route path="/nesrece" element={<NesreceList />} /> 
            <Route path="/administrator" element={<Administrator />} />
            <Route path="/login" element={<Prijava />} />
            <Route path="/registracija" element={<UporabnikRegister />} />
            <Route path="/profil-uporabnik" element={<UserEditForm />} /> 
           
            <Route path="*" element={<PageNotFound />} />
        </Routes>

    </div>
    );
}
