import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h3>CONTACT-FORM</h3>
      <form>
        <input type="text" placeholder="First name" />
        <br></br>
        <input type="email" placeholder="Enter Email" />
        <br></br>
        <input type="text" placeholder="textarea" />
      </form>
    </div>
  );
};

export default ContactForm;
