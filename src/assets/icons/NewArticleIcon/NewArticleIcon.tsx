const NewArticleIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='35'
      height='35'
      viewBox='0 0 24 24'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <g strokeWidth='2'>
          <path strokeDasharray='16' strokeDashoffset='16' d='M12 3H19V11'>
            <animate
              fill='freeze'
              attributeName='stroke-dashoffset'
              dur='0.3s'
              values='16;0'
            />
          </path>
          <path strokeDasharray='44' strokeDashoffset='44' d='M19 17V21H5V3H12'>
            <animate
              fill='freeze'
              attributeName='stroke-dashoffset'
              begin='0.3s'
              dur='0.6s'
              values='44;0'
            />
          </path>
          <path strokeDasharray='10' strokeDashoffset='10' d='M21 14H12.5'>
            <animate
              fill='freeze'
              attributeName='stroke-dashoffset'
              begin='1.5s'
              dur='0.3s'
              values='10;0'
            />
          </path>
          <path
            strokeDasharray='6'
            strokeDashoffset='6'
            d='M12 14L15 17M12 14L15 11'
          >
            <animate
              fill='freeze'
              attributeName='stroke-dashoffset'
              begin='1.8s'
              dur='0.3s'
              values='6;0'
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
};

export default NewArticleIcon;
