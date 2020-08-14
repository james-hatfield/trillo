import React from "react";
import classes from "./HotelView.module.scss";
import Icon from "../SvgIcon/Icon";
import HotelDetail from "./HotelDetail/HotelDetail";

const HotelView = () => (
  <div className={classes.HotelView}>
    <div className={classes.Gallery}>
      <figure>
        <img src={require("../../assets/hotel-1.jpg")} alt="Hotel 1" />
      </figure>
      <figure>
        <img src={require("../../assets/hotel-2.jpg")} alt="Hotel 2" />
      </figure>
      <figure>
        <img src={require("../../assets/hotel-3.jpg")} alt="Hotel 3" />
      </figure>
    </div>
    <div className={classes.Overview}>
      <h1 className={classes.Heading}>Hotel Las Palmas</h1>
      <div className={classes.Stars}>
        <Icon name="star-full" />
        <Icon name="star-full" />
        <Icon name="star-full" />
        <Icon name="star-full" />
        <Icon name="star-full" />
      </div>
      <div className={classes.Location}>
        <Icon name="location2" />
        <button className={classes.BtnInline}>Albufeira, Portugal</button>
      </div>
      <div className={classes.Rating}>
        <div className={classes.AverageRating}>8.6</div>
        <div className={classes.RatingCount}>429 votes</div>
      </div>
    </div>
    <HotelDetail />
  </div>
);
export default HotelView;
