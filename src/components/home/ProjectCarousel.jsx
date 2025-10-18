import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

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
          minHeight: { xs: '400px', md: '480px' },
          display: 'flex',
          alignItems: 'center',
        },
        [`&.${carouselId}, &.${carouselId} *`]: {
          fontFamily: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
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
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 6 } }}>
        {/* Carousel Indicators */}
        {normalizedSlides.length > 1 && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            position: 'absolute',
            bottom: { xs: 18, md: 28 },
            left: 0,
            right: 0,
            zIndex: 2,
            gap: 2
          }}>
            {normalizedSlides.map((_, index) => (
              <Button
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: { xs: 20, md: 24 },
                  height: { xs: 4, md: 4 },
                  borderRadius: 1,
                  minWidth: 'auto',
                  padding: 0,
                  backgroundColor: index === activeIndex ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.25)',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.95)'
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
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
                  height: { xs: 'auto', md: '480px' },
                  py: { xs: 3, md: 4 }
                }}
              >
                <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', alignItems: 'center', px: 0 }}>
                  <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center" sx={{ height: '100%', alignItems: 'center' }}>
                    {/* Content Column */}
                    <Grid item xs={12} lg={4} sx={{ 
                      order: { xs: 1, lg: 1 },
                      height: { xs: 'auto', lg: '100%' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      pl: { md: 6 },
                    }}>
                      <Box sx={{ maxWidth: { xs: '100%', md: 480 } }}>
                        <Link 
                          to={normalizedSlide.href || '#'} 
                          className={`${carouselId}-link`}
                        >
                          <Typography 
                            variant="h2" 
                            className={`${carouselId}-text`}
                            sx={{ 
                              mb: 2, 
                              fontSize: { xs: '1.5rem', md: '2rem', lg: '2.2rem' },
                              fontWeight: 700,
                              lineHeight: { xs: 1.12, md: 1.05 },
                              color: 'white !important',
                              letterSpacing: '-0.5px'
                            }}
                          >
                            {normalizedSlide.title}
                          </Typography>
                          <Typography 
                            className={`${carouselId}-text`}
                            sx={{ 
                              mb: 4, 
                              fontSize: { xs: '0.95rem', md: '1rem' },
                              lineHeight: 1.6,
                              color: 'rgba(255,255,255,0.92) !important',
                              maxWidth: { xs: '100%', md: 420 }
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
                                borderColor: 'rgba(255,255,255,0.18) !important',
                                backdropFilter: 'blur(6px)',
                                backgroundColor: 'rgba(255,255,255,0.06)',
                                fontSize: '0.9rem',
                                padding: '8px 16px',
                                borderRadius: 2,
                                textTransform: 'none',
                                '&:hover': {
                                  backgroundColor: 'rgba(255,255,255,0.12)',
                                  borderColor: 'rgba(255,255,255,0.22) !important',
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

                    <Grid item xs={12} lg={8} sx={{ 
                      order: { xs: 2, lg: 2 },
                      display: 'flex',
                      justifyContent: { xs: 'center', lg: 'center' },
                      alignItems: 'center',
                      height: { xs: 'auto', lg: '100%' }
                    }}>
                      {normalizedSlide.image && (
                        <Box sx={{ 
                          textAlign: 'center',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: { xs: 'center', lg: 'center' },
                          width: '100%',
                          pr: { md: 4 }
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
                                width: '100%',
                                maxWidth: normalizedSlide.image.width || '760px',
                                height: normalizedSlide.image.height || '320px',
                                maxHeight: '360px',
                                objectFit: 'cover',
                                display: 'block',
                                borderRadius: 2
                              }}
                              role="presentation"
                            />
                          </Link>
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            );
          })}
        </Box>

      </Container>

      <style>{`
        #${carouselId} {
          background: #000000 url(${carouselBackgroundImage}) no-repeat center !important;
          background-size: cover !important;
          color: white !important;
        }

        #${carouselId}, #${carouselId} * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
          border-color: rgba(255,255,255,0.18) !important;
        }

        #${carouselId} img {
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        #${carouselId} h1,
        #${carouselId} h2, 
        #${carouselId} h3,
        #${carouselId} h4,
        #${carouselId} h5,
        #${carouselId} h6 {
          color: white !important;
          margin: 0;
        }

        #${carouselId} p,
        #${carouselId} span,
        #${carouselId} div {
          color: white !important;
        }

        @media (min-width: 960px) {
          #${carouselId} .MuiContainer-root {
            padding-left: 48px;
            padding-right: 48px;
          }
        }
      `}</style>
    </Box>
  );
}
