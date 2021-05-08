import * as React from "react";

function SvgSuspend(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M257 0C116 0 1 115 1 256s115 256 256 256 256-115 256-256S398 0 257 0zm0 78.7c36.1 0 69.6 10.9 97.7 29.5L109.3 353.7c-18.7-28.1-29.6-61.5-29.6-97.7 0-97.7 79.6-177.3 177.3-177.3zm0 354.6c-33.3 0-64-9.3-90.6-25.1l242.7-242.7c15.8 26.6 25.1 57.3 25.1 90.6.1 97.6-79.5 177.2-177.2 177.2z" />
    </svg>
  );
}

export default SvgSuspend;
