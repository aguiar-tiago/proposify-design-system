import * as React from "react";

function SvgSection(props) {
  return (
    <svg
      id="section_svg__Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <style>{".section_svg__st0{fill:#161616}"}</style>
      <path
        className="section_svg__st0"
        d="M460.6-.2H51C22.7-.2-.2 22.8-.2 51v128c0 28.2 22.9 51.2 51.2 51.2h409.6c28.3 0 51.2-23 51.2-51.2V51c0-28.2-22.9-51.2-51.2-51.2zm-.4 178.9H51.5V51.4h408.7v127.3zM460.6 281.6H51c-28.3 0-51.2 23-51.2 51.2v128C-.2 489 22.7 512 51 512h409.6c28.3 0 51.2-23 51.2-51.2v-128c0-28.2-22.9-51.2-51.2-51.2zm-.4 178.9H51.5V333.1h408.7v127.4z"
      />
    </svg>
  );
}

export default SvgSection;
