import * as React from "react";

function SvgBlog(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M0 32h512v448H0V32zm32 32v384h448V64H32zm64 64h160v128H96V128zm192 32h128v32H288v-32zm0 64h128v32H288v-32zM96 288h320v32H96v-32zm0 64h320v32H96v-32z" />
    </svg>
  );
}

export default SvgBlog;
