import { useRoutes } from "react-router-dom";
import { Home } from "../views/layouts/Home/Home";
import { PageNotFound } from "../views/errors/PageNotFound";
import { Dashboard } from "../views/layouts/Dashboard/Dashboard";
import { Profile } from "../views/modules/Dashboard/Profile";
import { Main } from "../views/modules/Dashboard/Main";

export const Router = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    {
      element: <Dashboard />,
      children: [
        { path: '/dashboard', element: <Main /> },
        { path: '/dashboard/profile', element: <Profile /> },
      ],
    },
    { path: '*', element: <PageNotFound /> },
  ]);
}