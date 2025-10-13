import React from 'react';
import { Box, Typography } from '@mui/material';

export default function BlogCardList({ posts = [] }) {
  // This will be properly implemented after the blog PR is merged
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Blog card list component will be implemented after blog system integration.
      </Typography>
    </Box>
  );
}
