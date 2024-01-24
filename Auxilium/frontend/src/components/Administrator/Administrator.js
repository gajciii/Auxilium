// Administrator/Administrator.js
import React, { useState, useEffect } from "react";
import Prijava from "./Prijava";
import NesrecaForm from "./NesrecaForm";
import VsiNesreci from "./VsiNesreci"; // New component for displaying all accidents
import apiWithAuth from "../../services/api";

const Administrator = () => {
  const [jePrijavljen, setJePrijavljen] = useState(localStorage.getItem("authToken") ? true : false);
  const [vseNesrece, setVseNesrece] = useState([]);

  useEffect(() => {
    if (jePrijavljen) {
      // Fetch all accidents when the administrator is logged in
      const fetchData = async () => {
        try {
          const nesrece = await apiWithAuth.api.get("/nesrece/nesrece");
          setVseNesrece(nesrece.data);
        } catch (error) {
          console.error("Error fetching accidents:", error.message);
        }
      };

      fetchData();
    }
  }, [jePrijavljen]);

  const obdelajPrijava = () => {
    setJePrijavljen(true);
  };

  const obdelajOdjava = () => {
    localStorage.removeItem("authToken");
    setJePrijavljen(false);
  };

  return (
    <div>
      {!jePrijavljen ? (
        <Prijava onPrijava={obdelajPrijava} />
      ) : (
        <div>
          <p>Uporabnik prijavljen</p>
          <NesrecaForm />
          <button onClick={obdelajOdjava}>Odjava</button>
          <VsiNesreci nesrece={vseNesrece} /> {/* Display all accidents */}
        </div>
      )}
    </div>
  );
};

export default Administrator;
