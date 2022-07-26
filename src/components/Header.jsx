import React from "react";
import "./Header.css";
import logo from "./images/pwclogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="container">
        <div className="nav-bar">
          <div className="logo">
            <Link to="./">
              <img src={logo} alt="PWC Logo" width={40} height={40} />
              <span>PwC Website</span>
            </Link>
          </div>

          <div className="menu">
            <ul className="nav-links">
              <li>
                <Link to="./">Home</Link>
              </li>
              <li>
                <Link to="./about">About</Link>
              </li>
              <li>
                <Link to="./contact">Contact</Link>
              </li>
              <li>
                <Link to="./gallery">Gallery</Link>
              </li>

              <li>
                <Link to="./application">Apply</Link>
              </li>
            </ul>
          </div>

          <div className="dark-light-box">
            <div className="dark-light">
              <i className="bx bx-moon moon"></i>
              <i className="bx bx-sun sun"></i>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Header;
