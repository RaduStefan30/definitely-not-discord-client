import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { Login, Register, Dashboard, Landing } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
