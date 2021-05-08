import * as React from "react";

function SvgEdit(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M422.4 512H64c-28.2 0-51.2-23-51.2-51.2V102.4c0-28.2 23-51.2 51.2-51.2h179.2v51.2H64v358.4h358.4V230.4h51.2v230.4c0 28.2-23 51.2-51.2 51.2z" />
      <path d="M212.7 214.1l72.4 72.4-90.5 18.1 18.1-90.5zM484.2 87.4c20-20 20-52.4 0-72.4-20-20-52.4-20-72.4 0L248.9 177.9l72.4 72.4L484.2 87.4z" />
    </svg>
  );
}

export default SvgEdit;
