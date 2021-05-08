import * as React from "react";

function SvgGrid(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M347.8 41.9h122.4v122.7H347.8zM347.8 195.2h122.4v122.7H347.8zM347.8 348.5h122.4v122.7H347.8zM194.9 41.9h122.4v122.7H194.9zM194.9 195.2h122.4v122.7H194.9zM194.9 348.5h122.4v122.7H194.9zM41.7 41.9h122.4v122.7H41.7zM41.7 195.2h122.4v122.7H41.7zM41.7 348.5h122.4v122.7H41.7z" />
      <path d="M0 0v512h512V0H0zm490.3 490.2H21.7V21.8h468.5v468.3h.1z" />
    </svg>
  );
}

export default SvgGrid;
