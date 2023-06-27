const Arrow = ({ fill, direction }: { fill: string; direction: string }) => (
  <>
    {direction === 'up' ? (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill={fill}
      >
        <path d='M7.406 15.422 6 14.016l6-6 6 6-1.406 1.406L12 10.828z' />
      </svg>
    ) : (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill={fill}
      >
        <path d='M7.406 8.578 12 13.172l4.594-4.594L18 9.984l-6 6-6-6z' />
      </svg>
    )}
  </>
);

export default Arrow;
