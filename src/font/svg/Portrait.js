import * as React from "react";

function SvgPortrait(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M0 64v384h512V64H0zm32 32h448v320h-7L320 224l-35 44 118 148h-64L160 192 32 352V96z" />
    </svg>
  );
}

export default SvgPortrait;
