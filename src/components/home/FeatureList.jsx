import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const features = [
  {
    icon: 'git-pull-request-outline',
    title: 'Continuous Integration and Continuous Delivery',
    description: 'As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.',
    className: 'cicd'
  },
  {
    icon: 'download-outline',
    title: 'Easy installation',
    description: 'Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems.',
    className: 'install'
  },
  {
    icon: 'options-outline',
    title: 'Easy configuration',
    description: 'Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help.',
    className: 'settings'
  },
  {
    icon: 'apps-outline',
    title: 'Plugins',
    description: 'With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain.',
    className: 'ecosystem'
  },
  {
    icon: 'extension-puzzle-outline',
    title: 'Extensible',
    description: 'Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do.',
    className: 'extend'
  },
  {
    icon: 'git-network-outline',
    title: 'Distributed',
    description: 'Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster.',
    className: 'distributed'
  }
];

export default function FeatureList() {
  return (
    <Box id="feature-list-segment" className="segment" sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={3} className="chunks features uniform-height">
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Box 
                className={`box ${feature.className}`}
                sx={{
                  padding: '0.67rem 0.75rem 0 4rem',
                  position: 'relative',
                  borderRadius: '5px',
                  minHeight: { xs: '4rem', md: '10rem', lg: '12rem' },
                  mb: { xs: 2, md: 0 }
                }}
              >
                <ion-icon 
                  name={feature.icon}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    left: '0rem',
                    top: '0.75rem',
                    width: '2.25rem',
                    height: '2.25rem',
                    padding: '0.5rem',
                    lineHeight: '3.25rem',
                    backgroundColor: '#168bb9',
                    borderRadius: '50%',
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: '1.75rem'
                  }}
                />
                <Typography variant="h5" component="h5" sx={{ 
                  lineHeight: 1.3,
                  fontSize: '1.1rem',
                  mb: 1
                }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ 
                  lineHeight: 1.5,
                  fontSize: '0.8rem'
                }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
