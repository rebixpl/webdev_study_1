import React from "react";
import SingleImage from "./SingleImage";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    console.log(image);
    return <SingleImage key={image.id} image={image} />;
  });

  return <div className="ui three column grid">{images}</div>;
};

export default ImageList;
