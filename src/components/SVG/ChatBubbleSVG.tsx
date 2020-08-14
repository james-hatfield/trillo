import React from "react";
import { string, number } from "prop-types";

const ChatBubbleSVG = (props: { color: string; size: number }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    viewBox="0 0 36 32"
  >
    <title>bubbles</title>
    <path d="M34 28.161c0 1.422 0.813 2.653 2 3.256v0.498c-0.332 0.045-0.671 0.070-1.016 0.070-2.125 0-4.042-0.892-5.398-2.321-0.819 0.218-1.688 0.336-2.587 0.336-4.971 0-9-3.582-9-8s4.029-8 9-8c4.971 0 9 3.582 9 8 0 1.73-0.618 3.331-1.667 4.64-0.213 0.463-0.333 0.979-0.333 1.522zM16 0c8.702 0 15.781 5.644 15.995 12.672-1.537-0.685-3.237-1.047-4.995-1.047-2.986 0-5.807 1.045-7.942 2.943-2.214 1.968-3.433 4.607-3.433 7.432 0 1.396 0.298 2.747 0.867 3.993-0.163 0.004-0.327 0.007-0.492 0.007-0.849 0-1.682-0.054-2.495-0.158-3.437 3.437-7.539 4.053-11.505 4.144v-0.841c2.142-1.049 4-2.961 4-5.145 0-0.305-0.024-0.604-0.068-0.897-3.619-2.383-5.932-6.024-5.932-10.103 0-7.18 7.163-13 16-13z"></path>
  </svg>
);
export default ChatBubbleSVG;

ChatBubbleSVG.propTypes = {
  color: string,
  size: number,
};

ChatBubbleSVG.defaultProps = {
  color: "#000",
  size: 20,
};
