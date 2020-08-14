import React from "react";
import classes from "./HotelDetail.module.scss";
import UserReviews from "../../UserReviews/UserReviews";

const HotelDetail = () => (
  <div className={classes.Detail}>
    <div className={classes.Description}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quisquam
        mollitia, laudantium eaque quasi id laboriosam incidunt possimus aliquam
        unde distinctio pariatur praesentium deserunt nulla commodi
        exercitationem est quidem quis tempora voluptates accusamus aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
        ratione explicabo nemo aut voluptatem velit omnis a, culpa facilis unde?
      </p>
      <ul>
        <li>Close to the beach</li>
        <li>Breakfast included</li>
        <li>Free airport shuttle</li>
        <li>Free wifi in all rooms</li>
        <li>Air conditioning and heating</li>
        <li>Pets allowed</li>
        <li>We speak all languaged</li>
        <li>Perfect for familes</li>
      </ul>
      <div className={classes.Recommended}>
        <p>Lucy and 3 friends recommend this hotel!</p>
        <div>
          <img src={require("../../../assets/user-3.jpg")} alt="Friend 1" />
          <img src={require("../../../assets/user-4.jpg")} alt="Friend 2" />
          <img src={require("../../../assets/user-5.jpg")} alt="Friend 3" />
          <img src={require("../../../assets/user-6.jpg")} alt="Friend 4" />
        </div>
      </div>
    </div>
    <UserReviews />
  </div>
);
export default HotelDetail;
