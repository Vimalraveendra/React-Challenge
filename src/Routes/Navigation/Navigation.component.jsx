import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-links-container">
          <NavLink className="nav-link" to="/all">
            All
          </NavLink>
          <NavLink className="nav-link" to="/clothes">
            Clothes
          </NavLink>
          <NavLink className="nav-link" to="/tech">
            Tech
          </NavLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
