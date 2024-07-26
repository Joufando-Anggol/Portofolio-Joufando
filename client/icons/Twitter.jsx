import * as React from "react";

const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#000" rx={60} />
    <path
      fill="#FFF"
      d="M99.645 128L55.537 83.893c-4.686-4.686-4.686-12.284 0-16.971 4.686-4.686 12.284-4.686 16.971 0L128 111.029l55.492-55.107c4.686-4.686 12.284-4.686 16.971 0 4.686 4.686 4.686 12.284 0 16.971L156.355 128l55.107 55.492c4.686 4.686 4.686 12.284 0 16.971-4.686 4.686-12.284 4.686-16.971 0L128 144.971l-55.492 55.107c-4.686 4.686-12.284 4.686-16.971 0-4.686-4.686-4.686-12.284 0-16.971L99.645 128z"
    />
  </svg>
);

export default XIcon;