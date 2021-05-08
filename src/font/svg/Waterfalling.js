import * as React from "react";

function SvgWaterfalling(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
      <path d="M210.5 40v122.7H40V40h170.5m28-40H12C5.4 0 0 5.4 0 12v178.7c0 6.6 5.4 12 12 12h226.5c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12zM460.5 309.2v73.1H351.3v-73.1h109.2m28-40H323.3c-6.6 0-12 5.4-12 12v129.1c0 6.6 5.4 12 12 12h165.2c6.6 0 12-5.4 12-12V281.2c0-6.6-5.4-12-12-12z" />
      <path
        d="M424.5 179c-1.6-23.2-11-45.9-28.8-63.6-31.1-31.1-77.7-37.2-115-18.4l10.6 21c28.4-14.3 63.9-9.7 87.7 14.1 13.1 13.1 20.2 29.8 21.7 46.9h-48.5l60.3 60.3 60.3-60.3h-48.3z"
        stroke="#000"
        strokeWidth={5}
        strokeMiterlimit={10}
      />
    </svg>
  );
}

export default SvgWaterfalling;
