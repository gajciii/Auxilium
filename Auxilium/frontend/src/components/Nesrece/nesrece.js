import React from "react";
import { Paper, Typography, Button } from "@mui/material";

const NesreceList1 = ({ nesrece }) => {
  console.log("Nesrece from props:", nesrece);
  if (!nesrece || nesrece.length === 0) {
    return <p>No nesrece available.</p>;
  }

  return (
    <div>
      <h2>VSE NESREČE</h2>
      {nesrece.map((nesreca) => (
        <Paper key={nesreca.id} elevation={3} style={{ padding: "16px", marginBottom: "16px", backgroundColor: "black", color: "white" }}>
          <Typography variant="h6">Datum: {nesreca.datum}</Typography>
          <Typography variant="body1">Lokacija: {nesreca.lokacija}</Typography>
          <Typography variant="body1">Opis: {nesreca.opis}</Typography>

        </Paper>
      ))}
        
    <Button variant="contained" color="primary" style={{ marginTop: "16px" }}>
    تَبَرَّعَ - doniraj
    </Button>

    </div>


  );
};

export default NesreceList1;
