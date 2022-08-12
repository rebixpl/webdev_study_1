import React from "react";
import "./Hemisphere.css";
import northernPic from "./image/NorthernHemisphere.jpeg";
import southernPic from "./image/SouthernHemisphere.jpeg";

const hemisphereConfig = {
  Northern: {
    text: "Hey, you are in Northern Hemisphere!",
    picture: northernPic,
  },
  Southern: {
    text: "Hey, you are in Southern Hemisphere!",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt={hemisphere} />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
