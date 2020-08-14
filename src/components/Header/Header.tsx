import React from "react";
import classes from "./Header.module.scss";
import Icon from "../SvgIcon/Icon";

const Header = () => (
  <header className={classes.Header}>
    <img
      className={classes.Logo}
      src={require("../../assets/logo.png")}
      alt="Trillo Logo"
    />
    <form action="#" className={classes.Search}>
      <input
        type="text"
        className={classes.SearchInput}
        placeholder="Search hotels"
      />
      <button className={classes.SearchButton}>
        <Icon name={"search"} />
      </button>
    </form>
    <nav className={classes.UserNav}>
      <div className={classes.IconBox}>
        <Icon name="bookmark" size="2rem" />
        <span className={classes.Notifcation}>7</span>
      </div>
      <div className={classes.IconBox}>
        <Icon name="bubbles" size="2.25rem" />
        <span className={classes.Notifcation}>13</span>
      </div>
      <div className={classes.User}>
        <img
          className={classes.UserPhoto}
          src={require("../../assets/user.jpg")}
          alt="User"
        />
        <span className={classes.UserName}>Jonas</span>
      </div>
    </nav>
  </header>
);
export default Header;
