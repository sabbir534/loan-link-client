import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Navbar is optional here, but good for navigation */}
      <Navbar />

      <div className="flex flex-1">
        {/* Left Side - Image (Hidden on mobile) */}
        <div
          className="hidden lg:flex lg:w-1/2 bg-cover bg-center items-center justify-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-white p-12">
            <h1 className="text-5xl font-bold mb-4">Welcome to LoanLink</h1>
            <p className="text-xl">
              Empowering your dreams with secure and fast financial solutions.
            </p>
          </div>
        </div>

        {/* Right Side - Forms (Outlet) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-base-100">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AuthLayout;
