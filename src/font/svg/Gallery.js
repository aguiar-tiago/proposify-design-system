import * as React from "react";

function SvgGallery(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M486.4 51.2H332.8c-14.2 0-25.6 11.5-25.6 25.6v25.6H204.8V25.6c0-14.1-11.4-25.6-25.6-25.6H25.6C11.4 0 0 11.5 0 25.6v460.8C0 500.5 11.4 512 25.6 512h460.8c14.2 0 25.6-11.5 25.6-25.6V76.8c0-14.1-11.4-25.6-25.6-25.6zm-435.2 0h102.4v409.6H51.2V51.2zm153.6 102.4h102.4v307.2H204.8V153.6zm256 307.2H358.4V102.4h102.4v358.4z" />
      <path d="M76.8 76.8H128v204.8H76.8V76.8zM230.4 179.2h51.2v153.6h-51.2V179.2zM384 128h51.2v179.2H384V128z" />
    </svg>
  );
}

export default SvgGallery;
