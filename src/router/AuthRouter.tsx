import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../views/webPages/Auth/Login";
import { Signup } from "../views/webPages/Auth/Signup";
import { ForgotPassword } from "../views/webPages/Auth/ForgotPassword";
import { ResetPassword } from "../views/webPages/Auth/ResetPassword";

export const AuthRouter: React.FC = () => {
  return(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  )
}