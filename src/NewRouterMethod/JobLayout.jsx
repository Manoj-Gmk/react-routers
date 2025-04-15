import React from "react";
import { Outlet } from "react-router-dom";

const JobLayout = () => {
  return (
    <div className="jobs">
      <h2>Welcome to Job portal</h2>
      <h3>This are the upcoming job notifiations</h3>

      <Outlet />
    </div>
  );
};

export default JobLayout;
