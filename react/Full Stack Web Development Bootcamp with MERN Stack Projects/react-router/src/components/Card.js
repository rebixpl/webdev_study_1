import React from "react";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Card extends React.Component {
  // state = { user: "" };

  // componentDidMount() {
  //   let user = this.props.params.user;
  //   this.setState({ user }); // like this.setState({ user: user }); but more efficient and less code
  // }

  render() {
    const { title,body } = this.props.card;
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <div className="ui center aligned container">
          <h3 className="ui header textcenter">Card</h3>
        </div>
        <h3 className="ui header">
          Welcome Back <span style={{ color: "green" }}>{title}</span>!
        </h3>
        <p>{body}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.params.user;
  console.log(title);
  
  return { 
    card: state.cards.find(card => card.title === title)
  }
}

export default withParams(connect(mapStateToProps)(Card));
