import { Routes, Route } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { DashboardRouter } from "./DashboardRouter";

export const Router = () => {
  return(
    <Routes>
      <Route path="/*" element={<AuthRouter />} />
      <Route path="/dashboard/*" element={<DashboardRouter />} />
    </Routes>
  )
}