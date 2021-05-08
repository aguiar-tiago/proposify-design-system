import * as React from "react";

function SvgArchive(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M460.8 25.6H51.2C22.9 25.6 0 48.6 0 76.8v76.8c0 14.1 11.4 25.6 25.6 25.6v256c0 28.2 22.9 51.2 51.2 51.2h358.4c28.3 0 51.2-23 51.2-51.2v-256c14.2 0 25.6-11.5 25.6-25.6V76.8c0-28.2-22.9-51.2-51.2-51.2zm0 51.2V128H51.2V76.8h409.6zm-25.6 358.4H76.8v-256h358.4v256z" />
      <path d="M179.2 204.8h153.6v76.8H179.2v-76.8z" />
    </svg>
  );
}

export default SvgArchive;
