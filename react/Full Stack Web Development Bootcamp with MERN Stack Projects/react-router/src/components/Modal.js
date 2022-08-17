import React from "react";
// To use React Portals we need to import ReactDOM from "react-dom" as well
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer show modals visible active">
      <div className="ui raised very padded text container segment">
        <h1>I am a modal!</h1>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
