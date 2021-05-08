import * as React from "react";

function SvgImport(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M376.5 299.7l-36.2-36.2-58.7 58.7V0h-51.2v322.2l-58.7-58.7-36.2 36.2L256 420.2l120.5-120.5z" />
      <path d="M409.6 153.6H384v51.2h25.6v256H102.4v-256H128v-51.2h-25.6c-28.3 0-51.2 22.9-51.2 51.2v256c0 28.2 22.9 51.2 51.2 51.2h307.2c28.3 0 51.2-23 51.2-51.2v-256c0-28.3-22.9-51.2-51.2-51.2z" />
    </svg>
  );
}

export default SvgImport;
