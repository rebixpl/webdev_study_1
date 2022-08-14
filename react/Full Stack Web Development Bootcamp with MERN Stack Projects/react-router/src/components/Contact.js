import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();

  setTimeout(() => {
    navigate("/about");
  }, 2000);

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">Contact</h3>
      <p>
        Lorem ipsum dolor sit amed Ahmed. Lorem ipsum dolor sit amed Ahmed.
        Lorem ipsum dolor sit amed Ahmed.
      </p>
    </div>
  );
};

export default Contact;
