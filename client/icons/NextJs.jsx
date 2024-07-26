import * as React from "react";
const NextJsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 64 64"
    {...props}
  >
    <linearGradient
      id="a"
      x1={32}
      x2={32}
      y1={54}
      y2={10}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#e6abff" />
      <stop offset={1} stopColor="#6dc7ff" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M54 32c0 5.75-2.2 10.98-5.8 14.9l-.171.187L43 40.646V21h-7v10.686L27.663 21H21v22h7V32.59l14.66 18.66A21.898 21.898 0 0 1 32 54c-12.15 0-22-9.85-22-22s9.85-22 22-22 22 9.85 22 22z"
    />
    <linearGradient
      id="b"
      x1={32}
      x2={32}
      y1={58}
      y2={6}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#c822ff" />
      <stop offset={1} stopColor="#1a6dff" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M32 58C17.663 58 6 46.336 6 32S17.663 6 32 6s26 11.664 26 26-11.663 26-26 26zm0-50C18.767 8 8 18.767 8 32s10.767 24 24 24 24-10.767 24-24S45.233 8 32 8zm9 33.336V23h-3v14.496L26.683 23H23v18h3V26.81L44.37 50.2a22.533 22.533 0 0 0 2.212-1.714L41 41.336z"
    />
  </svg>
);
export default NextJsIcon;
