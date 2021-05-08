import * as React from "react";

function SvgRoller(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M448 76.8h-51.2V51.2c0-28.2-23-51.2-51.2-51.2H64C35.8 0 12.8 23 12.8 51.2v102.4c0 28.2 23 51.2 51.2 51.2h281.6c28.2 0 51.2-23 51.2-51.2V128H448v102.4H217.6c-28.2 0-51.2 23-51.2 51.2v51.2h-25.6v128c0 28.2 23 51.2 51.2 51.2s51.2-23 51.2-51.2v-128h-25.6v-51.2H448c28.2 0 51.2-23 51.2-51.2V128c0-28.2-23-51.2-51.2-51.2zM64 153.6V51.2h281.6v102.4H64z" />
    </svg>
  );
}

export default SvgRoller;
