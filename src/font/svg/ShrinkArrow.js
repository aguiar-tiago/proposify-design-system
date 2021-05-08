import * as React from "react";

function SvgShrinkArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M371.6 180.5H512v60.2H271.3v-42.6l-1.2-1.2 1.2-1.2V0h60.2v135.6L461.6 5.5 504.1 48 371.6 180.5zm-191 191.1V512h60.2V271.3h-42.5L197 270l-1.2 1.2H0v60.2h135.6L5.5 461.5 48 504l132.6-132.4z" />
    </svg>
  );
}

export default SvgShrinkArrow;
