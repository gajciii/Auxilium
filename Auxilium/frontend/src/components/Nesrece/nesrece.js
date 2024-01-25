import React, { useState } from "react";
import { Paper, Typography, Button, TextField } from "@mui/material";
import axios from 'axios';

const NesreceList1 = ({ nesrece }) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonation = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/donacije/dodajDonacijo', {
        znesekDonacije: donationAmount,
      });

      if (response.status === 200) {
        console.log(response.data); // Display success message
        // Optionally, you can add logic to update the UI or show a confirmation message.
      } else {
        console.error(response.data); // Handle error response
      }
    } catch (error) {
      console.error('Napaka pri donaciji:', error);
    }
  };

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

      <div style={{ marginTop: "16px", position: "relative", textAlign: "center" }}>
        <div style={{ borderBottom: "4px solid", background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)", position: "absolute", width: "100%" }}></div>
        <Typography variant="h5" style={{ backgroundColor: "black", color: "white", padding: "0 8px", position: "absolute", top: "-10px", display: "inline-block", borderRadius: "8px" }}>Doniraj</Typography>
      </div>

      <div style={{marginTop: "40px", padding: "10px 0", textAlign: "center" }}>
        <TextField
          label="Znesek donacije"
          variant="outlined"
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          style={{ marginTop: "16px" }}
        />

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "25px", marginLeft: "30px", backgroundImage: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)", color: "white", fontWeight: "bold" }}
          onClick={handleDonation}
        >
          تَبَرَّعَ - doniraj
        </Button>
      </div>
    </div>
  );
};

export default NesreceList1;
