import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-dark py-2">
      <Link className="navbar-brand p-0 m-0" to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "10vw", height: "6vw" }}
        ></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
