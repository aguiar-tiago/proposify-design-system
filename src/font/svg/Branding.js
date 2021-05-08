import * as React from "react";

function SvgBranding(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M389.2 345.9v-292H122.7v292L256 447.5z" />
      <path d="M480.6 0c-6.3 0-11.7 3-15.4 7.5H46.5C42.9 3 37.4 0 31.2 0 20.5 0 11.6 8.9 11.6 19.7s8.9 19.7 19.7 19.7c6.1 0 11.6-2.8 15.2-7.3h27.6v344L256 512l181.8-136V32h27.6c3.6 4.4 9 7.3 15.2 7.3 10.9 0 19.7-8.9 19.7-19.7S491.5 0 480.6 0zm-67.4 358.3L256 480 98.6 358.3V32.1h314.6v326.2z" />
    </svg>
  );
}

export default SvgBranding;
