import { Box } from '@mui/material';
import React from 'react';

function Video() {
  return (
    <Box sx={{ height: '400px' }}>
      <Box sx={{ position: 'static' }}>
        <video style={{ height: '600px', width: '100%' }} autoPlay muted loop preload="auto" className="full-screen__video">
          <source type="video/webm" src="/Pexels Videos 2078401.mp4" />

        </video>
      </Box>
    </Box>
  );
}

export default Video;
