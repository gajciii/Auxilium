import React, { useState } from "react";
import AuthService from "../../services/AuthService";

const Prijava = ({ onPrijava }) => {
  const [uporabniskoIme, setUporabniskoIme] = useState("");
  const [geslo, setGeslo] = useState("");

  const obdelajPrijava = async () => {
    try {
      const response = await AuthService.login({
        uporabniskoIme: uporabniskoIme,
        geslo: geslo,
      });

      onPrijava();

    } catch (error) {
      console.error("Napaka pri prijavi:", error.message);
    }
  };

  return (
    <div>
      <h1 style={pageTitleStyle}>Prijava</h1>
      <div style={formContainerStyle}>
        <div style={formRowStyle}>
          <label style={labelStyle}>Uporabniško ime:</label>
          <input
            type="text"
            value={uporabniskoIme}
            onChange={(e) => setUporabniskoIme(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formRowStyle}>
          <label style={labelStyle}>Geslo:</label>
          <input
            type="password"
            value={geslo}
            onChange={(e) => setGeslo(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button onClick={obdelajPrijava} style={submitButtonStyle}>Prijava</button>
      </div>
    </div>
  );
};

const pageTitleStyle = {
  textAlign: "center",
  fontSize: "36px",
  marginBottom: "20px",
};

const formContainerStyle = {
  textAlign: "center",
};

const formRowStyle = {
  marginBottom: "15px",
};

const labelStyle = {
  display: "block",
  fontSize: "16px",
  marginBottom: "5px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "14px",
  borderRadius: "5px",
};

const submitButtonStyle = {
  padding: "15px 20px",
  fontSize: "18px",
  backgroundColor: "#007bff",
  color: "#fff",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Prijava;
