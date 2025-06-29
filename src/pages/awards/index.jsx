import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import { loadYamlData } from '../../utils/loadData';

const awardsFiles = [
  '2008-0001.yml',
  '2008-0002.yml',
  '2010-0003.yml',
  '2011-0004.yml',
  '2011-0005.yml',
  '2011-0006.yml',
  '2012-0007.yml',
  '2013-0008.yml',
  '2014-0009.yml',
  '2014-0010.yml',
  '2014-0011.yml',
  '2016-0012.yml',
  '2017-0013.yml',
  '2023-0014.yml',
  '2024-0015.yml'
];

export default function AwardsPage() {
  const theme = useTheme();
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAwards = async () => {
      try {
        const loadedAwards = await Promise.all(
          awardsFiles.map(file => 
            loadYamlData(`awards/${file}`)
          )
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
          <Box sx={{ flexShrink: 0 }}>
            <img
              src={`/assets/awards/${award.image}`}
              alt={award.title}
              width={110}
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
