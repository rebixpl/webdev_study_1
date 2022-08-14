import React from "react";
import LOADING_GIF from "./img/loading.gif";

class SingleImage extends React.Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  render() {
    return (
      <div className="column">
        <a
          className="ui fluid card"
          href={this.props.image.pageURL}
          target="_blank"
        >
          <div className="image">
            {this.state.loaded ? null : (
              <img style={{ filter: "invert(1)" }} src={LOADING_GIF} />
            )}
            <img
              src={this.props.image.webformatURL}
              onLoad={() => this.setState({ loaded: true })}
            />
          </div>
          <div className="content">
            <div className="description">
              <p style={{ display: "inline", paddingRight: "10px" }}>Tags:</p>
              {this.props.image.tags.split(",").map((tag) => {
                return <span className="ui label">{tag}</span>;
              })}
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Views: {this.props.image.views}
            </span>
            <span>
              <i className="user icon"></i>
              {this.props.image.user}
            </span>
          </div>
        </a>
      </div>
    );
  }
}

export default SingleImage;
