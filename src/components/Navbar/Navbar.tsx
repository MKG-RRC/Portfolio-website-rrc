import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">MKG Portfolio</h1>

        <ul className="nav-links">
          <li>
            <Link to="/#home">Home</Link>
          </li>
          <li>
            <Link to="/#work">Work</Link>
          </li>
          <li>
            <Link to="/#skills">Skills</Link>
          </li>
          <li>
            <Link to="/#resources">Resources</Link>
          </li>
          <li>
            <Link to="/#developer">Setup</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
