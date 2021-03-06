import * as React from "react";

function SvgLine(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M324.3 139.4v-2.1V35.9C324.3 12 335.7 0 358.4 0H462.4C484.1 0 495 12.1 495 36.4v99.5c0 23.2-11.5 34.8-34.4 34.8h-72.7l.9.9-201.2 201.2c.1 1.6.2 3.3.2 5v99.5c0 23.2-11.5 34.8-34.4 34.8H51.2c-22.7 0-34.1-11.1-34.1-33.4V377.3c0-23.9 11.4-35.9 34.1-35.9h73l-.9-.9 201-201.1zm51.2-19.9h68.3V51.2h-68.3v68.3zM68.3 460.8h68.3v-68.3H68.3v68.3z" />
    </svg>
  );
}

export default SvgLine;
