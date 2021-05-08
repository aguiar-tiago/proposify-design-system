import * as React from "react";

function SvgText(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M168.7 65.4c-22.9 0-40.6 7.8-52.7 23.3-12.2 15.6-18.3 38.1-18.3 67.8v1.8H36V0h440v158.3h-61v-1.8c0-29.4-6.1-52-18.4-67.6-12.3-15.6-30.1-23.4-53.2-23.4h-18.2v351.4c0 16 2 26.1 6.4 30.1 4.2 4 13.8 5.9 28.5 5.9H395V512H120.1v-59.3h32.4c14.1 0 23.2-1.7 27.6-5s6.7-13.7 6.7-31V65.4h-18.1z" />
    </svg>
  );
}

export default SvgText;
