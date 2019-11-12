import React from "react";

function Logo() {
  return (
    <div style={{ margin: "-0.5rem 0", fontSize: "2em" }}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="160" height="160" fill="#F1F529" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 20H30H38H41H48L78.6 122H80.4L111 20H119H122H130H140V122V140H122H94H84H75H66H38H20V122V20ZM120.1 53L99.4 122H122V53H120.1ZM38 122V53H39.9L60.6 122H38Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default Logo;
