import React from "react";
import Navbar from "../Components/Navbar.jsx";
import { Outlet } from "react-router-dom";
const NewRouter = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="container">
        <Outlet />
        {/* will access the childs like about, contact etc  */}
      </div>
    </div>
  );
};

export default NewRouter;
