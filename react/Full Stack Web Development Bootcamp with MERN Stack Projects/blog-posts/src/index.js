import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import profile1 from "./images/profilepic1.png";
import profile2 from "./images/profilepic2.jpg";
import profile3 from "./images/profilepic3.jpg";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <div className="header">John Doe</div>
        <div className="description">
          Hello My Name Is John Doe and I am a Web Developer.
        </div>
      </UserCard>
      <UserCard>
        <SingleComment
          name="Baryla"
          date="Today at 5:00PM"
          text="This is nice!"
          picture={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Waldemar"
          date="Today at 2:00PM"
          text="Hello!"
          picture={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Uszko"
          date="Today at 7:00PM"
          text="widzisz mnie?"
          picture={profile3}
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
