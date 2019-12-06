import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Navbar</span>
      <span onClick={props.handleLogin} className="navbar-brand mb-0 h4">
        {props.title}
      </span>
    </nav>
  );
}

export default Navbar;
