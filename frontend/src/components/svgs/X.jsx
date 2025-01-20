import React from "react";

const XSvg = (props) => (
	<svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    {...props}
  >
    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="4" fill="none" />
    <line x1="50" y1="10" x2="50" y2="90" stroke="black" strokeWidth="4" />
    <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="4" />
  </svg>
);
export default XSvg;