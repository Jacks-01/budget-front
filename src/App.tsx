import Link from "./Link/Link";
import React from "react";
import Transactions from "./Transactions/Transactions";
import Nav from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";

//! Uncomment Link to initiate token exchange and recieve data

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/link" element={<Link />} />
      </Routes>
    </>
  );
};

export default App;
