import React from "react";
import classes from "./Sidebar.module.scss";
import Icon from "../SvgIcon/Icon";

const Sidebar = () => (
  <nav className={classes.Sidebar}>
    <ul className={classes.Nav}>
      <li className={`${classes.Item} ${classes.Active}`}>
        <a className={classes.Link} href="#!">
          <Icon name="home3" />
          <span>Hotel</span>
        </a>
      </li>
      <li className={classes.Item}>
        <a className={classes.Link} href="#!">
          <Icon name="plane" />
          <span>Flight</span>
        </a>
      </li>
      <li className={classes.Item}>
        <a className={classes.Link} href="#!">
          <Icon name="key" />
          <span>Car Rental</span>
        </a>
      </li>
      <li className={classes.Item}>
        <a className={classes.Link} href="#!">
          <Icon name="map" />
          <span>Tours</span>
        </a>
      </li>
    </ul>
    <div className={classes.Legal}>
      &copy; 2017 by Trillo. All rights reserved.
    </div>
  </nav>
);
export default Sidebar;
