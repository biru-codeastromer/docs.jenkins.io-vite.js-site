import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function BlogsSection() {
  return (
    <Container sx={{ py: 8 }}>
      <Box className="section">
        <Typography variant="h2" sx={{ mb: 4 }}>
          Recent posts
        </Typography>
        
        {/* Placeholder until blog system is implemented */}
        <Box sx={{ 
          textAlign: 'center', 
          py: 6,
          border: '2px dashed',
          borderColor: 'divider',
          borderRadius: 2
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Blog posts coming soon
          </Typography>
          <Typography sx={{ mb: 3, color: 'text.secondary' }}>
            The blog system is currently being integrated. Recent posts will appear here once available.
          </Typography>
          <Button 
            component={Link}
            to="/blog"
            variant="outlined"
            className="app-button"
          >
            Visit Blog
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
