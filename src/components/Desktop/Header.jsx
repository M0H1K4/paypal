import React from "react";
import Logo from "../../payapi-multi-page-website/starter-code/assets/shared/desktop/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-nav">
          <img className="logo" src={Logo} alt="Company Logo" />
          <nav>
            <ul className="nav-links">
              <li>
                <a className="linki" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="linki" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="linki" href="#">
                  Contact
                </a>
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
