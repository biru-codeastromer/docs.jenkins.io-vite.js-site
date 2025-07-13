import { Box, Typography, Link, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const ReviewChangesPage = () => {
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
        <title>Review Changes in Jenkins</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Review Changes
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Help us to review changes to code or documentation!
        All pull requests within Jenkins GitHub organizations are publicly open for reviews and any reviews are much appreciated.
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
        Code Reviews and Copy Editing
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Contributors and component maintainers may explicitly request reviews from other community members.
        Below there are some queries which can help to find open pull requests where help is needed:
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
          <ListItemText primary={<Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+is%3Aopen+is%3Apr+team-review-requested%3Ajenkins-infra%2Fcopy-editors">Open pull requests for copy editing</Link>} />
          <ListItemText secondary="mostly for Jenkins website" />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+is%3Aopen+is%3Apr+%22jenkinsci%2Fcode-reviewers%22&type=Issues">Open pull requests for code reviews</Link>} />
          <ListItemText secondary={<Link href="https://github.com/orgs/jenkinsci/teams/code-reviewers">@jenkinsci/code-reviewers</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://github.com/jenkinsci/jenkins/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+-label%3Astalled+-label%3Awork-in-progress+-label%3Aneeds-fix">Open pull requests for code reviews in the Jenkins Core</Link>} />
          <ListItemText secondary="which would benefit from reviews" />
        </ListItem>
      </List>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <b>NOTE:</b> You will only be able to see the linked teams if you belong to the corresponding GitHub Team.
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
        Reviewer team membership
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you are interested to join a reviewers team,
        you can request membership in the <Link href="https://groups.google.com/g/jenkinsci-dev">Jenkins Developer mailing list</Link>.
        You can also request membership in the GitHub web interface if you are already a member of the respective GitHub organization.
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Reviewer team links (GitHub permissions required to view teams):
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
          <ListItemText primary={<Link href="https://github.com/orgs/jenkins-infra/teams/copy-editors">Copy Editors team</Link>} />
          <ListItemText secondary="Jenkins website and documentation hosted there" />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://github.com/orgs/jenkinsci/teams/code-reviewers">Code Reviewers team</Link>} />
          <ListItemText secondary="Jenkins plugins and other components" />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://github.com/orgs/jenkinsci/teams/core-pr-reviewers">Core Reviewers team</Link>} />
          <ListItemText secondary="Jenkins Core and its modules/libraries" />
        </ListItem>
      </List>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Membership in all teams requires a track of contributions to Jenkins, and also a signed <Link href="https://github.com/jenkinsci/infra-cla">Contributor License Agreement</Link>.
      </Typography>
    </Box>
  );
};

export default ReviewChangesPage;
