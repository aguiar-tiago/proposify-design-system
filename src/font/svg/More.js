import * as React from "react";

function SvgMore(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <g>
        <circle cx={256} cy={48} r={48} />
        <circle cx={256} cy={256} r={48} />
        <circle cx={256} cy={464} r={48} />
      </g>
    </svg>
  );
}

export default SvgMore;
