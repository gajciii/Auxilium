// Administrator/VsiNesreci.js
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import apiWithAuth from "../../services/api";

const VsiNesreci = ({ nesrece }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedNesreca, setEditedNesreca] = useState({});

  const handleEdit = (nesreca) => {
    setEditedNesreca({ ...nesreca });
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedNesreca({});
  };

  const handleSaveEdit = async () => {
    try {
      await apiWithAuth.urediNesreco(editedNesreca.id, editedNesreca);
      setEditMode(false);
      setEditedNesreca({});
    } catch (error) {
      console.error("Error editing accident:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiWithAuth.izbrisiNesreco(id);
    } catch (error) {
      console.error("Error deleting accident:", error.message);
    }
  };

  const handleChange = (e) => {
    setEditedNesreca({
      ...editedNesreca,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Vse nesreče</h2>
      <ul>
        {nesrece.map((nesreca) => (
          <li key={nesreca.id}>
            <p>Datum: {nesreca.datum}</p>
            <p>Lokacija: {nesreca.lokacija}</p>
            <p>Opis: {nesreca.opis}</p>
            {!editMode && (
              <div>
                <Button onClick={() => handleEdit(nesreca)}>Uredi</Button>
                <Button onClick={() => handleDelete(nesreca.id)}>Izbriši</Button>
              </div>
            )}
            {editMode && editedNesreca.id === nesreca.id && (
              <div>
                <TextField
                  name="datum"
                  label="Datum"
                  value={editedNesreca.datum}
                  onChange={handleChange}
                />
                <TextField
                  name="lokacija"
                  label="Lokacija"
                  value={editedNesreca.lokacija}
                  onChange={handleChange}
                />
                <TextField
                  name="opis"
                  label="Opis"
                  value={editedNesreca.opis}
                  onChange={handleChange}
                />
                <Button onClick={handleSaveEdit}>Shrani</Button>
                <Button onClick={handleCancelEdit}>Prekliči</Button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VsiNesreci;