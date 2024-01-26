import React, { useState } from "react";
import { Paper, Typography, Button, TextField } from "@mui/material";
import axios from 'axios';
import auxImage from '../../assets/aux12.png';



const NesreceList1 = ({ nesrece }) => {
  const [donationAmount, setDonationAmount] = useState(0);
  const isLoggedIn = sessionStorage.getItem('userId');
  const isAdminLoggedIn = localStorage.getItem('authToken');

  console.log('isLoggedIn:', isLoggedIn);
  console.log('isAdminLoggedIn:', isAdminLoggedIn);


  const handleDonation = async () => {
    try {

      if (donationAmount <= 0) {
        window.alert('Vnesite znesek donacije večji od 0.');
        return;
      }

      const response = await axios.post('http://localhost:8080/api/v1/donacije/dodajDonacijo', {
        znesekDonacije: donationAmount,
      });

      if (response.status === 200) {
        console.log(response.data);
        window.alert('Donacija uspešno dodana! ' + donationAmount + "€")
        window.location.reload();
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
      {nesrece.map((nesreca) => {
        const dateString = nesreca.datum;
        const dateObject = new Date(dateString);
        const formattedDate = dateObject.toLocaleDateString();

        return (
          <Paper key={nesreca.id} elevation={3} style={{ padding: "16px", marginBottom: "16px", backgroundColor: "black", color: "white" }}>
            <Typography variant="h6">Datum: {formattedDate}</Typography>
            <Typography variant="body1">Lokacija: {nesreca.lokacija}</Typography>
            <Typography variant="body1">Opis: {nesreca.opis}</Typography>
          </Paper>
        );
      })}
      <div style={{ marginTop: "16px", textAlign: "center", }}>

        <img src={auxImage} alt="Aux Image" style={{ width: "200px", borderRadius: "8px", }} />
      </div>

      {(isAdminLoggedIn || isLoggedIn) && (<div style={{ marginTop: "40px", padding: "10px 0", textAlign: "center", borderRadius: "8px", }}>
        <Typography variant="h5" style={{ color: "black", fontWeight: "bold", marginBottom: "8px" }}>DONIRAJ</Typography>

        <TextField
          label="Znesek donacije"
          variant="outlined"
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          style={{ marginTop: "16px", marginRight: "8px" }}
        />
        <br />

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "16px", backgroundColor: "navy", color: "white", fontWeight: "bold", padding: "10px 20px", borderRadius: "8px" }}
          onClick={handleDonation}
        >
          تَبَرَّعَ - doniraj
        </Button>
      </div>)
      }
    </div >
  );
};

export default NesreceList1;
