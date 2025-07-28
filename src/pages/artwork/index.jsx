import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, Grid, Card, CardContent, Divider, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { loadYamlData } from '../../utils/loadData';

const logoFiles = [
  'actor.yml',
  'alien.yml',
  'amsterdam.yml',
  'atomium.yml',
  'austin.yml',
  'automotive.yml',
  'balloon.yml',
  'barcelona.yml',
  'baturro.yml',
  'beekeeper.yml',
  'belarus.yml',
  'boston.yml',
  'brno.yml',
  'cambridge.yml',
  'captain.yml',
  'chatterbox.yml',
  'clown.yml',
  'cologne.yml',
  'cosmonaut.yml',
  'cossack.yml',
  'cowboy.yml',
  'cute.yml',
  'duchess.yml',
  'fire.yml',
  'formal.yml',
  'gaucho.yml',
  'general.yml',
  'georgia.yml',
  'googly.yml',
  'guadalajara.yml',
  'hyderabad.yml',
  'ice-cream.yml',
  'israel.yml',
  'JCasC.yml',
  'jenkins-is-the-way.yml',
  'jenkins-with-plate-basis.yml',
  'jenkins-x.yml',
  'jenkins.yml',
  'jenkinsperu.yml',
  'jenkinstein.yml',
  'kongfu.yml',
  'kubernetes-operator.yml',
  'leeroy-jenkins.yml',
  'legolas.yml',
  'lima.yml',
  'london.yml',
  'magician.yml',
  'magritte.yml',
  'miner.yml',
  'mono.yml',
  'musketeer.yml',
  'nerd.yml',
  'ninja.yml',
  'nut.yml',
  'oktoberfest.yml',
  'parasite.yml',
  'paris-eiffel.yml',
  'paris.yml',
  'pest-control.yml',
  'peter-the-great.yml',
  'pixelart.yml',
  'plumber.yml',
  'pride.yml',
  'punkins.yml',
  'raleigh.yml',
  'romania.yml',
  'russian.yml',
  'san-diego.yml',
  'santa-claus.yml',
  'seattle.yml',
  'seonbi.yml',
  'sherlock.yml',
  'snow.yml',
  'stay-safe.yml',
  'superhero.yml',
  'switzerland.yml',
  'sydney.yml',
  'toulousejam.yml',
  'turkey.yml',
  'washington.yml',
  'worldwide.yml',
  'yaroslavl.yml'
];

export default function ArtworkPage() {
  const theme = useTheme();
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLogos = async () => {
      try {
        const loadedLogos = await Promise.all(
          logoFiles.map(file => 
            loadYamlData(`logo/${file}`)
              .then(logo => {
                const logoDir = file.replace('.yml', '');
                
                const url = logo.url ? `/assets/logos/${logoDir}/${logo.url.split('/').pop()}` : null;
                const url_256 = logo.url_256 ? `/assets/logos/${logoDir}/${logo.url_256.split('/').pop()}` : null;
                const vector = logo.vector ? `/assets/logos/${logoDir}/${logo.vector.split('/').pop()}` : null;

                return {
                  ...logo,
                  url,
                  url_256,
                  vector
                };
              })
              .catch(err => {
                console.error(`Error loading logo ${file}:`, err);
                return null;
              })
          )
        );
        
        const validLogos = loadedLogos.filter(logo => logo !== null)
          .sort((a, b) => a.name.localeCompare(b.name));
        
        setLogos(validLogos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadLogos();
  }, []);

  if (loading) return (
    <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500 }}>
      Loading artwork...
    </Typography>
  );
  
  if (error) return (
    <Typography variant="body1" sx={{ 
      fontSize: '1rem', 
      fontWeight: 500, 
      color: theme.palette.error.main 
    }}>
      Error loading artwork: {error}
    </Typography>
  );

  return (
    <Box
      sx={{
        maxWidth: '1060px',
        margin: '0 auto',
        padding: { xs: 2, sm: 4 },
        fontFamily:
          '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        lineHeight: 1.65,
        color: theme.palette.text.primary,
      }}
    >
      <Helmet>
        <title>Artwork</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Artwork
      </Typography>

      <Typography variant="body1" sx={{ 
        mb: 1, 
        fontSize: '1rem', 
        fontWeight: 500,
      }}>
        The original Jenkins logo was created by our friends at{' '}
        <Link href="https://frontside.com" target="_blank" rel="noopener" underline="hover">
          Frontside
        </Link>. Special thanks to{' '}
        <Link href="https://github.com/cowboyd" target="_blank" rel="noopener" underline="hover">
          Charles Lowell
        </Link>{' '}
        for his efforts championing the logo's original design. Usage guidelines for the original logo can be found on our{' '}
        <Link href="/press" underline="hover">Press</Link> page. This page simply catalogues the many clever variations of Jenkins
        created by members of the Jenkins community.
      </Typography>

      <Typography variant="body1" sx={{ 
        mb: 1, 
        fontSize: '1rem', 
        fontWeight: 500,
      }}>
        These images are also available in various sizes and SVG formats online, or as a zip file. These are licensed under the{' '}
        <Link href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener" underline="hover">
          Creative Commons Attribution-ShareAlike 3.0 Unported License
        </Link>.
        Under the terms of this license, you must include an attribution to the Jenkins project, with a link (https://jenkins.io/), if you display
        these logos or derivatives thereof.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Box className="artwork-container">
        <Grid container spacing={3}>
          {logos.map((logo) => (
            <Grid item xs={12} sm={6} md={4} key={logo.name}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  id={logo.name.toLowerCase().replace(/\s+/g, '-')}
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    mb: '0.75rem',
                  }}
                >
                  {logo.name}
                </Typography>

                <Link
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                >
                  <Box
                    component="img"
                    src={logo.url_256 || logo.vector}
                    alt={logo.name}
                    sx={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      mb: 1,
                      transition: 'opacity 0.2s ease',
                      '&:hover': {
                        opacity: 0.8,
                      },
                    }}
                  />
                </Link>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                    '& small': {
                      fontSize: '0.85rem',
                    },
                  }}
                >
                  {logo.credit && (
                    <>
                      Created by{' '}
                      {logo.credit_url ? (
                        <Link href={logo.credit_url} target="_blank" underline="hover">
                          {logo.credit}
                        </Link>
                      ) : (
                        logo.credit
                      )}
                    </>
                  )}
                  {logo.source && (
                    <>
                      <br />
                      <Link
                        href={logo.source_url}
                        target="_blank"
                        rel="noopener"
                        underline="hover"
                      >
                        {logo.source}
                      </Link>
                    </>
                  )}
                  {logo.vector && (
                    <>
                      <br />
                      <Typography 
                      component="small" 
                      variant="caption"
                      sx={{
                        fontWeight: 500,
                        color: 'black',
                        }}
                      >
                        <Link
                          href={logo.vector}
                          target="_blank"
                          rel="noopener"
                          underline="hover"
                        >
                          SVG format
                        </Link>
                      </Typography>
                    </>
                  )}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: '2rem',
            mb: '0.5rem',
          }}
        >
          3D model
        </Typography>
        <Typography variant="body1" sx={{ 
          mb: 1, 
          fontSize: '1rem', 
          fontWeight: 500,
        }}>
          3D version of Mr. Jenkins is available to print yourself,{' '}
          <Link href="https://drive.google.com/file/d/1tdPch-TKVF6T7w3Et9aVYRnE-fRtm3cR/view?usp=sharing" target="_blank" rel="noopener" underline="hover">
            the data is here
          </Link>.
        </Typography>
        <Typography variant="body1" sx={{ 
          mb: 1, 
          fontSize: '1rem', 
          fontWeight: 500,
        }}>
          As per the license of the original artwork, the 3D data model is under the same{' '}
          <Link href="http://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener" underline="hover">
            Creative Commons Attribution-ShareAlike 3.0 Unported License
          </Link>. The 3D logo design is by{' '}
          <Link href="https://www.fast-d.com/search/engineers/2798" target="_blank" rel="noopener" underline="hover">
            akiki
          </Link>.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: '2rem',
            mb: '0.5rem',
          }}
        >
          HeroForge 3D model
        </Typography>
        <Typography variant="body1" sx={{ 
          mb: 1, 
          fontSize: '1rem', 
          fontWeight: 500,
        }}>
          The HeroForge 3D version of Mr.Jenkins is{' '}
          <Link href="https://www.heroforge.com/load_config%3D13211607/" target="_blank" rel="noopener" underline="hover">
            available here
          </Link>{' '}
          for order. If you want to print your own, HeroForge provides STL for purchase.
        </Typography>
        <Typography variant="body1" sx={{ 
          mb: 1, 
          fontSize: '1rem', 
          fontWeight: 500,
        }}>
          As per the license of the original artwork, the 3D data model is under the same{' '}
          <Link href="http://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener" underline="hover">
            Creative Commons Attribution-ShareAlike 3.0 Unported License
          </Link>. The 3D logo design is by{' '}
          <Link href="https://www.linkedin.com/in/w-douglas-west-0856094/" target="_blank" rel="noopener" underline="hover">
            D. West
          </Link>.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '1.8rem',
            mb: '0.5rem',
          }}
        >
          Adding a Logo
        </Typography>
        <Typography variant="body1" sx={{ 
          mb: 1, 
          fontSize: '1rem', 
          fontWeight: 500,
        }}>
          In order to add a new logo, please refer to the{' '}
          <Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc#adding-a-logo" target="_blank" rel="noopener" underline="hover">
            CONTRIBUTING guidelines
          </Link>.
        </Typography>
      </Box>
    </Box>
  );
}
