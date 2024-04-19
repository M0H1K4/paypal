import React from "react";
import Logo from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-nav">
          <img className="logo" src={Logo} alt="Company Logo" />
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/price">Pricing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="Headerbutton" aria-label="Schedule a Demo">
          Schedule a Demo
        </button>
      </div>
    </header>
  );
}
