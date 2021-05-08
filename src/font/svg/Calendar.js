import * as React from "react";

function SvgCalendar(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M465.5 58.2h-69.8V11.6h-46.5v139.6h46.5v-46.5h69.8v349.1h-419V104.7H93V58.2H46.5C20.9 58.2 0 79 0 104.7v349.1c0 25.7 20.9 46.5 46.5 46.5h418.9c25.7 0 46.5-20.9 46.5-46.5V104.7c.1-25.7-20.8-46.5-46.4-46.5z" />
      <path d="M162.9 104.7h162.9V58.2H162.9V11.6h-46.5v139.6h46.5v-46.5zM98.1 206.8h93.1v93.1H98.1v-93.1zM219.5 206.8h93.1v93.1h-93.1v-93.1zM340.8 206.8h93.1v93.1h-93.1v-93.1zM98.1 328.2h93.1v93.1H98.1v-93.1zM219.5 328.2h93.1v93.1h-93.1v-93.1z" />
    </svg>
  );
}

export default SvgCalendar;
