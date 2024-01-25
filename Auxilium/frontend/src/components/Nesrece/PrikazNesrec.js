// Administrator/Administrator.js
import React, { useState, useEffect } from "react";

import NesreceList1 from "./nesrece";
import apiWithAuth from "../../services/api";

const NesreceList = () => {
  const [vseNesrece, setVseNesrece] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const nesrece = await apiWithAuth.api.get("/nesrece/nesrece");
        setVseNesrece(nesrece.data);
      } catch (error) {
        console.error("Error fetching accidents:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
      <NesreceList1 nesrece={vseNesrece} />
    </div>
  );
};

export default NesreceList;
