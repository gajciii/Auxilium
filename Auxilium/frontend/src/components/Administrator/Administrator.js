// Administrator/Administrator.js
import React, { useState } from "react";
import Prijava from "./Prijava";
import NesrecaForm from "./NesrecaForm"; // Dodaj komponento za dodajanje nesreče

const Administrator = () => {
  const [jePrijavljen, setJePrijavljen] = useState(localStorage.getItem("authToken") ? true : false);

  const obdelajPrijava = () => {
    setJePrijavljen(true);
  };

  const obdelajOdjava = () => {
    localStorage.removeItem("authToken");
    setJePrijavljen(false);
  };

  return (
    <div>
      {!jePrijavljen ? (
        <Prijava onPrijava={obdelajPrijava} />
      ) : (
        <div>
          <p>Uporabnik prijavljen</p>
          <NesrecaForm /> {/* Dodaj komponento za dodajanje nesreče */}
          <button onClick={obdelajOdjava}>Odjava</button>
        </div>
      )}
    </div>
  );
};

export default Administrator;
