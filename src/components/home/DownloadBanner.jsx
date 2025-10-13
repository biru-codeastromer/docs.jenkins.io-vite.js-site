import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DownloadBanner() {
  return (
    <Box 
      className="banner-container"
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.default',
        py: 6
      }}
    >
      <Box 
        className="skew"
        sx={{
          position: 'absolute',
          left: 0,
          top: -100,
          width: '100%',
          height: 600,
          backgroundColor: 'text.primary',
          opacity: 0.025,
          zIndex: -1,
          transform: 'skewY(-14deg)',
          backfaceVisibility: 'hidden',
          '@media (min-width: 767px)': {
            top: -350,
            height: 900,
          },
          '@media (min-width: 992px)': {
            top: -350,
            height: 1020,
          }
        }}
      />
      
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={1} lg={2} />
          
          <Grid item xs={12} md={5} lg={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <img 
              src="/images/logos/jenkins/jenkins.svg" 
              alt="Jenkins" 
              style={{ width: '256px', maxWidth: '100%' }}
            />
          </Grid>
          
          <Grid item xs={12} md={5} lg={4}>
            <Typography 
              variant="h1" 
              className="page-title"
              sx={{ 
                fontSize: { xs: '3rem', md: '4rem' },
                mb: 2
              }}
            >
              Jenkins
            </Typography>
            <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', mb: 2 }}>
              Build great things at any scale
            </Typography>
            <Typography sx={{ mb: 3, fontSize: '1.1rem' }}>
              The leading open source automation server, Jenkins provides
              hundreds of plugins to support building, deploying and automating
              any project.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button 
                component={Link}
                to="/download"
                variant="contained" 
                size="large"
                className="app-button app-button--primary"
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'none'
                  }
                }}
              >
                Download
              </Button>
              <Button 
                component={Link}
                to="/doc"
                variant="outlined" 
                size="large"
                className="app-button"
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'none'
                  }
                }}
              >
                Documentation
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={1} lg={2} />
        </Grid>
      </Container>
    </Box>
  );
}