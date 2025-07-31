import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";



const Layout = () => {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");
  const isAll = location.pathname.startsWith("/allpost");
  const isHomePage = location.pathname === "/";

  return (
    <>
<Navbar/>
      <Outlet />
      {/* {!isAdminPage && !isAll && <Footer />} */}
    </>
  );
};

export default Layout;
