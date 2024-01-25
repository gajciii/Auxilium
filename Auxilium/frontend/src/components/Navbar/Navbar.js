import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <Link to="/administrator" style={linkStyle}>Sem administrator</Link>
        <Link to="/login" style={linkStyle}>Sem uporabnik</Link>
        <Link to="/registracija" style={linkStyle}>Registracija</Link>
      </div>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: "#000",
};

const containerStyle = {
  display: "flex",
  justifyContent: "flex-end", 
  alignItems: "center",
};

const linkStyle = {
  textDecoration: "none",
  padding: "15px 20px",
  margin: "0 10px",
  color: "#fff",
  borderRadius: "15px",
  cursor: "pointer",
};

export default NavigationBar;
