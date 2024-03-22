import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../views/webPages/Auth/Login";

export const DashboardRouter: React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Login />} />
    </Routes>
  )
}