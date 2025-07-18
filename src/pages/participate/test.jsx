import { Box, Typography, Link, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const sharedListStyles = {
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
};

const TestPage = () => {
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
        <title>Jenkins Testing</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Testing
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        NOTE: This page is under development, there will be more content added soon.
        See the <Link href="https://issues.jenkins.io/browse/WEBSITE-662">WEBSITE-662</Link> EPIC for tasks related to this page, contributions are welcome!
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
        Automated Testing
      </Typography>
      
      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        Jenkins Code
      </Typography>
      
      <List dense sx={sharedListStyles}>
        <ListItem>
          <ListItemText primary={<Link href="https://github.com/jenkinsci/jenkins/blob/master/CONTRIBUTING.md#testing-changes">Unit Tests and Integration Tests</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://github.com/jenkinsci/acceptance-test-harness/blob/master/README.md">Acceptance Test Harness</Link>} />
        </ListItem>
      </List>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        Jenkins Plugins
      </Typography>
      
      <List dense sx={sharedListStyles}>
        <ListItem>
          <ListItemText primary="Unit and integration tests with the" />
          <ListItemText secondary={<Link href="/doc/developer/testing/">Jenkins Test Harness</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Compatibility tests with the" />
          <ListItemText secondary={<Link href="https://github.com/jenkinsci/plugin-compat-tester/blob/master/README.md">Plugin Compatibility Tester</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Performance comparison tests with the" />
          <ListItemText secondary={<Link href="/doc/developer/testing/#performance-testing">Java Microbenchmark Harness</Link>} />
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
        Manual Testing
      </Typography>
      
      <List dense sx={sharedListStyles}>
        <ListItem>
          <ListItemText primary={<Link href="/participate/how-to-guides/">How-To guides</Link>} />
        </ListItem>
      </List>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        Jenkins Code
      </Typography>
      
      <List dense sx={sharedListStyles}>
        <ListItem>
          <ListItemText primary="Pull Requests -" />
          <ListItemText secondary={<Link href="https://ci.jenkins.io/job/Core/job/jenkins/view/change-requests/">https://ci.jenkins.io/job/Core/job/jenkins/view/change-requests/</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Weekly Release -" />
          <ListItemText secondary={<Link href="/download/">weekly downloads</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Quarterly Long Term Support Release Candidate -" />
          <ListItemText secondary={<Link href="http://mirrors.jenkins.io/war-stable-rc/">http://mirrors.jenkins.io/war-stable-rc/</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Quarterly Long Term Support Release -" />
          <ListItemText secondary={<Link href="/download/">LTS downloads</Link>} />
        </ListItem>
      </List>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        Jenkins Plugins
      </Typography>
      
      <List dense sx={sharedListStyles}>
        <ListItem>
          <ListItemText primary="Pull request builds from" />
          <ListItemText secondary={<Link href="https://ci.jenkins.io/job/Plugins/">ci.jenkins.io</Link>} />
        </ListItem>
      </List>
    </Box>
  );
};

export default TestPage;
