import React from "react";

const Mail: React.FC = () => {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=deviesleyferreira@gmail.com"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Gmail (opens in a new tab)"
      title="Gmail"
    >
      {/* <svg viewBox="0,0,262,262" width="32px" height="30px">
        <g fill="#94a3b8">
          <g transform="scale(4,4)">
            <path d="M47,34.837v17.163h7.533c1.915,0 3.467,-1.552 3.467,-3.467v-19.047zM47,32l11,-7.333v-5.426c0,-1.914 -0.812,-3.781 -2.325,-4.953c-2.336,-1.809 -5.515,-1.673 -7.665,0.151l-1.01,0.793zM19.814,33.822l12.186,7.178l12.349,-7.274l-0.906,-15.703l-11.443,8.977l-11.282,-8.851zM17.153,32.102v-16.75l-1.163,-0.912c-2.15,-1.823 -5.329,-1.961 -7.664,-0.151c-1.514,1.171 -2.326,3.039 -2.326,4.954v5.424zM6,29.486v19.047c0,1.915 1.552,3.467 3.467,3.467h7.533v-17.163z"></path>
          </g>
        </g>
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="rgb(148, 163, 184)"
      >
        <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
      </svg>
    </a>
  );
};

export default Mail;
