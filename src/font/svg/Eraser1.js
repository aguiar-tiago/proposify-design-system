import * as React from "react";

function SvgEraser1(props) {
  return (
    <svg width={512} height={512} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M509.401 5.908C506.775 2.626 502.837 0 498.898 0h-307.2c-5.25 0-10.502 3.282-12.471 8.533L89.955 251.405.683 494.277c-1.313 3.938-.656 8.533 1.313 11.815C4.62 509.374 8.56 512 12.498 512h307.2c5.252 0 10.503-3.282 12.472-8.533l89.272-242.872 89.272-242.872c1.313-3.938 1.313-8.533-1.313-11.815zM311.165 485.744H32.191l79.425-216.616h278.975l-79.426 216.616z"
        fill="#000"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgEraser1;
