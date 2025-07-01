import React, { useState, useEffect } from "react";
import {
  Typography,
  Link,
  Chip,
  Tooltip,
  Box,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Alert
} from "@mui/material";
import { loadYamlData } from "../../utils/loadData";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const statusColors = {
  'released': '#2dbda8',
  'preview': '#7b817c',
  'current': '#efc663',
  'near-term': '#9677df',
  'future': '#2c97de',
  'withdrawn': '#e16070',
};

const statusGradients = {
  'released': 'linear-gradient(90deg, #2dbda8 0%, #1aab40 100%)',
  'preview': 'linear-gradient(90deg, #7b817c 0%, #6b816f 100%)',
  'current': 'linear-gradient(90deg, #efc663 0%, #eab53a 100%)',
  'near-term': 'linear-gradient(90deg, #9677df 0%, #7347d5 100%)',
  'future': 'linear-gradient(90deg, #2c97de 0%, #2378b1 100%)',
  'withdrawn': 'linear-gradient(90deg, #e16070 0%, #d83941 100%)',
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
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center'
      }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Loading roadmap data...
        </Typography>
      </Box>
    );
  }

  if (hasError || !roadmapData) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">
          Failed to load roadmap data. Please try again later.
        </Alert>
      </Box>
    );
  }

  return (
    <HelmetProvider>
      <Box
        sx={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: { xs: 2, sm: 4 },
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          lineHeight: 1.65,
          color: '#212529',
        }}
      >
        <Helmet>
          <title>Jenkins Roadmap</title>
          <meta name="description" content="Jenkins project offers a public community-driven roadmap. It aggregates key initiatives in all areas: features, infrastructure, documentation, community, etc." />
        </Helmet>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontSize: '2rem',
            mb: '0.5rem',
            color: '#212529',
          }}
        >
          Jenkins Roadmap
        </Typography>

        <Typography variant="body1" sx={{ 
          mb: 2, 
          fontSize: '1rem', 
          fontWeight: 500,
          color: '#212529',
        }}>
          Jenkins project offers a public community-driven roadmap. It aggregates key initiatives in all areas: features, infrastructure, documentation, community, etc. See JEP-14 for more information about the public roadmap process. We do NOT commit on delivery dates, all initiatives depend on contributions. Anyone is welcome to participate and help us to deliver the initiatives below! <Link href="/participate" sx={{ color: '#2378b1', '&:hover': { color: '#2c97de' } }}>Contributing to Jenkins</Link>
        </Typography>

        {roadmapData.labels && (
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '8px', 
            mb: '16px',
            padding: '10px',
            borderRadius: '3px',
          }}>
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#212529',
              }}
            >
              Filters:
            </Typography>
            
            {roadmapData.labels.map((label) => (
              <FormControlLabel
                key={label.name}
                control={
                  <Checkbox
                    onChange={() => handleFilterChange(label.name)}
                    color="primary"
                    sx={{
                      color: '#212529',
                      padding: '4px',
                      '&.Mui-checked': {
                        color: '#1A73E8',
                      },
                    }}
                  />
                }
                label={label.displayName}
                sx={{
                  margin: 0,
                  '& .MuiTypography-root': {
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#212529',
                  },
                }}
              />
            ))}
          </Box>
        )}

        {isMobile ? (
          <MobileView 
            filteredCategories={filteredCategories} 
            roadmapData={roadmapData} 
            statusColors={statusColors}
            statusGradients={statusGradients}
            theme={theme}
          />
        ) : (
          <DesktopView 
            filteredCategories={filteredCategories}
            visibleStatuses={visibleStatuses}
            roadmapData={roadmapData}
            statusColors={statusColors}
            statusGradients={statusGradients}
            theme={theme}
          />
        )}

        <ReferencesSection theme={theme} />
      </Box>
    </HelmetProvider>
  );
};

// Mobile View
const MobileView = ({ filteredCategories, roadmapData, statusColors, statusGradients, theme }) => (
  <Box sx={{ 
    border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius: '3px',
    mb: 4,
    overflow: 'hidden'
  }}>
    {filteredCategories.map((category) => (
      <Box key={category.name}>
        <Box sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.025)',
          fontWeight: 600,
          padding: '10px 16px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          color: '#212529',
          fontSize: '14px',
          height: '40px',
          display: 'flex',
          alignItems: 'center'
        }}>
          {category.name}
        </Box>
        
        {(category.initiatives || []).map((initiative) => {
          const status = roadmapData.statuses.find(s => s.id === initiative.status);
          return (
            <Box 
              key={initiative.name} 
              sx={{ 
                padding: '8px 16px', 
                borderBottom: '1px solid #e6eaee',
                position: 'relative',
                '&:last-child': {
                  borderBottom: 'none'
                }
              }}
            >
              <Tooltip 
                title={initiative.description || (status?.description || '')} 
                arrow
                placement="right"
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: '#212529',
                      padding: '6px 12px',
                      fontSize: '14px',
                      maxWidth: '260px'
                    }
                  },
                  arrow: {
                    sx: {
                      color: '#212529'
                    }
                  }
                }}
              >
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  mb: 1,
                  paddingLeft: '50%'
                }}>
                  <Box sx={{ 
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    width: '45%',
                    paddingRight: '8px',
                    whiteSpace: 'nowrap',
                    color: '#6c757d',
                    fontSize: '14px'
                  }}>
                    {status?.displayName || 'Status'}
                  </Box>
                  {status && (
                    <Box sx={{ 
                      background: statusGradients[status.id] || statusColors[status.id],
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      padding: "4px 8px",
                      margin: '8px 4px',
                      fontSize: '14px',
                      minHeight: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {status.displayName}
                    </Box>
                  )}
                </Box>
              </Tooltip>
              
              <Box sx={{ 
                position: 'relative',
                paddingLeft: '50%'
              }}>
                <Box sx={{ 
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  width: '45%',
                  paddingRight: '8px',
                  whiteSpace: 'nowrap',
                  color: '#6c757d',
                  fontSize: '14px'
                }}>
                  Initiative
                </Box>
                <Link
                  href={initiative.link || '#'}
                  target="_blank"
                  rel="noopener"
                  sx={{ 
                    fontWeight: 400,
                    color: '#2378b1',
                    fontSize: '14px',
                    lineHeight: '16px',
                    '&:hover': {
                      color: '#2c97de',
                      textDecoration: 'none'
                    },
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '48px'
                  }}
                >
                  {initiative.name}
                </Link>
              </Box>

              {initiative.labels && (
                <Box sx={{ 
                  position: 'relative',
                  paddingLeft: '50%'
                }}>
                  <Box sx={{ 
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    width: '45%',
                    paddingRight: '8px',
                    whiteSpace: 'nowrap',
                    color: '#6c757d',
                    fontSize: '14px'
                  }}>
                    Labels
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                    {initiative.labels.map((label) => {
                      const labelData = roadmapData.labels.find(l => l.name === label);
                      return (
                        <Chip
                          key={label}
                          label={labelData?.displayName || label}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                            color: '#212529',
                            fontSize: '12px',
                            height: '24px',
                            fontWeight: 500
                          }}
                        />
                      );
                    })}
                  </Box>
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
const DesktopView = ({ filteredCategories, visibleStatuses, roadmapData, statusColors, statusGradients, theme }) => (
  <Box component="table" 
    sx={{ 
      width: '100%',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      borderRadius: '3px',
      mb: 4,
      borderCollapse: 'separate',
      borderSpacing: 0
    }}
    className="roadmap-table"
  >
    <Box component="thead">
      <Box component="tr" sx={{ borderRadius: '3px' }}>
        <Box component="th" sx={{ 
          fontWeight: 600,
          fontSize: '12px',
          lineHeight: '16px',
          color: '#6c757d',
          textTransform: 'uppercase',
          textAlign: 'left',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          padding: '13px 16px 11px 24px',
          borderRadius: '3px 0 0 0'
        }}>
          Category
        </Box>
        {visibleStatuses.map((status) => (
          <Box 
            component="th" 
            key={status.id}
            sx={{ 
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '16px',
              color: '#6c757d',
              textTransform: 'uppercase',
              textAlign: 'center',
              borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
              padding: '13px 16px 11px 16px',
              '&:last-child': {
                paddingRight: '24px',
                borderRadius: '0 3px 0 0'
              }
            }}
          >
            {status.displayName}
          </Box>
        ))}
      </Box>
    </Box>

    <Box component="tbody">
      {filteredCategories.map((category) => (
        <React.Fragment key={category.name}>
          <Box component="tr" sx={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.025)',
            fontWeight: 600,
          }}>
            <Box component="td" colSpan={visibleStatuses.length + 1} sx={{ 
              padding: '0 24px',
              height: '40px',
              borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
              fontSize: '14px'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                {category.name}
              </Box>
            </Box>
          </Box>
          
          <Box component="tr">
            {visibleStatuses.map((status) => (
              <Box
                component="td"
                key={status.id}
                sx={{ 
                  padding: 0,
                  minHeight: '48px',
                  borderLeft: '1px dashed rgba(230, 234, 238, 0.25)',
                  verticalAlign: 'top',
                  '&:first-child': {
                    paddingLeft: '24px',
                    borderLeft: 'none'
                  },
                  '&:last-child': {
                    paddingRight: '16px'
                  }
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
                      componentsProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: '#212529',
                            padding: '6px 12px',
                            fontSize: '14px',
                            maxWidth: '260px'
                          }
                        },
                        arrow: {
                          sx: {
                            color: '#212529'
                          }
                        }
                      }}
                    >
                      <Box
                        sx={{
                          margin: '8px 4px',
                          padding: '4px 8px',
                          borderRadius: '10px',
                          background: statusGradients[status.id] || statusColors[status.id],
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '14px',
                          lineHeight: '16px',
                          minHeight: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center'
                        }}
                      >
                        <Link
                          href={initiative.link || '#'}
                          target="_blank"
                          rel="noopener"
                          sx={{
                            color: 'white',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            '&:hover': {
                              textDecoration: 'none'
                            }
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
  </Box>
);

// References Section
const ReferencesSection = ({ theme }) => (
  <>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 800,
        fontSize: '1.8rem',
        mt: 5,
        mb: 2,
        color: '#212529'
      }}
    >
      References
    </Typography>
    <Box component="ul" sx={{ 
      paddingLeft: '1.2rem',
      marginTop: 0,
      marginBottom: '1rem',
      listStyleType: 'disc'
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
        <Box component="li" key={index} sx={{ 
          marginBottom: '0.4rem',
          color: '#212529',
          fontSize: '1rem',
          lineHeight: 1.65
        }}>
          <Link
            href={item.href}
            target="_blank"
            rel="noopener"
            sx={{
              color: '#2378b1',
              fontSize: '1rem',
              fontWeight: 500,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                color: '#2c97de'
              },
            }}
          >
            {item.text}
          </Link>
        </Box>
      ))}
    </Box>
  </>
);

export default RoadmapPage;