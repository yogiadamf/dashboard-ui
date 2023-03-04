import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Dashboard from "./pages/Dashboard/Dashboard";
import Maps from "./pages/Monitoring/Maps";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
