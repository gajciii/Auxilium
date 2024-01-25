import React, { useState } from "react";
import { Paper, Typography, Button, TextField } from "@mui/material";
import axios from 'axios';
import auxImage from '../../assets/aux12.png';  

const NesreceList1 = ({ nesrece }) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonation = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/donacije/dodajDonacijo', {
        znesekDonacije: donationAmount,
      });

      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.error(response.data); 
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

      <div style={{ marginTop: "16px", textAlign: "center", }}>
        
        <img src={auxImage} alt="Aux Image" style={{ width: "200px", borderRadius: "8px", }} />
      </div>

      <div style={{ marginTop: "40px", padding: "10px 0", textAlign: "center", backgroundColor: "lightblue", borderRadius: "8px", }}>
        <Typography variant="h5" style={{ color: "black", fontWeight: "bold", marginBottom: "8px" }}>DONIRAJ</Typography>

        <TextField
          label="Znesek donacije"
          variant="outlined"
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          style={{ marginTop: "16px", marginRight: "8px" }}
        />

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "16px", backgroundImage: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)", color: "white", fontWeight: "bold", padding: "10px 20px", borderRadius: "8px" }}
          onClick={handleDonation}
        >
          تَبَرَّعَ - doniraj
        </Button>
      </div>
    </div>
  );
};

export default NesreceList1;
