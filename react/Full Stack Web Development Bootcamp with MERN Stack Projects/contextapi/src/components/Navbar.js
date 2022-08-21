import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends React.Component {
  // contextType works only in class Components
  // static contextType = ThemeContext;
  render() {
    // console.log(this.context);
    // const { isDarkTheme, darkTheme, lightTheme } = this.context;
    // const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      // Context Consumer works in both functional and class Components
      <ThemeContext.Consumer>
        {(context) => {
          console.log(context);
          const { isDarkTheme, darkTheme, lightTheme } = context;
          const theme = isDarkTheme ? darkTheme : lightTheme;
          return (
            <nav
              style={{
                background: theme.background,
                color: theme.text,
                height: "120px",
              }}
            >
              <h2 style={{ textAlign: "center" }}>
                Adam Nipplesucker's TODO App
              </h2>
              <div className="ui three buttons">
                <button className="ui button">Overview</button>
                <button className="ui button">Contact</button>
                <button className="ui button">Support</button>
              </div>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
