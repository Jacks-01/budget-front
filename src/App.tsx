import Link from "./Link/Link";
import React from "react";
import Transactions from "./Transactions/Transactions";
import Nav from "./Navbar/Navbar";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Dashboard, { dashboardLoader } from "./Dashboard/Dashboard";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/link" element={<Link />} />
      <Route path="/dashboard" element={<Dashboard />} loader={dashboardLoader}/>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
