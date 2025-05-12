import * as React from "react";
const Orbits = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="orbits" stroke="white" strokeOpacity="0.8" fill="none">
      <path
        id="firstOrbit"
        d="M199.5,150 A49.5,49.5 0 1,0 100.5,150 A49.5,49.5 0 1,0 199.5,150"
      />
      <path
        id="sndOrbit"
        d="M221.5,149.5 A72,72 0 1,0 77.5,149.5 A72,72 0 1,0 221.5,149.5"
      />
      <path
        id="trdOrbit"
        d="M244.5,150 A94.5,94.5 0 1,0 55.5,150 A94.5,94.5 0 1,0 244.5,150"
      />
      <path
        id="outerOrbit"
        d="M266.5,149.5 A117,117 0 1,0 32.5,149.5 A117,117 0 1,0 266.5,149.5"
      />
    </g>
  </svg>
);
export default Orbits;
