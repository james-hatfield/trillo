import React from "react";
import { string, number } from "prop-types";

const LocationSVG = (props: { color: string; size: number }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    viewBox="0 0 32 32"
  >
    <title>location2</title>
    <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16.125c-3.383 0-6.125-2.742-6.125-6.125s2.742-6.125 6.125-6.125 6.125 2.742 6.125 6.125-2.742 6.125-6.125 6.125zM12.125 10c0-2.14 1.735-3.875 3.875-3.875s3.875 1.735 3.875 3.875c0 2.14-1.735 3.875-3.875 3.875s-3.875-1.735-3.875-3.875z"></path>
  </svg>
);
export default LocationSVG;

LocationSVG.propTypes = {
  color: string,
  size: number,
};

LocationSVG.defaultProps = {
  color: "#000",
  size: 20,
};
