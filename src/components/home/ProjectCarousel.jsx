import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default function ProjectCarousel({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!slides.length) return null;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const currentSlide = slides[activeIndex];

  return (
    <Box 
      id="ProjectCarousel"
      className="carousel slide"
      sx={{
        background: '#000000',
        color: 'white',
        position: 'relative',
        minHeight: '27rem',
        backgroundSize: 'cover !important',
        '& a': {
          color: 'white',
          textDecoration: 'none !important',
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        {slides.length > 1 && (
          <Box className="carousel-indicators" sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
            {slides.map((_, index) => (
              <Button
                key={index}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => goToSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: 0,
                  backgroundColor: index === activeIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  margin: '0 4px',
                  minWidth: 'auto',
                  padding: 0,
                  '&:hover': {
                    backgroundColor: 'white'
                  }
                }}
              />
            ))}
          </Box>
        )}
        
        <Box className="carousel-inner">
          <Box 
            className="carousel-item active"
            sx={{
              background: currentSlide.background_image ? 
                `rgba(0,0,0,0) url(${currentSlide.background_image?.src}) no-repeat center` : 
                'rgba(0,0,0,0)',
              backgroundSize: 'cover',
              py: 6
            }}
          >
            <Container>
              <Grid container spacing={4} alignItems="center" sx={{ mt: 5, mb: 5 }}>
                <Grid item xs={12} lg={8} order={{ xs: 2, lg: 2 }}>
                  {currentSlide.image && (
                    <Link to={currentSlide.href || '#'}>
                      <img 
                        src={currentSlide.image.src} 
                        alt=""
                        style={{ 
                          height: currentSlide.image.height || '300px',
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto'
                        }}
                        role="presentation"
                      />
                    </Link>
                  )}
                </Grid>
                <Grid item xs={12} lg={4} order={{ xs: 1, lg: 1 }}>
                  <Link to={currentSlide.href || '#'}>
                    <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', lg: '2.5rem' } }}>
                      {currentSlide.title}
                    </Typography>
                    <Typography sx={{ mb: 3, fontSize: '1.1rem' }}>
                      {currentSlide.intro}
                    </Typography>
                  </Link>
                  
                  {currentSlide.call_to_action && (
                    <Box>
                      <Button
                        component={Link}
                        to={currentSlide.call_to_action.href}
                        variant="outlined"
                        className="app-button"
                        sx={{
                          color: 'white',
                          borderColor: 'white',
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderColor: 'white'
                          }
                        }}
                      >
                        {currentSlide.call_to_action.text}
                      </Button>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>

        {slides.length > 1 && (
          <>
            <IconButton
              onClick={prevSlide}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)'
                }
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={nextSlide}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)'
                }
              }}
            >
              <ChevronRight />
            </IconButton>
          </>
        )}
      </Container>
    </Box>
  );
}
