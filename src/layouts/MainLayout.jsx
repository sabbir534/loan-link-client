import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-11/12 mx-auto flex-1">
        <div className="">
          <Outlet />
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;
