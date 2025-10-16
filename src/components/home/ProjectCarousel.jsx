import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default function ProjectCarousel({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselId] = useState(() => Math.floor(Math.random() * 1000));

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slides.length]);

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

  const normalizeSlide = (slide) => {
    if (!slide) return null;
    
    return {
      href: slide[':href'] || slide.href,
      title: slide[':title'] || slide.title,
      intro: slide[':intro'] || slide.intro,
      image: slide[':image'] || slide.image,
      background: slide[':background'] || slide.background,
      background_image: slide[':background_image'] || slide.background_image,
      call_to_action: slide[':call_to_action'] || slide.call_to_action
    };
  };

  const normalizedSlides = slides.map(normalizeSlide);

  const carouselBackground = "#000000";
  const carouselBackgroundImage = "/images/cdf/cdf-background-wide.jpg";

  return (
    <Box 
      id={`ProjectCarousel_${carouselId}`}
      className={`carousel slide carousel_${carouselId}`}
      sx={{
        '--color': 'white',
        background: `${carouselBackground} url(${carouselBackgroundImage}) no-repeat center`,
        backgroundSize: 'cover !important',
        color: 'white',
        position: 'relative',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        '& a': {
          color: 'var(--color)',
          textDecoration: 'none !important',
        },
        '& img': {
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        {/* Carousel Indicators */}
        {normalizedSlides.length > 1 && (
          <Box className="carousel-indicators" sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            zIndex: 2
          }}>
            {normalizedSlides.map((_, index) => (
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
        
        {/* Carousel Items */}
        <Box className={`carousel-inner carousel_${carouselId}`}>
          {normalizedSlides.map((slide, index) => {
            const normalizedSlide = normalizeSlide(slide);
            if (!normalizedSlide) return null;
            
            return (
              <Box
                key={index}
                className={`carousel-item carousel_${carouselId} ${index === activeIndex ? 'active' : ''}`}
                sx={{
                  display: index === activeIndex ? 'block' : 'none',
                  height: '500px',
                  py: 4
                }}
              >
                <Container sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                  <Grid container spacing={4} alignItems="center" sx={{ height: '100%' }}>
                    <Grid item xs={12} lg={8} sx={{ 
                      order: { xs: 2, lg: 2 },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: { xs: 'auto', lg: '100%' }
                    }}>
                      {normalizedSlide.image && (
                        <Box sx={{ 
                          textAlign: 'center',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Link to={normalizedSlide.href || '#'}>
                            <img 
                              src={normalizedSlide.image.src} 
                              alt=""
                              style={{ 
                                height: normalizedSlide.image.height || '300px',
                                maxWidth: '100%',
                                maxHeight: '350px',
                                objectFit: 'contain'
                              }}
                              role="presentation"
                            />
                          </Link>
                        </Box>
                      )}
                    </Grid>
                    
                    <Grid item xs={12} lg={4} sx={{ 
                      order: { xs: 1, lg: 1 },
                      height: { xs: 'auto', lg: '100%' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Box>
                        <Link to={normalizedSlide.href || '#'}>
                          <Typography 
                            variant="h2" 
                            sx={{ 
                              mb: 2, 
                              fontSize: { xs: '1.75rem', md: '2.25rem', lg: '2.5rem' },
                              fontWeight: 'bold',
                              lineHeight: 1.2
                            }}
                          >
                            {normalizedSlide.title}
                          </Typography>
                          <Typography sx={{ 
                            mb: 3, 
                            fontSize: '1.1rem',
                            lineHeight: 1.6
                          }}>
                            {normalizedSlide.intro}
                          </Typography>
                        </Link>
                        
                        {normalizedSlide.call_to_action && (
                          <Box sx={{ mt: 3 }}>
                            <Button
                              component={Link}
                              to={normalizedSlide.call_to_action.href}
                              variant="outlined"
                              className="app-button"
                              sx={{
                                color: 'white',
                                borderColor: 'white',
                                backdropFilter: 'blur(10px)',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                fontSize: '1rem',
                                padding: '10px 20px',
                                '&:hover': {
                                  backgroundColor: 'rgba(255,255,255,0.2)',
                                  borderColor: 'white'
                                }
                              }}
                            >
                              {normalizedSlide.call_to_action.text}
                            </Button>
                          </Box>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            );
          })}
        </Box>

        {/* Navigation Arrows */}
        {normalizedSlides.length > 1 && (
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
                },
                zIndex: 2
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
                },
                zIndex: 2
              }}
            >
              <ChevronRight />
            </IconButton>
          </>
        )}
      </Container>

      <style>{`
        .carousel_${carouselId} {
          --color: white;
          background-size: cover !important;
        }
        .carousel_${carouselId} a {
          color: var(--color);
          text-decoration: none !important;
        }
        .carousel_${carouselId} img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        #ProjectCarousel_${carouselId} {
          background: #000000 url(/images/cdf/cdf-background-wide.jpg) no-repeat center;
          background-size: cover !important;
        }
      `}</style>
    </Box>
  );
}
