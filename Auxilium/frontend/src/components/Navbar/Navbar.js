import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const isLoggedIn = sessionStorage.getItem('userId');
  const isAdminLoggedIn = localStorage.getItem('authToken');
  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <Link to="/nesrece" style={linkStyle}>Nesreče</Link>
        {(isLoggedIn && !isAdminLoggedIn) && <Link to="/profil-uporabnik" style={linkStyle}>Profil</Link>}


        {!isLoggedIn && <Link to="/administrator" style={linkStyle}>Sem administrator</Link>}
        {(!isLoggedIn && !isAdminLoggedIn) && <Link to="/login" style={linkStyle}>Sem uporabnik</Link>}
        {(!isLoggedIn && !isAdminLoggedIn) && <Link to="/registracija" style={linkStyle}>Registracija</Link>}
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
