import * as React from "react";

function SvgCircle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M263.4.1C122.2-3.9 4.2 107.3.1 248.6c-.1 2.5-.1 4.9-.1 7.5C0 397.4 114.6 512 256 512s256-114.6 256-255.9c.1-138.6-110.1-252-248.6-256z" />
    </svg>
  );
}

export default SvgCircle;
