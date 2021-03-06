import * as React from "react";

function SvgImgRotateLeft(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M378.2 76.8H369l33.1-33.1-36.2-36.2-94.9 94.9 94.9 94.9 36.2-36.1L369 128h9.2c82.6 0 82.6 57.8 82.6 76.8v25.6H512v-25.6c0-80.2-50-128-133.8-128zM51.2 51.2h128v153.6h51.2V51.2c0-28.2-23-51.2-51.2-51.2h-128C23 0 0 23 0 51.2v358.4c0 28.2 23 51.2 51.2 51.2h51.2v-51.2H51.2V51.2z" />
      <path d="M460.8 256h-256c-28.2 0-51.2 23-51.2 51.2v153.6c0 28.2 23 51.2 51.2 51.2h256c28.2 0 51.2-23 51.2-51.2V307.2c0-28.2-23-51.2-51.2-51.2zm-256 204.8V307.2h256v153.6h-256z" />
    </svg>
  );
}

export default SvgImgRotateLeft;
