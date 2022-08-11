import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/profilepic1.png";

const App = () => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={profile1} alt="profile picture" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Waldemar
          </a>
          <div className="metadata">
            <span className="date">Today at 5:00PM</span>
          </div>
          <div className="text">It's amazing!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
