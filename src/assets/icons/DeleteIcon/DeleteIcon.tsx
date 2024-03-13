const DeleteIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    // width='40'
    // height='40'
    viewBox='0 0 24 24'
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeDasharray='16'
      strokeDashoffset='16'
      strokeLinecap='round'
      strokeWidth='2'
    >
      <path d='M7 7L17 17'>
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          dur='0.6s'
          values='16;0'
        />
      </path>
      <path d='M17 7L7 17'>
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='0.6s'
          dur='0.6s'
          values='16;0'
        />
      </path>
    </g>
  </svg>
);

export default DeleteIcon;
