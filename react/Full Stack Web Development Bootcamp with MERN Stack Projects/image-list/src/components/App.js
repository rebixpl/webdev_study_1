import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";

const API_KEY = `29252871-5ea06025819c767b9728e00ec`;

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${entry}&image_type=photo`
    );
    this.setState({ images: response.data.hits });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        We have {this.state.images.length} images.
      </div>
    );
  }
}

export default App;
