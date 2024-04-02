import { Routes, Route } from "react-router-dom";
import { Home } from "../views/layouts/Home/Home";
import { Login } from "../views/modules/Auth/Login";
import { PageNotFound } from "../views/errors/PageNotFound";

export const Router = () => {
  return(
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Login />} />
      <Route path="/dashboard/profile" element={<Login />} />

      <Route path="*" element={<PageNotFound />} />

    </Routes>
  )
}