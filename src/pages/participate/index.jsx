import { Box, Typography, Paper, Link, useTheme, alpha } from '@mui/material';
import { Helmet } from "react-helmet-async";
import tinycolor from 'tinycolor2';

const ParticipatePage = () => {
  const theme = useTheme();
  
  const data = [
    {
      label: 'Connect',
      description: 'Join our communication channels, discuss and help us spread the word!',
      color: 'blue',
      url: '/participate/connect'
    },
    {
      label: 'Meet',
      description: 'Meet other Jenkins users and share your experiences by organizing and attending events and meetups.',
      color: 'green',
      url: '/participate/meet'
    },
    {
      label: 'Code',
      description: 'Do you enjoy writing code? There are numerous plugins and components for you to contribute to.',
      color: 'yellow',
      url: '/participate/code'
    },
    {
      label: 'Help',
      description: 'As an experienced user, you can help others get the most out of Jenkins.',
      color: 'orange',
      url: '/participate/help'
    },
    {
      label: 'Translate',
      description: "If you're fluent in languages other than English, consider improving support for those languages.",
      color: 'purple',
      url: '/doc/developer/internationalization/'
    },
    {
      label: 'Test',
      description: 'You can help prevent regressions by contributing automated tests.',
      color: 'pink',
      url: '/participate/test'
    },
    {
      label: 'Document',
      description: 'Improve the documentation to make it easier for others to get started.',
      color: 'cyan',
      url: '/participate/document'
    },
    {
      label: 'Design',
      description: 'As it is intended for daily use by finicky web developers, design is essential.',
      color: 'indigo',
      url: '/participate/design'
    },
    {
      label: 'Review',
      description: 'Help review changes to code or documentation.',
      color: 'brown',
      url: '/participate/review-changes'
    },
    {
      label: 'Donate',
      description: 'If you have no time but want to help, we accept money to facilitate project goals.',
      color: 'yellow',
      url: '/donate/'
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
        <title>Participate and Contribute | Jenkins</title>
        <meta name="description" content="There are many ways to engage with the Jenkins project and community. Here are the most common ways to get you started. Welcome aboard!" />
      </Helmet>

      <Typography variant="h1" component="h1" gutterBottom sx={{ 
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontWeight: 800,
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: theme.palette.text.primary
      }}>
        Participate and Contribute
      </Typography>
      
      <Typography paragraph sx={{ 
        fontSize: '1.1rem',
        lineHeight: '1.6',
        marginBottom: '2rem',
        fontWeight: 550,
        color: theme.palette.text.secondary
      }}>
        There are many ways to engage with the Jenkins project and community. Here are the most common ways to get you
        started. Welcome aboard!
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          mb: 4,
        }}
      >
        {data.map((item, index) => {
          const baseColor = theme.palette.jenkins[item.color];
          const baseBg = alpha(baseColor, 0.15);
          const hoverBg = tinycolor(baseBg).darken(10).toString();
          const textColor = tinycolor.mix(baseColor, theme.palette.text.primary, 25).toString();

          return (
            <Paper
              key={index}
              component={Link}
              href={item.url}
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
                border: `1px solid ${theme.palette.divider}`,
                '&:hover': {
                  backgroundColor: hoverBg,
                  textDecoration: 'none',
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  mb: 1.5,
                  color: textColor,
                  fontFamily: theme.typography.fontFamily
                }}
              >
                {item.label}
              </Typography>
              
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  color: textColor,
                  fontWeight: 600,
                  mb: 2,
                  lineHeight: 1.5,
                  fontFamily: theme.typography.fontFamily
                }}
              >
                {item.description}
              </Typography>

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
                  fontFamily: theme.typography.fontFamily,
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

      <Typography paragraph sx={{ 
        fontSize: '1.1rem',
        lineHeight: '1.6',
        fontWeight: 550,
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily
      }}>
        <Box component="span" sx={{ fontWeight: 800 }}>Help and feedback.</Box> Please contact us in the{' '}
        <Link href="https://app.gitter.im/#/room/#jenkinsci_newcomer-contributors:gitter.im" sx={{ color: theme.palette.jenkins.primaryBlue }}>
          Newcomer
        </Link>{' '}
        or{' '}
        <Link href="https://app.gitter.im/#/room/#jenkinsci_advocacy-and-outreach-sig:gitter.im" sx={{ color: theme.palette.jenkins.primaryBlue }}>
          Advocacy and Outreach SIG
        </Link>{' '}
        channels if you have any questions about contributing to Jenkins. See the{' '}
        <Link href="https://www.youtube.com/playlist?list=PLN7ajX_VdyaMsvHNW5JGlGdgJzqJ7Q5Mr" sx={{ color: theme.palette.jenkins.primaryBlue }}>
          Contributing to Jenkins
        </Link>{' '}
        YouTube play list for deep dives into specific areas. Any feedback about the guidelines will be appreciated.
      </Typography>
    </Box>
  );
};

export default ParticipatePage;