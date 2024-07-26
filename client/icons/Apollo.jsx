import * as React from "react";
const ApolloIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 48 48"
    {...props}
  >
    <linearGradient
      id="a"
      x1={16.078}
      x2={31.203}
      y1={2.441}
      y2={43.997}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#3940a4" />
      <stop offset={1} stopColor="#293091" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M24 44C12.972 44 4 35.028 4 24S12.972 4 24 4a19.923 19.923 0 0 1 13.741 5.467 1 1 0 0 1-1.375 1.454A17.924 17.924 0 0 0 24 6C14.075 6 6 14.075 6 24s8.075 18 18 18 18-8.075 18-18a18.05 18.05 0 0 0-.453-4.031 1 1 0 1 1 1.949-.447C43.83 20.98 44 22.487 44 24c0 11.028-8.972 20-20 20z"
    />
    <linearGradient
      id="b"
      x1={33.317}
      x2={48.444}
      y1={-1.866}
      y2={39.695}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#3940a4" />
      <stop offset={1} stopColor="#293091" />
    </linearGradient>
    <circle cx={38} cy={11} r={3} fill="url(#b)" />
    <linearGradient
      id="c"
      x1={13.129}
      x2={27.57}
      y1={4.122}
      y2={43.797}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#3940a4" />
      <stop offset={1} stopColor="#293091" />
    </linearGradient>
    <path fill="url(#c)" d="M25 14h-4l-6 18h4z" />
    <linearGradient
      id="d"
      x1={19.965}
      x2={35.446}
      y1={0.923}
      y2={43.459}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#3940a4" />
      <stop offset={1} stopColor="#293091" />
    </linearGradient>
    <path fill="url(#d)" d="M23 14h4l6 18h-4z" />
    <linearGradient
      id="e"
      x1={12.391}
      x2={29.141}
      y1={0.6}
      y2={46.621}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#3940a4" />
      <stop offset={1} stopColor="#293091" />
    </linearGradient>
    <path fill="url(#e)" d="M26 29h-7v-4h6z" />
  </svg>
);
export default ApolloIcon;
