import React from "react";
import Icons from "../../assets/sprite.svg";
import { string } from "prop-types";

interface IIcon {
  name: string;
  color: string;
  size: string;
}

const Icon = ({ name, color, size }: IIcon) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);
export default Icon;

Icon.propTypes = {
  name: string,
  color: string,
  size: string,
};

Icon.defaultProps = {
  color: "#000",
  size: "2rem",
};
