import React from "react";
import Navbar from "../components/Navbar";
import Footers from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading=" CONTACT" text="Let have a chat" />
      <Form />
      <Footers />
    </div>
  );
};

export default Contact;
