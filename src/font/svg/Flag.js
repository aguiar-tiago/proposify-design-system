import * as React from "react";

function SvgFlag(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M460.8 102.4H281.6V25.6C281.6 11.5 270.2 0 256 0H51.2C37 0 25.6 11.5 25.6 25.6V512h51.2V307.2H128V384c0 14.1 11.4 25.6 25.6 25.6h307.2c14.2 0 25.6-11.5 25.6-25.6V128c0-14.1-11.4-25.6-25.6-25.6zm-384-51.2h153.6V256H76.8V51.2zm358.4 307.2H215.4l58.7-58.7c4.6-4.6 7.5-11 7.5-18.1v-128h153.6v204.8z" />
    </svg>
  );
}

export default SvgFlag;
