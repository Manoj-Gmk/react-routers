import React from "react";
import logo from "../assets/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Logo" width="100px" />
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/products">
            <li>Product</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/joblayout">
            <li>Jobs</li>
          </NavLink>
        </ul>
        <button onClick={() => navigate("/contact", { replace: true })}>
          Get Started
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
