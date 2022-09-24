import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

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
    </Fragment>
  );
};
export default Navigation;
