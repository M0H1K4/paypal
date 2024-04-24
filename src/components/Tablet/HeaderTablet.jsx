import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../payapi-multi-page-website/starter-code/assets/shared/desktop/logo.svg'

export default function HeaderTablet() {
  return (
    <header className="headerTablet">
      <div className="header-containerTablet">
        <div className="logo-navTablet">
          <img className="logoTablet" src={Logo} alt="Company Logo" />
          <nav>
            <ul className="nav-linksTablet">
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
        <button className="HeaderbuttonTablet" aria-label="Schedule a Demo">
          Schedule a Demo
        </button>
      </div>
    </header>
  );
}
