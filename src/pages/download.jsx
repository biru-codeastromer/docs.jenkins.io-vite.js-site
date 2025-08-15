import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Link,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
  useTheme,
  CircularProgress,
  Alert
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { alpha } from '@mui/material/styles';
import tinycolor from 'tinycolor2';
import ThankYouBlock from "../components/ThankYouBlock";

// Default data to prevent blank screen
const DEFAULT_DATA = {
  stableSha256: 'Loading...',
  weeklySha256: 'Loading...',
  jenkins: {
    latest: "2.414",
    stable: "2.414.1"
  }
};

const DownloadPage = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [downloadData, setDownloadData] = useState(DEFAULT_DATA);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stableShaResponse = await fetch('/data/download/stable-sha256.json');
        const weeklyShaResponse = await fetch('/data/download/weekly-sha256.json');
        
        if (!stableShaResponse.ok || !weeklyShaResponse.ok) {
          throw new Error('Failed to fetch SHA data');
        }

        const [stableShaData, weeklyShaData] = await Promise.all([
          stableShaResponse.json(),
          weeklyShaResponse.json()
        ]);

        setDownloadData({
          stableSha256: stableShaData.sha256 || DEFAULT_DATA.stableSha256,
          weeklySha256: weeklyShaData.sha256 || DEFAULT_DATA.weeklySha256,
          jenkins: {
            latest: "2.516",
            stable: "2.504.3"
          }
        });
      } catch (err) {
        console.error('Error loading download data:', err);
        setHasError(true);
        setDownloadData(DEFAULT_DATA);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const dataToUse = downloadData || DEFAULT_DATA;
  const { latest, stable } = dataToUse.jenkins;

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
          Loading download information...
        </Typography>
      </Box>
    );
  }

  if (hasError) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">
          Failed to load download data. Showing basic information.
        </Alert>
      </Box>
    );
  }

  const ltsReleases = [
    {
      icon: <Box component="img" src="/assets/download-icons/docker.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://hub.docker.com/r/jenkins/jenkins",
      title: "Docker"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/kubernetes.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://artifacthub.io/packages/helm/jenkinsci/jenkins",
      title: "Kubernetes"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/ubuntu.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/doc/book/installing/linux/#debianubuntu",
      title: "Ubuntu/Debian"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/redhat.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/doc/book/installing/linux/#red-hat-centos",
      title: "Red Hat Enterprise Linux and derivatives"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/fedora.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/doc/book/installing/linux/#fedora",
      title: "Fedora"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/windows.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/download/thank-you-downloading-windows-installer-stable",
      title: "Windows"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/opensuse.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://pkg.jenkins.io/opensuse-stable/",
      title: "openSUSE"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/freebsd.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://www.freshports.org/devel/jenkins-lts",
      title: "FreeBSD",
      thirdParty: true
    },
    {
      icon: <Box component="img" src="/assets/download-icons/gentoo.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://packages.gentoo.org/packages/devel/jenkins-bin",
      title: "Gentoo",
      thirdParty: true
    },
    {
      icon: <Box component="img" src="/assets/download-icons/apple.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/download/lts/macos",
      title: "macOS",
      thirdParty: true
    },
    {
      icon: <Box component="img" src="/assets/download-icons/openbsd.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/download/lts/openbsd",
      title: "OpenBSD",
      thirdParty: true
    },
    {
      icon: <Box component="img" src="/assets/download-icons/openindiana.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://pkg.openindiana.org/hipster/en/search.shtml?token=jenkins-core-lts",
      title: "OpenIndiana Hipster",
      thirdParty: true
    }
  ];

  const weeklyReleases = [
    {
      icon: <Box component="img" src="/assets/download-icons/docker.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://hub.docker.com/r/jenkins/jenkins/",
      title: "Docker"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/ubuntu.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/doc/book/installing/linux/#debian-weekly",
      title: "Ubuntu/Debian"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/redhat.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/doc/book/installing/linux/#red-hat-weekly",
      title: "Red Hat Enterprise Linux and derivatives"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/fedora.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/doc/book/installing/linux/#fedora-weekly",
      title: "Fedora"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/windows.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/download/thank-you-downloading-windows-installer",
      title: "Windows"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/opensuse.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://pkg.jenkins.io/opensuse/",
      title: "openSUSE"
    },
    {
      icon: <Box component="img" src="/assets/download-icons/archlinux.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://archlinux.org/packages/extra/any/jenkins/",
      title: "Arch Linux",
      thirdParty: true
    },
    {
      icon: <Box component="img" src="/assets/download-icons/freebsd.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://www.freshports.org/devel/jenkins",
      title: "FreeBSD",
      thirdParty: true
    },
    {
      icon: <Box component="img" src="/assets/download-icons/gentoo.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://packages.gentoo.org/packages/devel/jenkins-bin",
      title: "Gentoo",
      thirdParty: true
    },
    {
      icon: <Box component="img" src="/assets/download-icons/apple.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/download/weekly/macos",
      title: "macOS",
      thirdParty: true
    },
    {
      icon: <Box component="img" src="/assets/download-icons/openbsd.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "/download/weekly/openbsd",
      title: "OpenBSD",
      thirdParty: true
    },
    {
      icon: <Box component="img" src="/assets/download-icons/openindiana.svg" sx={{ width: 24, height: 24, mr: 1.5 }} />,
      href: "https://pkg.openindiana.org/hipster/en/search.shtml?token=jenkins-core-weekly",
      title: "OpenIndiana Hipster",
      thirdParty: true
    }
  ];

  const clouds = [
    {
      icon: <Box component="img" src="/assets/download-icons/aws.svg" />,
      title: 'Jenkins with AWS CodeBuild and AWS CodeDeploy',
      href: 'https://aws.amazon.com/blogs/devops/setting-up-a-ci-cd-pipeline-by-integrating-jenkins-with-aws-codebuild-and-aws-codedeploy/',
      background: alpha(theme.palette.jenkins.awsOrange, 0.15),
    },
    {
      icon: <Box component="img" src="/assets/download-icons/azure.svg" />,
      title: 'Jenkins quickstarts, tutorials, samples, and resources for Azure',
      href: 'https://docs.microsoft.com/en-us/azure/developer/jenkins/',
      background: alpha(theme.palette.jenkins.azureBlue, 0.15),
    },
    {
      icon: <Box component="img" src="/assets/download-icons/google-cloud.svg" />,
      title: "Using Jenkins for distributed builds on Compute Engine",
      href: "/doc/tutorials/tutorials-for-installing-jenkins-on-Google-Cloud/",
      background: alpha(theme.palette.jenkins.googleGreen, 0.15),
    },
    {
      icon: <Box component="img" src="/assets/download-icons/civo.svg" />,
      title: "Jenkins one-click deployment on Civo Kubernetes",
      href: "https://github.com/civo/kubernetes-marketplace/tree/master/jenkins",
      background: alpha(theme.palette.jenkins.civoBlue, 0.15),
    },
    {
      icon: <Box component="img" src="/assets/download-icons/oracle.svg" />,
      title: "Set up Jenkins for cloud deployments in Oracle Cloud",
      href: "https://docs.oracle.com/en/solutions/cicd-pipeline/",
      background: alpha(theme.palette.jenkins.oracleRed, 0.15),
    },
    {
      icon: <Box component="img" src="/assets/download-icons/bitnami.svg" />,
      title: "Images for Amazon Web Services, Azure, and Google Cloud",
      href: "https://bitnami.com/stack/jenkins/cloud",
      background: alpha(theme.palette.jenkins.bitnamiBlue, 0.15),
    }
  ];

  return (
    <Box sx={{ 
      maxWidth: 'Min(85vw, 1600px)',
      width: '100%',
      marginInline: 'auto',
      padding: '3rem 1rem',
      minHeight: '80vh',
      '@media screen and (max-width: 768px)': {
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }
    }}>
      <Helmet>
        <title>Download Jenkins</title>
        <meta name="description" content="Download Jenkins - choose between Stable (LTS) and weekly releases" />
      </Helmet>

      <Typography variant="h1" component="h1" gutterBottom sx={{ 
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontWeight: 800,
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: theme.palette.text.primary
      }}>
        Download and deploy
      </Typography>

      <Typography paragraph sx={{ 
        fontSize: '1.1rem',
        lineHeight: '1.6',
        marginBottom: '2rem',
        fontWeight: 550,
        color: theme.palette.text.secondary
      }}>
        The Jenkins project produces two release lines: Stable (LTS) and weekly. 
        Depending on your organization's needs, one may be preferred over the other. 
        See the links below for more information and recommendations about the release lines.
      </Typography>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0 4rem',
        margin: '60px 0',
        mb: 3,
        '@media screen and (max-width: 768px)': {
          display: 'flex',
          flexDirection: 'column',
          margin: 0
        }
      }}>
        <Box>
          <Typography variant="h4" sx={{ fontSize: '1.45rem', fontWeight: 800, mb: 4, color: theme.palette.text.primary }}>
            Stable (LTS)
          </Typography>
          <Typography paragraph sx={{ mb: 3, fontWeight: 550, fontSize: '1.1rem', color: theme.palette.text.secondary }}>
            Long-Term Support (LTS) release baselines are chosen every 12 weeks from the stream of regular releases.
            Every 4 weeks we release stable releases which include bug and security fix backports.
            <Link href="/lts" sx={{ ml: 1 }}>Learn more…</Link>
          </Typography>
          <Box sx={{ 
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '30px',
            '@media screen and (max-width: 768px)': {
              flexDirection: 'column'
            }
          }}>
            {/* Changelog Button */}
            <Button 
              variant="contained" 
              href="/changelog-stable" 
              disableElevation
              sx={{ 
                textTransform: 'none',
                background: 'rgba(10, 110, 255, 0.08)',
                color: '#0A6EFF',
                '&:hover': {
                  background: 'rgba(10, 110, 255, 0.12)'
                }
              }}
            >
              Changelog
            </Button>
            
            {/* Upgrade Guide Button */}
            <Button 
              variant="outlined" 
              href="/doc/upgrade-guide" 
              sx={{ 
                textTransform: 'none',
                borderColor: theme.palette.divider,
                color: theme.palette.text.primary,
                fontWeight: 600,
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.03)' : theme.palette.jenkins.downloadBoxBg,
                '&:hover': {
                  borderColor: theme.palette.divider,
                  background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : theme.palette.jenkins.downloadBoxHover
                }
              }}
            >
              Upgrade Guide
            </Button>
            
            {/* Past Releases Button */}
            <Button 
              variant="outlined" 
              href="https://get.jenkins.io/war-stable/" 
              sx={{ 
                textTransform: 'none',
                borderColor: theme.palette.divider,
                color: theme.palette.text.primary,
                fontWeight: 600,
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.03)' : theme.palette.jenkins.downloadBoxBg,
                '&:hover': {
                  borderColor: theme.palette.divider,
                  background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : theme.palette.jenkins.downloadBoxHover
                }
              }}
            >
              Past Releases
            </Button>
          </Box>
        </Box>

        {/* Weekly Releases Section */}
        <Box>
          <Typography variant="h4" sx={{ fontSize: '1.45rem', fontWeight: 800, mb: 4, color: theme.palette.text.primary }}>
            Weekly releases
          </Typography>
          <Typography paragraph sx={{ mb: 3, fontWeight: 550, fontSize: '1.1rem', color: theme.palette.text.secondary }}>
            This release line delivers bug fixes and new features rapidly to users and plugin developers who need them.
            It is generally delivered on a weekly cadence.
            <Link href="/weekly" sx={{ ml: 1 }}>Learn more…</Link>
          </Typography>
          <Box sx={{ 
            display: 'flex',
            gap: '10px',
            marginBottom: '30px',
            '@media screen and (max-width: 768px)': {
              flexDirection: 'column'
            }
          }}>
            {/* Weekly Changelog Button */}
            <Button 
              variant="contained" 
              href="/changelog" 
              disableElevation
              sx={{ 
                textTransform: 'none',
                background: 'rgba(10, 110, 255, 0.08)',
                color: '#0A6EFF',
                '&:hover': {
                  background: 'rgba(10, 110, 255, 0.12)'
                }
              }}
            >
              Changelog
            </Button>
            
            {/* Weekly Past Releases Button */}
            <Button 
              variant="outlined" 
              href="https://get.jenkins.io/war/" 
              sx={{ 
                textTransform: 'none',
                borderColor: theme.palette.divider,
                color: theme.palette.text.primary,
                fontWeight: 600,
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.03)' : theme.palette.jenkins.downloadBoxBg,
                '&:hover': {
                  borderColor: theme.palette.divider,
                  background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : theme.palette.jenkins.downloadBoxHover
                }
              }}
            >
              Past Releases
            </Button>
          </Box>
        </Box>
      </Box>

      <Typography variant="h2" component="h2" gutterBottom sx={{
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontWeight: 800,
        fontSize: '1.8rem',
        marginBottom: '1.5rem',
        color: theme.palette.text.primary
      }}>
        Downloading Jenkins
      </Typography>

      <Typography paragraph sx={{
        fontSize: '1.1rem',
        lineHeight: '1.6',
        marginBottom: '2rem',
        fontWeight: 550,
        mb: 1,
        color: theme.palette.text.secondary
      }}>
        Jenkins is distributed as WAR files, native packages, installers, and Docker images.
        Follow these installation steps:
      </Typography>

      <List dense sx={{ mb: 2, pl: 2 }}>
        {[...Array(4)].map((_, i) => (
          <ListItem
            key={i}
            sx={{
              display: 'list-item',
              p: 0,
              mb: i !== 3 ? '0.4rem' : 0,
            }}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontSize: '1.05rem',
                  lineHeight: 1.5,
                  fontWeight: 550,
                  color: theme.palette.text.secondary,
                },
              }}
              primary={
                i === 0 ? (
                  <>
                    1. Before downloading, please take a moment to review the{' '}
                    <Link href="/doc/book/installing/#prerequisites">
                      Hardware and Software requirements
                    </Link>{' '}
                    section of the User Handbook.
                  </>
                ) : i === 1 ? (
                  '2. Select one of the packages below and follow the download instructions.'
                ) : i === 2 ? (
                  <>
                    3. Once a Jenkins package has been downloaded, proceed to the{' '}
                    <Link href="/doc/book/getting-started/installing/">
                      Installing Jenkins
                    </Link>{' '}
                    section of the User Handbook.
                  </>
                ) : (
                  <>
                    4. You may also want to verify the package you downloaded.{' '}
                    <Link href="/download/verify">
                      Learn more about verifying Jenkins downloads.
                    </Link>
                  </>
                )
              }
            />
          </ListItem>
        ))}
      </List>


      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        margin: '10px 0 20px 0'
      }}>
        {/* LTS Column */}
        <Box>
          <Typography variant="h4" sx={{
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            marginBottom: '1.5rem',
            color: theme.palette.text.primary
          }}>
            Download Jenkins {stable} LTS for:
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* .war package */}
            <Button 
              fullWidth 
              variant="outlined" 
              href={`https://get.jenkins.io/war-stable/${stable}/jenkins.war`}
              sx={{ 
                mb: '1px',
                justifyContent: 'flex-start',
                textTransform: 'none',
                textAlign: 'left',
                p: 2,
                backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.jenkins.downloadBoxBg,
                borderColor: theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.jenkins.downloadBoxBorder,
                borderRadius: 1.5,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.jenkins.downloadBoxHover,
                }
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Typography sx={{
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: theme.palette.text.primary
                }}>Generic Java package (.war)</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Typography variant="caption" sx={{ mr: 1, color: theme.palette.text.secondary }}>
                    SHA-256: {dataToUse.stableSha256}
                  </Typography>
                  <Tooltip title="Copy to clipboard">
                    <IconButton 
                      size="small" 
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(dataToUse.stableSha256);
                      }}
                      sx={{
                        padding: '4px',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.05)'
                        }
                      }}
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Button>

            {/* LTS platform buttons */}
            {ltsReleases.map((release, index) => (
              <Button
                key={index}
                fullWidth
                variant="text"
                href={release.href}
                sx={{ 
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  textAlign: 'left',
                  p: 2,
                  mb: '1px',
                  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.jenkins.downloadBoxBg,
                  borderRadius: 1.5,
                  boxShadow: `inset 0 0 0 1px ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : theme.palette.jenkins.downloadBoxBorder}`,
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.jenkins.downloadBoxHover
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {release.icon}
                  <Typography sx={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: theme.palette.text.primary
                  }}>
                    {release.title}
                    {release.thirdParty && (
                      <Typography component="span" sx={{ ml: 1, fontSize: '0.75rem', fontWeight: 400 }}>
                        (Third party)
                      </Typography>
                    )}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Box>
        </Box>

        {/* Weekly Column */}
        <Box>
          <Typography variant="h4" sx={{
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            marginBottom: '1.5rem',
            color: theme.palette.text.primary
          }}>
            Download Jenkins {latest} for:
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* .war package */}
            <Button 
              fullWidth 
              variant="outlined" 
              href={`https://get.jenkins.io/war/${latest}/jenkins.war`}
              sx={{ 
                mb: '1px',
                justifyContent: 'flex-start',
                textTransform: 'none',
                textAlign: 'left',
                p: 2,
                backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.jenkins.downloadBoxBg,
                borderColor: theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.jenkins.downloadBoxBorder,
                borderRadius: 1.5,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.jenkins.downloadBoxHover
                }
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Typography sx={{
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: theme.palette.text.primary
                }}>Generic Java package (.war)</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Typography variant="caption" sx={{ mr: 1, color: theme.palette.text.secondary }}>
                    SHA-256: {dataToUse.weeklySha256}
                  </Typography>
                  <Tooltip title="Copy to clipboard">
                    <IconButton 
                      size="small" 
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(dataToUse.weeklySha256);
                      }}
                      sx={{
                        padding: '4px',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.05)'
                        }
                      }}
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Button>

            {/* Weekly platform buttons */}
            {weeklyReleases.map((release, index) => (
              <Button
                key={index}
                fullWidth
                variant="text"
                href={release.href}
                sx={{ 
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  textAlign: 'left',
                  p: 2,
                  mb: '1px',
                  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.jenkins.downloadBoxBg,
                  borderRadius: 1.5,
                  boxShadow: `inset 0 0 0 1px ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : theme.palette.jenkins.downloadBoxBorder}`,
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.jenkins.downloadBoxHover
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {release.icon}
                  <Typography sx={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: theme.palette.text.primary
                  }}>
                    {release.title}
                    {release.thirdParty && (
                      <Typography component="span" sx={{ ml: 1, fontSize: '0.75rem', fontWeight: 400 }}>
                        (Third party)
                      </Typography>
                    )}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      <Typography paragraph sx={{ mb: 7, fontWeight: 550,fontSize: '1.1rem', color: theme.palette.text.secondary  }}>
        Packages marked third party may not be updated as frequently as packages supported by the Jenkins project directly.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom sx={{
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontWeight: 800,
        fontSize: '1.8rem',
        marginBottom: '1.5rem',
        color: theme.palette.text.primary
      }}>
        Deploying Jenkins in public cloud
      </Typography>

      <Typography paragraph sx={{ mb: 3, fontWeight: 550,fontSize: '1.1rem', color: theme.palette.text.secondary }}>
        Many public cloud vendors provide their own Jenkins installation guides and packages.
        The guides provide instructions to deploy, maintain, and upgrade on the specific public cloud.
        Such guides may be used to quickly deploy Jenkins and, in many cases,
        to get a controller preconfigured to be used within the public cloud
        (e.g. bundled plugins, integrations with public cloud services, etc.).
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          mb: 4,
        }}
      >
        {clouds.map((cloud, index) => {
          const baseBg = cloud.background;
          const hoverBg = tinycolor(baseBg).darken(10).toString();
          const textColor = theme.palette.text.primary;

          return (
            <Paper
              key={index}
              component={Link}
              href={cloud.href}
              target="_blank"
              rel="noopener"
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                backgroundColor: baseBg,
                textDecoration: 'none',
                transition: 'background-color 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: hoverBg,
                  textDecoration: 'none',
                },
              }}
            >
              {/* Icon + Title */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box
                  component="img"
                  src={cloud.icon.props.src}
                  alt={`${cloud.title} icon`}
                  sx={{ width: 48, height: 48 }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: textColor,
                  }}
                >
                  {cloud.title}
                </Typography>
              </Box>

              {/* Learn More */}
              <Box
                sx={{
                  mt: 'auto',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  color: textColor,
                  gap: 0.5,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: textColor,
                    textDecoration: 'none',
                  },
                  '&:hover > div': {
                    transform: 'translateX(4px)',
                    transition: 'transform 0.2s ease',
                  },
                }}
              >
                Learn more
                <Box sx={{ fontSize: '1.1rem', lineHeight: 1 }}>→</Box>
              </Box>
            </Paper>
          );
        })}
      </Box>
      <ThankYouBlock />
    </Box>
  );
};

export default DownloadPage;
