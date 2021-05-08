import * as React from "react";

function SvgReplace(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M102.4 128h102.4v76.8l102.4-102.4L204.8 0v76.8H102.4c-28.3 0-51.2 23-51.2 51.2v256c0 28.2 22.9 51.2 51.2 51.2h51.2V384h-51.2V128zM409.6 76.8h-51.2V128h51.2v256H307.2v-76.8L204.8 409.6 307.2 512v-76.8h102.4c28.3 0 51.2-23 51.2-51.2V128c0-28.2-22.9-51.2-51.2-51.2z" />
    </svg>
  );
}

export default SvgReplace;
