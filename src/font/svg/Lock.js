import * as React from "react";

function SvgLock(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <g>
        <circle cx={256} cy={355.6} r={42.7} />
        <path d="M412.4 199.1v-56.9C412.4 63.8 334.4 0 256 0S99.6 63.8 99.6 142.2v56.9c-56.9 0-56.9 0-56.9 29.5v254.9c0 28.4 0 28.4 28.4 28.4h370.4c27.8 0 27.8 0 27.8-28.4V228.7c0-31.4 0-29.6-56.9-29.6zm-255.9-56.9c0-47 40.1-84.6 99.5-84.6s99.5 37.6 99.5 84.6v56.9h-199v-56.9zM99.6 455.1V256h312.9l.1 199.1h-313z" />
      </g>
    </svg>
  );
}

export default SvgLock;
