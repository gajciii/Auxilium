//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Routing from './components/routing/Routing';
//import Navbar from './components/Navbar/Navbar';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
