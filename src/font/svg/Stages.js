import * as React from "react";

function SvgStages(props) {
  return (
    <svg
      width={25}
      height={25}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path id="stages_svg__a" d="M0 0h25v18.561H0z" />
      </defs>
      <g transform="translate(0 2)" fill="none" fillRule="evenodd">
        <mask id="stages_svg__b" fill="#fff">
          <use xlinkHref="#stages_svg__a" />
        </mask>
        <path
          d="M22.685 12.223v-5.69l.004.002V0l-7.471 3.289 5.615 2.47v6.465a3.234 3.234 0 00-2.171 2.171h-3.064A3.224 3.224 0 0012.5 12.08c-1.45 0-2.695.952-3.098 2.315H6.339A3.224 3.224 0 003.24 12.08 3.244 3.244 0 000 15.321a3.245 3.245 0 003.24 3.24c1.45 0 2.696-.952 3.099-2.314h3.063a3.225 3.225 0 003.098 2.315c1.45 0 2.695-.953 3.098-2.315h3.063a3.225 3.225 0 003.098 2.315A3.245 3.245 0 0025 15.32c0-1.45-.952-2.695-2.315-3.098"
          fill="#000"
          mask="url(#stages_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgStages;
