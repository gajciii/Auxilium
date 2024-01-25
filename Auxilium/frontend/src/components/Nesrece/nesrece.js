import React from "react";
import { TextField } from "@mui/material";

const NesreceList1 = ({ nesrece }) => {
  console.log("Nesrece from props:", nesrece);
  if (!nesrece || nesrece.length === 0) {
    return <p>No nesrece available.</p>;
  }

  return (
    <div>
      <h2>Vse nesreče</h2>
      <ul>
        {nesrece.map((nesreca) => (
          <li key={nesreca.id}>
            <p>Datum: {nesreca.datum}</p>
            <p>Lokacija: {nesreca.lokacija}</p>
            <p>Opis: {nesreca.opis}</p>
            <div>
              <TextField
                name="datum"
                label="Datum"
                value={nesreca.datum}
                disabled
              />
              <TextField
                name="lokacija"
                label="Lokacija"
                value={nesreca.lokacija}
                disabled
              />
              <TextField
                name="opis"
                label="Opis"
                value={nesreca.opis}
                disabled
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NesreceList1;
