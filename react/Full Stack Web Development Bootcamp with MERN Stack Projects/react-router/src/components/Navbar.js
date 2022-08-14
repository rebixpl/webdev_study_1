import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="ui raised very padded segment">
        <a className="ui teal inverted segment">Gloria</a>
        <div className="ui right floated header">
          <button className="ui button">
            <NavLink to="/">Home</NavLink>
          </button>
          <button className="ui button">
            <NavLink to="/about">About</NavLink>
          </button>
          <button className="ui button">
            <NavLink to="/contact">Contact</NavLink>
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
