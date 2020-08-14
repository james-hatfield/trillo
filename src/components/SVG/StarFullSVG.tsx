import React from "react";
import { string, number } from "prop-types";

const StarFull = (props: { color: string; size: number }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    viewBox="0 0 32 32"
  >
    <title>star-full</title>
    <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
  </svg>
);
export default StarFull;

StarFull.propTypes = {
  color: string,
  size: number,
};

StarFull.defaultProps = {
  color: "#000",
  size: 20,
};
