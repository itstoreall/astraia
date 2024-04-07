const PublishIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    // width='96'
    // height='96'
    viewBox='0 0 24 24'
  >
    <g
      // fill='none'
      // stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <g strokeWidth='2'>
        <path
          strokeDasharray='66'
          strokeDashoffset='66'
          d='M12 3H19V21H5V3H12Z'
        >
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.9s'
            values='66;0'
          />
        </path>
        <path strokeDasharray='10' strokeDashoffset='10' d='M9 13L11 15L15 11'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='1.5s'
            dur='0.3s'
            values='10;0'
          />
        </path>
      </g>
      <path
        strokeDasharray='12'
        strokeDashoffset='12'
        d='M14.5 3.5V6.5H9.5V3.5'
      >
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='1.05s'
          dur='0.3s'
          values='12;0'
        />
      </path>
    </g>
  </svg>
);

export default PublishIcon;
