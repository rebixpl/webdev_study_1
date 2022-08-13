import React from "react";

class SearchInput extends React.Component {
  state = { entry: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                  this.setState({ entry: e.target.value });
                }}
                value={this.state.entry}
              />
              <i className="search icon" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
