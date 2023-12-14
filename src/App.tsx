import Link from "./Link/Link";
import React from "react";
import Transactions from "./Transactions/Transactions";
import Nav from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Dashboard from "./Dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/link" element={<Link />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
