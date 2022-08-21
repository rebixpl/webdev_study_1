import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  // shared data that we are going to supply to different components
  state = {
    isDarkTheme: true,
    lightTheme: {
      text: "#222",
      background: "#d8ddf1",
    },
    darkTheme: {
      text: "#fff",
      background: "#5c5c5c",
    },
  };

  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };

  render() {
    return (
      // Provider will wrap different components and provide state of ThemeContextProvider to them
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        {/* This will refer to components that this provider component wraps */}
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
