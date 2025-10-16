import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default function ProjectCarousel({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselId] = useState(() => `project-carousel-${Math.floor(Math.random() * 1000)}`);

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
      id={carouselId}
      sx={{
        [`&.${carouselId}`]: {
          background: `${carouselBackground} url(${carouselBackgroundImage}) no-repeat center !important`,
          backgroundSize: 'cover !important',
          color: 'white !important',
          position: 'relative',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
        },
        [`& .${carouselId}-link`]: {
          color: 'white !important',
          textDecoration: 'none !important',
        },
        [`& .${carouselId}-image`]: {
          display: 'block !important',
          marginLeft: 'auto !important',
          marginRight: 'auto !important',
        },
        [`& .${carouselId}-text`]: {
          color: 'white !important',
        },
        [`& .${carouselId}-button`]: {
          color: 'white !important',
          borderColor: 'white !important',
        }
      }}
      className={carouselId}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        {/* Carousel Indicators */}
        {normalizedSlides.length > 1 && (
          <Box sx={{ 
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
        <Box>
          {normalizedSlides.map((slide, index) => {
            const normalizedSlide = normalizeSlide(slide);
            if (!normalizedSlide) return null;
            
            return (
              <Box
                key={index}
                sx={{
                  display: index === activeIndex ? 'block' : 'none',
                  height: '500px',
                  py: 4
                }}
              >
                <Container sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                  <Grid container spacing={4} alignItems="center" sx={{ height: '100%' }}>
                    {/* Image Column */}
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
                          <Link 
                            to={normalizedSlide.href || '#'} 
                            className={`${carouselId}-link`}
                          >
                            <img 
                              src={normalizedSlide.image.src} 
                              alt=""
                              className={`${carouselId}-image`}
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
                    
                    {/* Content Column */}
                    <Grid item xs={12} lg={4} sx={{ 
                      order: { xs: 1, lg: 1 },
                      height: { xs: 'auto', lg: '100%' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Box>
                        <Link 
                          to={normalizedSlide.href || '#'} 
                          className={`${carouselId}-link`}
                        >
                          <Typography 
                            variant="h2" 
                            className={`${carouselId}-text`}
                            sx={{ 
                              mb: 2, 
                              fontSize: { xs: '1.75rem', md: '2.25rem', lg: '2.5rem' },
                              fontWeight: 'bold',
                              lineHeight: 1.2,
                              color: 'white !important'
                            }}
                          >
                            {normalizedSlide.title}
                          </Typography>
                          <Typography 
                            className={`${carouselId}-text`}
                            sx={{ 
                              mb: 3, 
                              fontSize: '1.1rem',
                              lineHeight: 1.6,
                              color: 'white !important'
                            }}
                          >
                            {normalizedSlide.intro}
                          </Typography>
                        </Link>
                        
                        {normalizedSlide.call_to_action && (
                          <Box sx={{ mt: 3 }}>
                            <Button
                              component={Link}
                              to={normalizedSlide.call_to_action.href}
                              variant="outlined"
                              className={`${carouselId}-button`}
                              sx={{
                                color: 'white !important',
                                borderColor: 'white !important',
                                backdropFilter: 'blur(10px)',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                fontSize: '1rem',
                                padding: '10px 20px',
                                '&:hover': {
                                  backgroundColor: 'rgba(255,255,255,0.2)',
                                  borderColor: 'white !important',
                                  color: 'white !important'
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
              className={`${carouselId}-button`}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white !important',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white !important'
                },
                zIndex: 2
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={nextSlide}
              className={`${carouselId}-button`}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white !important',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white !important'
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
        #${carouselId} {
          background: #000000 url(/images/cdf/cdf-background-wide.jpg) no-repeat center !important;
          background-size: cover !important;
          color: white !important;
        }
        
        #${carouselId} * {
          color: white !important;
        }
        
        #${carouselId} a {
          color: white !important;
          text-decoration: none !important;
        }
        
        #${carouselId} a:hover {
          color: white !important;
          text-decoration: none !important;
        }
        
        #${carouselId} .MuiTypography-root {
          color: white !important;
        }
        
        #${carouselId} .MuiButton-root {
          color: white !important;
          border-color: white !important;
        }
        
        #${carouselId} .MuiButton-root:hover {
          color: white !important;
          border-color: white !important;
        }
        
        #${carouselId} img {
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        
        #${carouselId},
        #${carouselId} *,
        #${carouselId} h1,
        #${carouselId} h2, 
        #${carouselId} h3,
        #${carouselId} h4,
        #${carouselId} h5,
        #${carouselId} h6,
        #${carouselId} p,
        #${carouselId} span,
        #${carouselId} div {
          color: white !important;
        }
      `}</style>
    </Box>
  );
}
