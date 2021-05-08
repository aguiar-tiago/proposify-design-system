import * as React from "react";

function SvgCancel(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M256 0C115.2 0 0 115.2 0 256s115.2 256 256 256 256-115.2 256-256S396.8 0 256 0zm128 352l-32 32-96-96-96 96-32-32 96-96-96-96 32-32 96 96 96-96 32 32-96 96 96 96z" />
    </svg>
  );
}

export default SvgCancel;
