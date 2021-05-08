import * as React from "react";

function SvgInterfaceInformation(props) {
  return (
    <svg width={22} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="#F1AE16" fillRule="nonzero">
        <path d="M10.913 21.825C4.895 21.825 0 16.931 0 10.913 0 4.897 4.895 0 10.913 0c6.017 0 10.912 4.895 10.912 10.913 0 6.018-4.895 10.912-10.912 10.912zm0-19.642c-4.814 0-8.73 3.916-8.73 8.73 0 4.813 3.916 8.73 8.73 8.73 4.813 0 8.73-3.917 8.73-8.73 0-4.814-3.917-8.73-8.73-8.73z" />
        <path d="M12.004 14.187V9.82c0-.602-.488-1.09-1.091-1.09H8.73v2.182h1.091v3.274H7.64v2.182h6.548v-2.182h-2.183z" />
        <circle cx={10.913} cy={6.548} r={1.364} />
      </g>
    </svg>
  );
}

export default SvgInterfaceInformation;
