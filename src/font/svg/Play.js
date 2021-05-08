import * as React from "react";

function SvgPlay(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0zm0 460.8c-112.9 0-204.8-91.9-204.8-204.8S143.1 51.2 256 51.2 460.8 143.1 460.8 256 368.9 460.8 256 460.8z" />
      <path d="M204.8 358.4L358.4 256 204.8 153.6v204.8z" />
    </svg>
  );
}

export default SvgPlay;
