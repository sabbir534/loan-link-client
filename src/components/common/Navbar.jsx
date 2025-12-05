import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaBars, FaSun, FaMoon, FaSignOutAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { FaChartLine } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-loans"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          All Loans
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Contact
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}

            {!user && (
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  to="/login"
                  className="btn btn-sm btn-outline btn-primary"
                >
                  Login
                </Link>
                <Link to="/register" className="btn btn-sm btn-primary">
                  Register
                </Link>
              </div>
            )}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-2xl font-bold gap-0">
          <span className="text-primary flex items-center gap-2">
            <FaChartLine className="text-3xl" />
            Loan
          </span>
          <span className="text-base-content">Link</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-3">
        <button
          onClick={toggleTheme}
          className="btn btn-circle btn-ghost btn-sm"
        >
          {theme === "light" ? (
            <FaMoon className="text-lg" />
          ) : (
            <FaSun className="text-lg text-yellow-400" />
          )}
        </button>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar border border-primary/20"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/T0h1f1s/user-placeholder.png"
                  }
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="menu-title px-4 py-2">
                <span className="truncate block font-semibold">
                  {user?.displayName || "User"}
                </span>
              </li>
              <li>
                <Link to="/dashboard/profile">My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <div className="divider my-1"></div>
              <li>
                <button
                  onClick={handleLogOut}
                  className="text-error font-medium"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden lg:flex gap-2">
            <Link to="/login" className="btn btn-ghost hover:text-primary">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary text-white">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
