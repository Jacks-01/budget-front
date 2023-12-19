import {Outlet} from "react-router-dom";
import Nav from "../Navbar/Navbar";
import React from "react";

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = () => {
  return (
    <header>
      <Nav />
      <Outlet />
    </header>
  );
};

export default RootLayout;
