import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Modal from "./Modal";
import { connect } from "react-redux";

const Contact = ({ cards }) => {
  // let navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/about");
  // }, 4000);

  return (
    <div>
      {/* <Modal /> */}
      {cards.map((card) => {
        return (
          <div
            className="ui raised very padded text container segment"
            style={{ marginTop: "80px" }}
            key={card.id}
          >
            <Link to={`/${card.title}`} className="ui header">
              {card.title}
            </Link>
            <p>{card.body}</p>
          </div>
        );
      })}
      {/* <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/chuj" className="ui header">
          chuj
        </Link>
        <p>
          Lorem ipsum dolor sit amed Ahmed. Lorem ipsum dolor sit amed Ahmed.
          Lorem ipsum dolor sit amed Ahmed.
        </p>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(Contact);
