const SaveIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      // width='40'
      // height='40'
      viewBox='0 0 24 24'
    >
      <g
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <path
          fill='none'
          strokeDasharray='14'
          strokeDashoffset='14'
          d='M6 19h12'
        >
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.6s'
            values='14;0'
          />
        </path>
        <path
          fill='currentColor'
          d='M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5'
        >
          <animate
            attributeName='d'
            calcMode='linear'
            dur='2.25s'
            keyTimes='0;0.7;1'
            repeatCount='indefinite'
            values='M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5'
          />
        </path>
      </g>
    </svg>
  );
};

export default SaveIcon;
