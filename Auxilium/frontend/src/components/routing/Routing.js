// routing/Routing.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Administrator from "../Administrator/Administrator";
import NesrecaForm from "../Administrator/NesrecaForm"; // Dodaj komponento za dodajanje nesreče
import PageNotFound from "../PageNotFound/PageNotFound";

export default function Routing() {
  return (
    <Routes>
      <Route path="/administrator" element={<Administrator />} />
      <Route path="/administrator/dodajnesreco" element={<NesrecaForm />} /> {/* Dodaj pot za dodajanje nesreče */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
