import * as React from "react";

function SvgTag(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M503.7 40.1c0-18.6-16.4-35-35-35L338.9 1c-18.6 0-43.3 10.3-57.7 22.7l-272 272c-12.4 12.4-12.4 35 0 47.4l158.7 158.7c12.4 12.4 35 12.4 47.4 0l274-274c12.4-12.4 22.7-39.1 22.7-57.7l-8.3-130zm-51.4 68c-14.4 14.4-35 14.4-49.4 0-14.4-14.4-14.4-35 0-49.4 14.4-14.4 35-14.4 49.4 0 12.3 14.4 12.3 35 0 49.4z" />
    </svg>
  );
}

export default SvgTag;
