const Loading = () => {
  const inlineStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '65vh',

    '@media screen and (minWidth: 960px)': {
      height: '75vh'
    }
  };

  return <div style={inlineStyle}>Loading...</div>;
};

export default Loading;
