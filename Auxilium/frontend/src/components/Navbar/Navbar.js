import React from "react";
import { Link } from "react-router-dom";
import logoImage from '../../assets/logo.png';  

const NavigationBar = () => {
  const isLoggedIn = sessionStorage.getItem('userId');
  const isAdminLoggedIn = localStorage.getItem('authToken');
  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <img src={logoImage} alt="Logo" style={logoStyle} />

        <div style={linksContainerStyle}>
          <Link to="/nesrece" style={linkStyle}>Nesreče</Link>
          {(isLoggedIn && !isAdminLoggedIn) && <Link to="/profil-uporabnik" style={linkStyle}>Profil</Link>}

          {!isLoggedIn && <Link to="/administrator" style={linkStyle}>Sem administrator</Link>}
          {(!isLoggedIn && !isAdminLoggedIn) && <Link to="/login" style={linkStyle}>Sem uporabnik</Link>}
          {(!isLoggedIn && !isAdminLoggedIn) && <Link to="/registracija" style={linkStyle}>Registracija</Link>}
        </div>
      </div>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: "#000",
  display: "flex",
  alignItems: "center",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%", 
  padding: "0 20px", 
};

const linksContainerStyle = {
  display: "flex",
};

const linkStyle = {
  textDecoration: "none",
  padding: "15px 20px",
  margin: "0 10px",
  color: "#fff",
  borderRadius: "15px",
  cursor: "pointer",
};

const logoStyle = {
  width: "100px", 
  marginRight: "10px",  
};

export default NavigationBar;
