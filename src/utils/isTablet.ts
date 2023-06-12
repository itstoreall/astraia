const isTablet = () =>
  typeof window !== 'undefined' ? window.innerWidth > 767 : false;

export default isTablet;

/*
const isPortrait = () => {
  if (typeof window !== 'undefined') {
    return window.innerHeight > window.innerWidth;
  }

  return false;
};

export default isPortrait;
*/
