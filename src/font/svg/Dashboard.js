import * as React from "react";

function SvgDashboard(props) {
  return (
    <svg
      id="dashboard_svg__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <style>{".dashboard_svg__st0{fill:#050606}"}</style>
      <path
        className="dashboard_svg__st0"
        d="M256 .4C114.6.4 0 115 0 256.4s114.6 256 256 256 256-114.6 256-256S397.6.4 256 .4zm0 449.2c-106.5 0-193-86.5-193-193.2s86.5-193 193-193 193 86.5 193 193-86.2 193.2-193 193.2z"
      />
      <circle className="dashboard_svg__st0" cx={256} cy={256.4} r={58.5} />
      <path
        d="M285 183.3c22.3 6.5 39.7 24.5 45.3 47.1l48.4-85.3-93.7 38.2z"
        fill="#070808"
      />
    </svg>
  );
}

export default SvgDashboard;
