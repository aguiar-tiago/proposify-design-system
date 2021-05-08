import * as React from "react";

function SvgImage(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M394.6 51.2H51.2C23 51.2 0 74.2 0 102.4v307.2c0 28.2 23 51.2 51.2 51.2h409.6c28.2 0 51.2-23 51.2-51.2v-241L394.6 51.2zM51.2 409.6V102.4h307.2v102.4h102.4v204.8H51.2z" />
      <path d="M205 319.4l-39.1-62.8-63.5 101.8h307.2L295.1 174.8 205 319.4z" />
    </svg>
  );
}

export default SvgImage;
