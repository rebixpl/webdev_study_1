import React from "react";
import ReactDOM from "react-dom";

// function getButtonText() {
//   return "Click me!";
// }

const App = () => {
  //   const buttonText = "Click me!";
  //   const buttonText = [5, 52, " hello", " world"];
  const buttonText = { text: "Submit" };

  return (
    <div>
      <label htmlFor="name" className="label">
        enter e-mail
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
