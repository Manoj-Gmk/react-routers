// Importing React and useNavigate hook from react-router-dom
import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  // useNavigate hook allows programmatic navigation
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact</h1>

      {/* Buttons to navigate to nested contact routes */}
      <div className="contactoptions">
        {/* Navigates to /contact/contactinfo when clicked */}
        <button onClick={() => navigate("/contact/contactinfo")}>
          CONTACT-INFO
        </button>

        {/* Navigates to /contact/contactform when clicked */}
        <button onClick={() => navigate("/contact/contactform")}>
          CONTACT-FORM
        </button>
      </div>
    </div>
  );
};

export default Contact;
