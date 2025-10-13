import React from 'react';
import { Box, Container, Typography, Link, useTheme } from '@mui/material';

export default function SponsorsBlock({ supporters = [] }) {
  const theme = useTheme();
  const sponsors = supporters.filter(s => s.logo);
  const otherSupporters = supporters.filter(s => !s.logo);

  const getLogoPath = (sponsor) => {
    const logoName = sponsor.logo;
    
    if (logoName === 'cloudbees.svg') {
      return `/images/sponsors/${logoName}`;
    }
    
    if (logoName === 'github.svg' || logoName === 'github.png') {
      return `/images/sponsors/github.svg`;
    }
    
    return `/images/sponsors/${logoName}`;
  };

  return (
    <Box className="sponsorblock-wrapper" sx={{ 
      background: 'color-mix(in hsl, var(--text-color), transparent 95%)',
      py: 8
    }}>
      <Container>
        <Box id="sponsorsblock" className="section">
          <Box className="sponsors" sx={{ mb: 6 }}>
            <Typography 
              sx={{ 
                fontWeight: 500, 
                mb: 4,
                textAlign: 'center'
              }}
            >
              We thank the following organizations for their major commitments to
              support the Jenkins project.
            </Typography>
            <Box 
              component="ul"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 10,
                listStyleType: 'none',
                padding: 0,
                textAlign: 'center',
                margin: 0
              }}
            >
              {sponsors.map((sponsor, index) => (
                <Box 
                  component="li" 
                  key={index} 
                  sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Link 
                    href={sponsor.url} 
                    target="_blank" 
                    rel="noreferrer noopener"
                    sx={{
                      transition: '0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': {
                        opacity: 0.75
                      },
                      '&:active': {
                        opacity: 0.5,
                        transform: 'scale(0.9)'
                      }
                    }}
                  >
                    {sponsor.logo && (
                      <img 
                        src={getLogoPath(sponsor)}
                        alt={sponsor.name}
                        style={{ 
                          width: '120px', 
                          height: '100px',
                          objectFit: 'contain',
                          filter: sponsor.logo === 'cloudbees.svg' && theme.palette.mode === 'dark' 
                            ? 'invert(1) brightness(2)' 
                            : 'none'
                        }}
                        onError={(e) => {
                          if (sponsor.logo === 'github.svg') {
                            e.target.src = '/images/sponsors/github.png';
                          }
                        }}
                      />
                    )}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          <Box className="supporters">
            <Typography 
              sx={{ 
                fontWeight: 500, 
                mb: 4,
                textAlign: 'center'
              }}
            >
              We thank the following organizations for their support of the Jenkins
              project through free and/or open source licensing programs.
            </Typography>
            <Box 
              component="ul"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                listStyleType: 'none',
                textAlign: 'center',
                margin: 0,
                gap: 3,
                padding: 0
              }}
            >
              {otherSupporters.map((supporter, index) => (
                <Box component="li" key={index} sx={{ display: 'contents' }}>
                  <Link 
                    href={supporter.url} 
                    target="_blank" 
                    rel="noreferrer noopener"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {supporter.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
