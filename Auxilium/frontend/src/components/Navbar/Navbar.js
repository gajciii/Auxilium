import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/administrator">Administrator</Link>
        </li>
        <li>
          <Link to="/login">Uporabnik</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
