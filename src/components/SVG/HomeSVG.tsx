import React from "react";
import { string, number } from "prop-types";

const HomeSVG = (props: { color: string; size: number }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    viewBox="0 0 32 32"
  >
    <title>home3</title>
    <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
  </svg>
);
export default HomeSVG;

HomeSVG.propTypes = {
  color: string,
  size: number,
};

HomeSVG.defaultProps = {
  color: "#000",
  size: 20,
};
