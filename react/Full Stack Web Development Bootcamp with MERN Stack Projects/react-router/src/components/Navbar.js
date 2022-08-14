import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="ui raised very padded segment">
        <a className="ui teal inverted segment">Gloria</a>
        <div className="ui right floated header">
          <button className="ui button">
            <Link to="/">Home</Link>
          </button>
          <button className="ui button">
            <Link to="/about">About</Link>
          </button>
          <button className="ui button">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
