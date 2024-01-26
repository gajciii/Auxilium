import React, { useState } from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";
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
      window.location.reload();
    } catch (error) {
      console.error("Error editing accident:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiWithAuth.izbrisiNesreco(id);
      window.location.reload();
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
      <h2>VSE NESREČE</h2>
      {nesrece.map((nesreca) => (
        <Paper key={nesreca.id} elevation={3} style={{ padding: "16px", marginBottom: "16px", backgroundColor: "black", color: "white" }}>
          <Typography variant="h6">Datum: {nesreca.datum}</Typography>
          <Typography variant="body1">Lokacija: {nesreca.lokacija}</Typography>
          <Typography variant="body1">Opis: {nesreca.opis}</Typography>
          {!editMode && (
            <div>
              <Button onClick={() => handleEdit(nesreca)}>Uredi</Button>
              <Button onClick={() => handleDelete(nesreca.id)}>Izbriši</Button>
            </div>
          )}
          {editMode && editedNesreca.id === nesreca.id && (
            <div>
              <Typography variant="h4" style={{ marginBottom: "8px" }}>Vnašanje podatkov o nesreči</Typography>
              <TextField
                name="datum"
                label="Datum"
                value={editedNesreca.datum}
                onChange={handleChange}
                InputProps={{ style: { color: "white", borderBottom: "2px solid blue" } }}
              />
              <TextField
                name="lokacija"
                label="Lokacija"
                value={editedNesreca.lokacija}
                onChange={handleChange}
                InputProps={{ style: { color: "white", borderBottom: "2px solid blue" } }}
              />
              <TextField
                name="opis"
                label="Opis"
                value={editedNesreca.opis}
                onChange={handleChange}
                InputProps={{ style: { color: "white", borderBottom: "2px solid blue" } }}
              />
              <Button onClick={handleSaveEdit}>Shrani</Button>
              <Button onClick={handleCancelEdit}>Prekliči</Button>
            </div>
          )}
        </Paper>
      ))}
    </div>
  );
};

export default VsiNesreci;
