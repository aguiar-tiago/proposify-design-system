import * as React from "react";

function SvgMailbox(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M365.1 54.7H201.2V0h-54.8v36.6H183v127.9h-18.9V54.7h-17.2c-50.8 0-92 41.2-92 92v127.5H457V146.6c.1-50.8-41.1-91.9-91.9-91.9zM438.7 256h-146V145.7c0-40.3 32.7-73 73-73s73 32.7 73 73V256z" />
      <path d="M420.8 146.2v91.5H311v-91.5c0-30.3 24.6-54.9 54.9-54.9 30.3 0 54.9 24.6 54.9 54.9zM110.1 512v-18.3H165s12.6-41.9-36.8-73.2c0 0 58.5 5.7 73.2 73.2 0 0 13-75.5-54.8-128 0 0 77.8 26.9 91.3 127.9V292.5h37v201.1c13.5-100.9 91.3-127.9 91.3-127.9-67.8 52.5-54.8 128-54.8 128 14.7-67.5 73.2-73.2 73.2-73.2-49.4 31.3-36.8 73.2-36.8 73.2h54.9V512" />
    </svg>
  );
}

export default SvgMailbox;
