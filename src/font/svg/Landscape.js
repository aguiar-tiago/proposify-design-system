import * as React from "react";

function SvgLandscape(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M64 0v512h384V0H64zm32 32h320v240.1l-64-79.9-35 43.9 99 125V448L160 128l-64 79.9V32z" />
    </svg>
  );
}

export default SvgLandscape;
