import React from "react";
import classes from "./CallToAction.module.scss";

const CallToAction = () => (
  <div className={classes.Cta}>
    <h2>Good news! We have 4 free rooms for your selected dates!</h2>
    <button className={classes.Btn}>
      <span>Book now</span>
      <span>Only 4 rooms left</span>
    </button>
  </div>
);
export default CallToAction;
