import React from "react";
import { string, number } from "prop-types";

const BookmarkSVG = (props: { color: string; size: number }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    viewBox="0 0 32 32"
  >
    <title>bookmark</title>
    <path d="M6 0v32l10-10 10 10v-32z"></path>
  </svg>
);
export default BookmarkSVG;

BookmarkSVG.propTypes = {
  color: string,
  size: number,
};

BookmarkSVG.defaultProps = {
  color: "#000",
  size: 20,
};
