import * as React from "react";

function SvgHeart(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        d="M200.6 446.2c15 15 34.6 22.3 54.2 22 19.6.3 39.3-7 54.4-22l161.3-160.5c55.3-55.3 55.3-145 0-200.4-55.3-55.3-145-55.3-200.3 0l-14.3 14.1-14.2-14.1c-55.3-55.4-145-55.4-200.2 0s-55.3 145 0 200.3l159.1 160.6z"
        fill="#010101"
      />
    </svg>
  );
}

export default SvgHeart;
