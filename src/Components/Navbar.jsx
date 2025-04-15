// Importing React and necessary hooks/components
import React from "react";
import logo from "../assets/logo.jpg"; // Importing logo image
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation bar container */}
      <nav className="navbar">
        {/* Logo image */}
        <img src={logo} alt="Logo" width="100px" />

        {/* Navigation links */}
        <ul>
          {/* NavLink automatically applies active class when route matches */}
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

        {/* Button to navigate to Contact page with replace option */}
        <button onClick={() => navigate("/contact", { replace: true })}>
          Get Started
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
