import * as React from "react";

function SvgGuide(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm0-32c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224zm0-416l96 192H160l96-192zm0 63.9L192 256h128l-64-128.1zm0 320.1l-96-192h192l-96 192z" />
    </svg>
  );
}

export default SvgGuide;
