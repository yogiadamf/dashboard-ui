import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import {
  Dashboard,
  Maps,
  NetworkDiagram,
  Problems,
  Ticketing,
  ProjectCompany,
  Users,
  Projects,
  FieldEngineer,
  ThirdParty,
  Sites,
  Devices,
  Performance,
  LogUser,
  LogSystem,
  Pop,
} from "./pages";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Monitoring */}
        <Route path="/maps" element={<Maps />} />
        <Route path="/network-diagram" element={<NetworkDiagram />} />
        <Route path="/problems" element={<Problems />} />

        {/* Tciketing */}
        <Route path="/ticketing" element={<Ticketing />} />

        {/* Administrations */}
        <Route path="/project-company" element={<ProjectCompany />} />
        <Route path="/user" element={<Users />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/field-engineer" element={<FieldEngineer />} />
        <Route path="/third-party" element={<ThirdParty />} />
        <Route path="/pop" element={<Pop />} />
        <Route path="/site" element={<Sites />} />
        <Route path="/Device" element={<Devices />} />

        {/* Performance */}
        <Route path="/performance" element={<Performance />} />

        {/* Activity */}
        <Route path="/log-user" element={<LogUser />} />
        <Route path="/log-system" element={<LogSystem />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
