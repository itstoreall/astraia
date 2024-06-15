'use client';

const ErrorWrapper = ({ error }: { error: Error }) => {
  return (
    <main>
      <h2>{`Oops!!!: ${error.message}`}</h2>
    </main>
  );
};

export default ErrorWrapper;
