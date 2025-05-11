import React from "react";

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="#E94343"
    />
    <path
      d="M15 8H13V13.17L16.59 16.76L18 15.34L15 12.34V8Z"
      fill="#E94343"
    />
  </svg>
);

export const ParticleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="10" r="8" fill="#E94343" fillOpacity="0.2" />
    <circle cx="10" cy="10" r="4" fill="#E94343" />
  </svg>
);

export const WavePattern: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="1440"
    height="320"
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 96L48 112C96 128 192 160 288 165.3C384 171 480 149 576 149.3C672 149 768 171 864 170.7C960 171 1056 149 1152 133.3C1248 117 1344 107 1392 101.3L1440 96V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V96Z"
      fill="#E94343"
      fillOpacity="0.05"
    />
  </svg>
);

export const Blob: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="600"
    height="600"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M477.6 144.5C513.4 187.7 550.4 230.1 554.2 278.2C558 326.4 528.6 380.1 486.8 421.5C445 462.9 390.9 492 335.7 505.8C280.5 519.5 224.2 518 175.5 495.1C126.8 472.2 85.5 428 60.9 373.4C36.3 318.9 28.3 254.1 53.6 201.8C78.8 149.5 137.3 109.9 201.3 83.5C265.2 57.1 334.6 44.1 389.5 61.3C444.4 78.5 484.9 125.9 477.6 144.5Z"
      fill="#E94343"
      fillOpacity="0.1"
    />
  </svg>
);
