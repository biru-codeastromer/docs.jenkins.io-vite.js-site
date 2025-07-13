import { Box, Typography, Link, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const DesignPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: { xs: 2, sm: 4 },
        fontFamily:
          '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        lineHeight: 1.65,
        color: theme.palette.text.primary,
      }}
    >
      <Helmet>
        <title>Jenkins Art and Design</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Art and Design
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        As it is intended for daily use by finicky web developers, Jenkins design and user experience are essential.
        We invite designers to improve Jenkins, its website, and to create new artwork for the project.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 1,
        }}
      >
        Artwork
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Jenkins Area Meetups love special Jenkins art for their meetup, and some plugins are important enough to deserve their own logo. You can check the <Link href="/artwork/">gallery</Link> for some amazing contributions, or propose your own on the <Link href="https://github.com/jenkins-infra/jenkins.io">website repository</Link>.
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <img src="/assets/logos/ice-cream/256.png" alt="Ice cream" width="128" height="128" />
        <img src="/assets/logos/sherlock/256.png" alt="Sherlock" width="128" height="128" />
        <img src="/assets/logos/raleigh/256.png" alt="Raleigh" width="128" height="128" />
        <img src="/assets/logos/kongfu/256.png" alt="Kong-fu" width="128" height="128" />
      </Box>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Useful links:
      </Typography>
      
      <List dense sx={{
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.5,
        listStyleType: 'disc',
        pl: 4,
        '& .MuiListItem-root': {
          display: 'list-item',
          paddingTop: 0,
          paddingBottom: 0,
        },
        '& .MuiTypography-root': {
            fontWeight: 500,
            color: 'black',
        },
      }}>
        <ListItem>
          <ListItemText primary={<Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc#adding-a-logo">Contributing Guidelines: Adding a logo</Link>} />
        </ListItem>
      </List>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 1,
        }}
      >
        Design
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Jenkins itself could also use some eye candy; dive into the <Link href="https://github.com/jenkinsci/jenkins">Jenkins repository</Link> for places to start, or browse the issues on <Link href="https://issues.jenkins.io">Jira</Link>
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        You can also propose your pixel-perfect css improvements and/or images for Jenkins.io on the <Link href="https://github.com/jenkins-infra/jenkins.io">website repository</Link>.
      </Typography>
    </Box>
  );
};

export default DesignPage;
