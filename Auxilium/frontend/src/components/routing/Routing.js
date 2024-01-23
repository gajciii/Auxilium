import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";


export default function Routing(){
    return(
        <Routes>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    );
}