import * as React from "react";

function SvgOutlineVideocam(props) {
  return (
    <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" fill="#FFF" fillOpacity={0.01} />
        <path
          d="M25 13.333v13.334H8.333V13.333H25zM26.667 10h-20C5.75 10 5 10.75 5 11.667v16.666C5 29.25 5.75 30 6.667 30h20c.916 0 1.666-.75 1.666-1.667V22.5L35 29.167V10.833L28.333 17.5v-5.833c0-.917-.75-1.667-1.666-1.667z"
          fill="#737373"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgOutlineVideocam;
