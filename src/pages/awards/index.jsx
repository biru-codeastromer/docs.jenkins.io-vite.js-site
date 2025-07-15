import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import { loadYamlData } from '../../utils/loadData';

export default function AwardsPage() {
  const theme = useTheme();
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAwards = async () => {
      try {
        // Dynamically import all YAML files from the awards directory
        const awardModules = import.meta.glob('../../../public/data/awards/*.yml');
        const awardPaths = Object.keys(awardModules);
        
        const loadedAwards = await Promise.all(
          awardPaths.map(async (path) => {
            // Extract the filename from the full path
            const fileName = path.split('/').pop();
            return loadYamlData(`awards/${fileName}`);
          })
        );
        
        loadedAwards.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
        setAwards(loadedAwards);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadAwards();
  }, []);

  if (loading) return (
    <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500 }}>
      Loading awards...
    </Typography>
  );
  
  if (error) return (
    <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500, color: theme.palette.error.main }}>
      Error loading awards: {error}
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
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '1.5rem',
        }}
      >
        Awards
      </Typography>
      <Typography variant="body1" sx={{ 
        mb: 2, 
        fontSize: '1.1rem', 
        fontWeight: 550,
        color: theme.palette.text.secondary
        }}>
        Highlighting the milestones and achievements of Jenkins.
      </Typography>

      {awards.map((award) => (
        <Box 
          key={`${award.year}-${award.title}`} 
          sx={{ 
            mb: 4,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 3,
          }}
        >
          <Box sx={{ 
            flexShrink: 0,
            width: { xs: '100%', sm: '110px' },
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-start' },
            alignItems: 'flex-start'
          }}>
            <img
              src={`/assets/awards/${award.image}`}
              alt={award.title}
              style={{
                width: '110px',
                height: 'auto',
                maxWidth: '100%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              loading="lazy"
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h5"
              sx={{
                fontWeight: 650,
                fontSize: '1.2rem',
                mb: 1,
              }}
            >
              {award.url ? (
                <Link href={award.url} target="_blank" rel="noopener noreferrer" underline="hover">
                  {award.title}
                </Link>
              ) : (
                award.title
              )}
            </Typography>
            {award.description && (
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
                {award.description}
              </Typography>
            )}
            {award.quote && (
              <Box 
                component="blockquote" 
                sx={{
                  borderLeft: `4px solid ${theme.palette.divider}`,
                  pl: 2,
                  ml: 0,
                  fontStyle: 'italic',
                }}
              >
                <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500 }}>
                  {award.quote}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
