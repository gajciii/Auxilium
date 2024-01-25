// Administrator/Administrator.js
import React, { useState, useEffect } from "react";
import Prijava from "./Prijava";
import NesrecaForm from "./NesrecaForm";
import VsiNesreci from "./VsiNesreci"; // New component for displaying all accidents
import apiWithAuth from "../../services/api";
import { Button } from "@mui/material";

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
          
          <NesrecaForm />

          <VsiNesreci nesrece={vseNesrece} /> 
          <Button
            variant="contained"
            style={{ backgroundColor: "red", color: "white", fontSize: "16px", borderRadius: "4px", padding: "10px 20px", marginTop: "20px" }}
            onClick={obdelajOdjava}
          >
            Odjava
          </Button>
        </div>
      )}
    </div>
  );
};

export default Administrator;
