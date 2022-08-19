import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "../withRouter";
import { deleteCard, fetchUsers } from "../actions/cardActions";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Card extends React.Component {
  // state = { user: "" };

  // componentDidMount() {
  //   let user = this.props.params.user;
  //   this.setState({ user }); // like this.setState({ user: user }); but more efficient and less code
  // }

  componentDidMount() {
    this.props.fetchUsers();
  }

  onButtonClick = () => {
    let id = this.props.card.id;
    this.props.deleteCard(id);

    // redirect user to the Contact Page
    this.props.navigate("/contact");
  };

  render() {
    // const { title, body } = this.props.card;
    const { users } = this.props;
    return users.map((user) => {
      return (
        <div
          className="ui raised very padded text container segment"
          style={{ marginTop: "80px" }}
          key={user.id}
        >
          <div className="ui center aligned container">
            <h3 className="ui header textcenter">Card</h3>
          </div>
          <h3 className="ui header">
            Welcome Back <span style={{ color: "green" }}>{user.name}</span>!
          </h3>
          <p>{user.email}</p>
          <button
            className="ui primary right floated button"
            onClick={this.onButtonClick}
          >
            Delete
          </button>
        </div>
      );
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.params.user;

  return {
    card: state.cards.find((card) => card.title === title),
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => dispatch(deleteCard(id)),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default withRouter(
  withParams(connect(mapStateToProps, mapDispatchToProps)(Card))
);
