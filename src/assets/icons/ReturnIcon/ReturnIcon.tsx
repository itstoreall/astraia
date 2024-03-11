const ReturnIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 24 24'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <path
          strokeDasharray='24'
          strokeDashoffset='24'
          d='M16 19V11C16 10.4477 15.5523 10 15 10H4'
        >
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.6s'
            values='24;0'
          />
        </path>
        <path
          strokeDasharray='6'
          strokeDashoffset='6'
          d='M4 10l3 -3M4 10l3 3'
          opacity='0'
        >
          <set attributeName='opacity' begin='0.6s' to='1' />
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.6s'
            dur='0.3s'
            values='6;0'
          />
        </path>
      </g>
    </svg>
  );
};

export default ReturnIcon;
