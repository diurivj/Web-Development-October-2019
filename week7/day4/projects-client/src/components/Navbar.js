import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../styles/components";

const Navbar = () => (
  <StyledNavbar>
    <h1>IronProjects</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </StyledNavbar>
);

export default Navbar;
