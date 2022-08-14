import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();

  setTimeout(() => {
    navigate("/about");
  }, 4000);

  return (
    <div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/Baryla" className="ui header">
          Baryla
        </Link>
        <p>
          Lorem ipsum dolor sit amed Ahmed. Lorem ipsum dolor sit amed Ahmed.
          Lorem ipsum dolor sit amed Ahmed.
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/chuj" className="ui header">
          chuj
        </Link>
        <p>
          Lorem ipsum dolor sit amed Ahmed. Lorem ipsum dolor sit amed Ahmed.
          Lorem ipsum dolor sit amed Ahmed.
        </p>
      </div>
    </div>
  );
};

export default Contact;
