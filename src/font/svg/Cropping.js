import * as React from "react";

function SvgCropping(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M368.6 471V184.3H0v-41h409.6V471h-41z" />
      <path d="M143.4 41v286.7H512v41H102.4V41h41z" />
    </svg>
  );
}

export default SvgCropping;
