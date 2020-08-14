import React from "react";
import classes from "./Header.module.scss";
import SearchSVG from "../SVG/SearchSVG";

const Header = () => (
  <header className={classes.Header}>
    <img
      className={classes.Logo}
      src={require("../../assets/logo.png")}
      alt="Trillo Logo"
    />
    <form action="#" className={classes.Search}>
      <input type="text" className={classes.SearchInput} />
      <button className={classes.SearchButton}>
        <SearchSVG />
      </button>
    </form>
    <nav className={classes.UserNav}>
      <div className={classes.IconBox}></div>
    </nav>
  </header>
);
export default Header;
