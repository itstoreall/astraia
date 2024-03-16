const MDSimulatorIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    // width='96'
    // height='96'
    viewBox='0 0 24 24'
  >
    <g
      fill='none'
      // stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        strokeDasharray='64'
        strokeDashoffset='64'
        strokeWidth='2'
        d='M13 3L19 9V21H5V3H13'
      >
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          dur='0.9s'
          values='64;0'
        />
      </path>
      <path strokeDasharray='14' strokeDashoffset='14' d='M12.5 3V8.5H19'>
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='1.05s'
          dur='0.3s'
          values='14;0'
        />
      </path>
      <g strokeDasharray='8' strokeDashoffset='8' strokeWidth='2'>
        <path d='M10 13L8 15L10 17'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='1.5s'
            dur='0.3s'
            values='8;0'
          />
        </path>
        <path d='M14 13L16 15L14 17'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='1.8s'
            dur='0.3s'
            values='8;0'
          />
        </path>
      </g>
    </g>
  </svg>
);

export default MDSimulatorIcon;
