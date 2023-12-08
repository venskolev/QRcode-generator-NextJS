import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/system';

const LoaderWrapper = styled('div')(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2001,
  width: '100%',
  height: '5px',
  '& .MuiLinearProgress-bar': {
    transition: 'width 2s ease-out',
  },
  marginTop: "65px"
}));
// eslint-disable-next-line react/display-name
const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 5000); // 5000 милисекунди (5 секунди)

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <LoaderWrapper>
      <LinearProgress variant="determinate" value={progress} />
    </LoaderWrapper>
  );
}

export default Loader;