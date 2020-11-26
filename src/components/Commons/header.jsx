import React from "react";

const Header = () => {
  return (
    <div className="header">
      <span className="header-title">Phillips !</span>

      <nav className="header-nav">
        <ul className="header-nav__list">
          <li className="header-nav__item">
            <a href="" className="header-nav__link">
              Login
            </a>
          </li>

          <li className="header-nav__item">
            <a href="" className="header-nav__link header-nav__link--login ">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
