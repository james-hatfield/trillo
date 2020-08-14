import React from "react";
import classes from "./UserReviews.module.scss";

const UserReviews = () => (
  <figure className={classes.UserReviews}>
    <figure className={classes.Review}>
      <blockquote>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore facere
        obcaecati quidem eligendi itaque.
      </blockquote>
      <figcaption>
        <img src={require("../../assets/user-1.jpg")} alt="Review 1" />
        <div className={classes.UserBox}>
          <p>Nick Smith</p>
          <p>Feb 23, 2017</p>
        </div>
        <div className={classes.Rating}>7.8</div>
      </figcaption>
    </figure>
    <figure className={classes.Review}>
      <blockquote>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore facere
        obcaecati quidem eligendi itaque.
      </blockquote>
      <figcaption>
        <img src={require("../../assets/user-2.jpg")} alt="Review 1" />
        <div className={classes.UserBox}>
          <p>Mary Thomas</p>
          <p>Sept 13, 2018</p>
        </div>
        <div className={classes.Rating}>9.8</div>
      </figcaption>
    </figure>
    <button className={classes.BtnInline}>
      Show all <span>&rarr;</span>
    </button>
  </figure>
);
export default UserReviews;
