import * as React from "react";

function SvgPayment(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M26 130.5h460v76.8H26zM294.4 387.3c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
      <circle cx={396.8} cy={323.3} r={64} />
      <path d="M76.8 310.5h102.4v25.6H76.8z" />
      <path d="M0 54.5h512v410H0v-410zm26 25v360h460v-360H26z" />
    </svg>
  );
}

export default SvgPayment;
