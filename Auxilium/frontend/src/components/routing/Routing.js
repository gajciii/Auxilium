// routing/Routing.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Administrator from "../Administrator/Administrator";
import PageNotFound from "../PageNotFound/PageNotFound";

export default function Routing() {
  return (
    <Routes>
      <Route path="/administrator" element={<Administrator />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
