import React from "react";

const LeftNavigation = (props) => {
  return (
    <div className="left-navigation">
      <button
        className="left-navigation__post-business"
        onClick={() => props.setMenu("main")}
      >
        + Post Business
      </button>

      <ul className="left-navigation__list">
        <li
          className="left-navigation__item"
          onClick={() => props.setMenu("businesses")}
        >
          {" "}
          <i className="left-navigation__icon fa fa-briefcase"></i> Businesses
        </li>
        <li
          className="left-navigation__item"
          onClick={() => props.setMenu("reviews")}
        >
          <i className="left-navigation__icon fa fa-star"></i>Reviews
        </li>{" "}
        <li className="left-navigation__item">
          <i className="left-navigation__icon fa fa-cog"></i>Settings
        </li>
      </ul>
    </div>
  );
};
export default LeftNavigation;
