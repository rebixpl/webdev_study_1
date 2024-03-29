import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // the state object is the only one that is mutable
  //   this.state = {
  //     latitude: null,
  //     errorMessage: "",
  //   };
  // }

  state = {
    latitude: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <HemisphereDisplay latitude={this.state.latitude} />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
