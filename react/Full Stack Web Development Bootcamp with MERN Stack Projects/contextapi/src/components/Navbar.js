import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

// class Navbar extends React.Component {
//   // contextType works only in class Components
//   // static contextType = ThemeContext;
//   render() {
//     // console.log(this.context);
//     // const { isDarkTheme, darkTheme, lightTheme } = this.context;
//     // const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => {
//           return (
//             // Context Consumer works in both functional and class Components
//             <ThemeContext.Consumer>
//               {(themeContext) => {
//                 const { isDarkTheme, darkTheme, lightTheme } = themeContext;
//                 const { isLoggedIn, changeAuthStatus } = authContext;
//                 const theme = isDarkTheme ? darkTheme : lightTheme;
//                 return (
//                   <nav
//                     style={{
//                       background: theme.background,
//                       color: theme.text,
//                       height: "120px",
//                     }}
//                   >
//                     <h2 style={{ textAlign: "center" }}>
//                       Adam Nipplesucker's TODO App
//                     </h2>
//                     <p
//                       onClick={changeAuthStatus}
//                       style={{ textAlign: "center" }}
//                     >
//                       {isLoggedIn ? "Logged In" : "Logged Out"}
//                     </p>
//                     <div className="ui three buttons">
//                       <button className="ui button">Overview</button>
//                       <button className="ui button">Contact</button>
//                       <button className="ui button">Support</button>
//                     </div>
//                   </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  const { isDarkTheme, darkTheme, lightTheme } = themeContext;
  const { isLoggedIn, changeAuthStatus } = authContext;
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <nav
      style={{
        background: theme.background,
        color: theme.text,
        height: "120px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Adam Nipplesucker's TODO App</h2>
      <p onClick={changeAuthStatus} style={{ textAlign: "center" }}>
        {isLoggedIn ? "Logged In" : "Logged Out"}
      </p>
      <div className="ui three buttons">
        <button className="ui button">Overview</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </nav>
  );
};

export default Navbar;
