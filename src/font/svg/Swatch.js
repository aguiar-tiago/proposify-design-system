import * as React from "react";

function SvgSwatch(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M481 133c-.4-13.1-5.8-25.2-15.3-34.2l-56.4-53.4c-18.9-17.9-51.5-16.9-69.2 1.9L269.5 122v71.3L375.6 81l56.4 53.4-162.6 172v71.3l198.2-209.6c9-9.4 13.8-21.9 13.4-35.1zM195.9 11.1H49c-27 0-49 22-49 49v391.8c0 27 22 49 49 49h146.9c27 0 49-22 49-49V60.1c0-27-22-49-49-49zM49 451.9V60.1h146.9v391.8H49z" />
      <path d="M78.5 115.1h98v98h-98v-98zM78.5 268h98v98h-98v-98zM139.8 385.6c9.6 9.6 9.6 25.1 0 34.6-9.6 9.6-25.1 9.6-34.6 0-9.6-9.6-9.6-25.1 0-34.6 9.5-9.5 25-9.5 34.6 0M511.7 401.6l-8.9-77.2c-1.5-12.8-8.1-24.7-18.2-32.8-10.3-8.1-23-11.8-36-10.3l-57.5 6.6 5.6 48.7 57.4-6.6 8.9 77.2-193.6 22.2v49.3l199.2-22.9c13-1.5 24.6-7.9 32.8-18.2 8.1-10.1 11.8-23 10.3-36z" />
    </svg>
  );
}

export default SvgSwatch;
