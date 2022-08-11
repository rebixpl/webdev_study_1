import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import profile1 from "./images/profilepic1.png";
import profile2 from "./images/profilepic2.jpg";
import profile3 from "./images/profilepic3.jpg";

const App = () => {
  return (
    <div className="ui comments">
      <SingleComment
        name="Baryla"
        date="Today at 5:00PM"
        text="This is nice!"
        picture={profile1}
      />
      <SingleComment
        name="Waldemar"
        date="Today at 2:00PM"
        text="Hello!"
        picture={profile2}
      />
      <SingleComment
        name="Uszko"
        date="Today at 7:00PM"
        text="widzisz mnie?"
        picture={profile3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
