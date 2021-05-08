import * as React from "react";

function SvgComment(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M102.4 512V409.6H51.2C23 409.6 0 386.6 0 358.4V51.2C0 22.9 23 0 51.2 0h409.6C489 0 512 22.9 512 51.2v307.2c0 28.2-23 51.2-51.2 51.2H238.9L102.4 512zM51.2 51.2v307.2h102.4v51.2l68.3-51.2h238.9V51.2H51.2z" />
      <path d="M108.398 108.4h307.2v51.2h-307.2v-51.2zM108.398 188.2h307.2v51.2h-307.2v-51.2zM102.4 256h204.8v51.2H102.4V256z" />
    </svg>
  );
}

export default SvgComment;
