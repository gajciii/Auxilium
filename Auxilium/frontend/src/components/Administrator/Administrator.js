// Administrator/Administrator.js
import React, { useState } from "react";
import Prijava from "./Prijava"; // Uvozi tvojo Prijava komponento

const Administrator = () => {
  const [jePrijavljen, setJePrijavljen] = useState(false);

  const obdelajPrijava = () => {
    setJePrijavljen(true);
  };

  return (
    <div>
      {!jePrijavljen ? (
        <Prijava onPrijava={obdelajPrijava} />
      ) : (
        <div>
          <p>Uporabnik prijavljen</p>
          {/* Tukaj lahko dodate druge komponente, ki jih potrebujete */}
        </div>
      )}
    </div>
  );
};

export default Administrator;
