import * as React from "react";

function SvgLink(props) {
  return (
    <svg
      id="link_svg__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 512 512.8"
      xmlSpace="preserve"
      {...props}
    >
      <style>{".link_svg__st0{fill:#010101}"}</style>
      <path
        className="link_svg__st0"
        d="M454.9 262.6c-50.3-50.3-98.8-68.5-148.4-47.3l61 61.5c14.7 4.2 29.4 13.9 44.4 28.9 38.1 38 43.1 74.3 4.9 112.5s-74.4 33.2-112.5-4.9c-16.8-16.8-27.2-33.3-30.2-49.7-19-18.9-48.5-48.3-58.9-58.5-23.2 50.5-5.2 100 46.2 151.3 68.4 68.5 133.7 77.6 202.5 8.8 68.5-68.9 59.4-134.2-9-202.6zM100.2 207.1C62.1 169 57.1 132.8 95.3 94.6s74.4-33.2 112.5 4.9c15.9 15.9 26 31.5 29.5 47.1l60.2 59.7c22.1-49.9 4-99-46.8-149.8C182.3-12 117.1-21.1 48.3 47.6c-68.8 68.8-59.7 134 8.8 202.5C108 301 156.9 319 207 296.9l-59.7-60.2c-15.6-3.6-31.2-13.7-47.1-29.6z"
      />
      <path
        className="link_svg__st0"
        d="M365.2 289.1L223.3 147.2c-5.5-1.8-11.1-2.9-16.9-2.9-18.7 0-35 9.6-43.3 17.9-13 13-23 37.2-15.2 60.1l142 142c5.5 1.8 11.1 2.9 16.9 2.9 18.7 0 35-9.6 43.3-17.9 12.8-13 23-37.2 15.1-60.2z"
      />
    </svg>
  );
}

export default SvgLink;