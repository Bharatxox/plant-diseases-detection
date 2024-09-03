import React from "react";
import { Outlet } from "react-router-dom";
import Navbar8 from "./navbar8";
import Footer4 from "./footer4";

const Layout = () => {
  return (
    <div>
      <Navbar8 />
      <Outlet />
      <Footer4 />
    </div>
  );
};

export default Layout;
