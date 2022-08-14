import React from "react";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Card extends React.Component {
  state = { user: "" };

  componentDidMount() {
    let user = this.props.params.user;
    this.setState({ user }); // like this.setState({ user: user }); but more efficient and less code
  }

  render() {
    const { user } = this.state;
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <div className="ui center aligned container">
          <h3 className="ui header textcenter">Card</h3>
        </div>
        <h3 className="ui header">
          Welcome Back <span style={{ color: "green" }}>{user}</span>!
        </h3>
      </div>
    );
  }
}

export default withParams(Card);
