import React from 'react';
import { Box, Container } from '@mui/material';

export default function VideoSection() {
  const videoId = React.useId().replace(/:/g, '');

  return (
    <Container sx={{ py: 8 }}>
      <Box className="section">
        <Box 
          className={`video video_${videoId}`}
          sx={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            '& iframe': {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }
          }}
        >
          <iframe 
            src="https://www.youtube.com/embed/_MXtbjwsz3A" 
            width="1261" 
            height="621" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Jenkins Introduction Video"
          />
        </Box>
      </Box>
    </Container>
  );
}
