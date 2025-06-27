import React, { useState, useEffect } from "react";
import {
  Typography,
  Link,
  Chip,
  Tooltip,
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Paper,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Alert
} from "@mui/material";
import { loadYamlData } from "../../utils/loadData";

const statusColors = {
  'released': '#2dbda8',
  'preview': '#7b817c',
  'current': '#efc663',
  'near-term': '#9677df',
  'future': '#2c97de',
  'withdrawn': '#e16070',
};

const RoadmapPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [filters, setFilters] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [visibleStatuses, setVisibleStatuses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [roadmapData, setRoadmapData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadYamlData("roadmap/roadmap.yml");
        
        if (!data?.labels || !data?.statuses || !data?.categories) {
          throw new Error('Invalid roadmap data structure');
        }

        const statuses = data.statuses.filter(status => !status.hide);
        setVisibleStatuses(statuses);
        setFilteredCategories(data.categories);
        setRoadmapData(data);
      } catch (err) {
        console.error('Error loading roadmap data:', err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (labelName) => {
    setFilters(prev => 
      prev.includes(labelName) 
        ? prev.filter(l => l !== labelName) 
        : [...prev, labelName]
    );
  };

  useEffect(() => {
    if (!roadmapData?.categories) return;

    if (filters.length === 0) {
      setFilteredCategories(roadmapData.categories);
      return;
    }

    const filtered = roadmapData.categories
    .map(category => ({
      ...category,
      initiatives: (category.initiatives || []).filter(initiative =>
        (initiative.labels || []).some(label => filters.includes(label))
      )
    }))
    .filter(category => category.initiatives?.length > 0);
    
    setFilteredCategories(filtered);
  }, [filters, roadmapData]);

  if (isLoading) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <CircularProgress sx={{ mt: 4 }} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Loading roadmap data...
        </Typography>
      </Box>
    );
  }

  if (hasError || !roadmapData) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          Failed to load roadmap data. Please try again later.
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      maxWidth: 1200, 
      mx: "auto", 
      p: 3,
      fontFamily: theme.typography.fontFamily
    }}>
      <Typography variant="h1" component="h1" gutterBottom sx={{ 
        fontFamily: '"Georgia", serif',
        fontWeight: 'bold',
        fontSize: isMobile ? '1.5rem' : '2rem',
        marginBottom: '1.5rem',
        color: theme.palette.text.primary
      }}>
        Jenkins Roadmap
      </Typography>

      <Typography paragraph sx={{ 
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '2rem',
        color: theme.palette.text.secondary
      }}>
        Jenkins project offers a public community-driven roadmap. It aggregates key initiatives in all areas: features, infrastructure, documentation, community, etc. See JEP-14 for more information about the public roadmap process. We do NOT commit on delivery dates, all initiatives depend on contributions. Anyone is welcome to participate and help us to deliver the initiatives below! Contributing to Jenkins
      </Typography>

      {roadmapData.labels && (
        <Paper elevation={0} sx={{ 
          p: 2, 
          mb: 3,
          backgroundColor: theme.palette.grey[100],
          borderRadius: theme.shape.borderRadius
        }}>
          <Typography variant="h6" component="h2" sx={{ 
            fontSize: '1rem',
            fontWeight: 600,
            mb: 1,
            color: theme.palette.text.primary
          }}>
            Filter by category:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {roadmapData.labels.map((label) => (
              <FormControlLabel
                key={label.name}
                control={
                  <Checkbox
                    onChange={() => handleFilterChange(label.name)}
                    size="small"
                    color="primary"
                    sx={{
                        color: theme.palette.text.primary,
                      '&.Mui-checked': {
                        color: theme.palette.text.primary,
                      },
                    }}
                  />
                }
                label={label.displayName}
                sx={{ 
                  mr: 0,
                  '& .MuiTypography-root': {
                    fontSize: '0.875rem',
                    color: theme.palette.text.primary
                  }
                }}
              />
            ))}
          </Box>
        </Paper>
      )}

      {isMobile ? (
        <MobileView 
          filteredCategories={filteredCategories} 
          roadmapData={roadmapData} 
          statusColors={statusColors}
          theme={theme}
        />
      ) : (
        <DesktopView 
          filteredCategories={filteredCategories}
          visibleStatuses={visibleStatuses}
          roadmapData={roadmapData}
          statusColors={statusColors}
          theme={theme}
        />
      )}

      <ReferencesSection theme={theme} />
    </Box>
  );
};

// Mobile View
const MobileView = ({ filteredCategories, roadmapData, statusColors, theme }) => (
  <Box sx={{ 
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    mb: 4,
    overflow: 'hidden'
  }}>
    {filteredCategories.map((category) => (
      <Box key={category.name}>
        <Box sx={{ 
          backgroundColor: theme.palette.grey[100],
          fontWeight: 600,
          p: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          color: theme.palette.text.primary
        }}>
          {category.name}
        </Box>
        
        {(category.initiatives || []).map((initiative) => {
          const status = roadmapData.statuses.find(s => s.id === initiative.status);
          return (
            <Box 
              key={initiative.name} 
              sx={{ 
                p: 2, 
                borderBottom: `1px solid ${theme.palette.divider}`,
                '&:last-child': {
                  borderBottom: 'none'
                }
              }}
            >
              <Tooltip 
                title={initiative.description || (status?.description || '')} 
                arrow
                placement="right"
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {status && (
                    <Box sx={{ 
                      background: statusColors[status.id] || theme.palette.grey[500],
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "4px",
                      padding: "4px 8px",
                      mr: 1,
                      fontSize: '0.75rem'
                    }}>
                      {status.displayName}
                    </Box>
                  )}
                  <Link
                    href={initiative.link || '#'}
                    target="_blank"
                    rel="noopener"
                    sx={{ 
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {initiative.name}
                  </Link>
                </Box>
              </Tooltip>
              {initiative.labels && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {initiative.labels.map((label) => {
                    const labelData = roadmapData.labels.find(l => l.name === label);
                    return (
                      <Chip
                        key={label}
                        label={labelData?.displayName || label}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.grey[200],
                          color: theme.palette.text.primary,
                          fontSize: '0.75rem',
                          height: '24px'
                        }}
                      />
                    );
                  })}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    ))}
  </Box>
);

// Desktop View
const DesktopView = ({ filteredCategories, visibleStatuses, roadmapData, statusColors, theme }) => (
  <Box sx={{ 
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    mb: 4,
    overflow: 'auto'
  }}>
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: `repeat(${visibleStatuses.length}, 1fr)`,
      backgroundColor: theme.palette.grey[100]
    }}>
      {visibleStatuses.map((status) => (
        <Box 
          key={status.id} 
          sx={{ 
            p: 2, 
            fontWeight: 600,
            borderRight: `1px solid ${theme.palette.divider}`,
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '0.875rem',
            color: theme.palette.text.primary
          }}
        >
          {status.displayName}
        </Box>
      ))}
    </Box>

    {filteredCategories.map((category) => (
      <React.Fragment key={category.name}>
        <Box sx={{ 
          p: 2,
          fontWeight: 600,
          borderBottom: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.grey[50],
          color: theme.palette.text.primary
        }}>
          {category.name}
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${visibleStatuses.length}, 1fr)` }}>
          {visibleStatuses.map((status) => (
            <Box
              key={status.id}
              sx={{ 
                p: 2,
                minHeight: 100,
                borderRight: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.background.paper,
                '&:last-child': { borderRight: 'none' }
              }}
            >
              {(category.initiatives || [])
                .filter(initiative => initiative.status === status.id)
                .map((initiative) => (
                  <Tooltip
                    key={initiative.name}
                    title={initiative.description || status.description || ''}
                    placement="top"
                    arrow
                  >
                    <Box
                      sx={{
                        mb: 1,
                        p: 1,
                        borderRadius: theme.shape.borderRadius,
                        background: statusColors[status.id] || theme.palette.grey[500],
                        color: "white",
                        transition: 'all 0.2s ease',
                        "&:hover": {
                          transform: 'translateY(-2px)',
                          boxShadow: theme.shadows[2]
                        },
                      }}
                    >
                      <Link
                        href={initiative.link || '#'}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          color: "white",
                          textDecoration: "none",
                          display: 'block',
                          "&:hover": {
                            textDecoration: "none",
                          },
                        }}
                      >
                        {initiative.name}
                      </Link>
                    </Box>
                  </Tooltip>
                ))}
            </Box>
          ))}
        </Box>
      </React.Fragment>
    ))}
  </Box>
);

// References Section
const ReferencesSection = ({ theme }) => (
  <>
    <Typography variant="h2" component="h2" gutterBottom sx={{
      fontFamily: '"Georgia", serif',
      fontSize: '1.75rem',
      fontWeight: 600,
      marginTop: '2rem',
      marginBottom: '1rem',
      color: theme.palette.text.primary
    }}>
      References
    </Typography>
    <List dense sx={{ 
      '& .MuiListItem-root': {
        px: 0,
        py: '4px'
      }
    }}>
      {[
        {
          text: "Roadmap process documentation (JEP-14)",
          href: "https://github.com/jenkinsci/jep/tree/master/jep/14"
        },
        {
          text: "HOWTO: Suggest a new roadmap item",
          href: "https://github.com/jenkinsci/jep/tree/master/jep/14#submitting-roadmap-suggestions"
        },
        {
          text: "Open data (roadmap.yml)",
          href: "https://github.com/jenkins-infra/jenkins.io/blob/master/content/_data/roadmap/roadmap.yml"
        },
        {
          text: "Archive (completed and withdrawn roadmap items)",
          href: "https://github.com/jenkins-infra/jenkins.io/blob/master/content/_data/roadmap/archive.yml"
        }
      ].map((item, index) => (
        <ListItem key={index}>
          <ListItemText>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener"
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              {item.text}
            </Link>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </>
);

export default RoadmapPage;