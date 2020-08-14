import React from "react";
import { string, number } from "prop-types";

const MapSVG = (props: { color: string; size: number }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    viewBox="0 0 32 32"
  >
    <title>map</title>
    <path d="M0 6l10-4v24l-10 4z"></path>
    <path d="M12 1l10 6v23l-10-5z"></path>
    <path d="M24 7l8-6v24l-8 6z"></path>
  </svg>
);
export default MapSVG;

MapSVG.propTypes = {
  color: string,
  size: number,
};

MapSVG.defaultProps = {
  color: "#000",
  size: 20,
};
