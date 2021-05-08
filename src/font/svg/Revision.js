import * as React from "react";

function SvgRevision(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M128 96h352v416H128V96zm48 48v320h256V144H176z" />
      <path d="M384 96V0H32v416h96v-48H80V48h256v48h48z" />
    </svg>
  );
}

export default SvgRevision;
