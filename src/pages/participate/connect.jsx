import { Box, Typography, Link, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const ConnectPage = () => {
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
        <title>Connect with Jenkins Community</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Get connected with the Jenkins community!
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        There are many ways to connect to the Jenkins community!
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
        Follow us on social media
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We do our best to spread the word about Jenkins in social media.
        It helps us to communicate the Jenkins vision, highlight achievements, and attract new contributors.
        Follow us and share the posts with your network!
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
          <ListItemText primary={
            <>
              <b>Twitter:</b> <Link href="https://twitter.com/jenkinsci">@jenkinsci</Link>,{' '}
              <Link href="https://twitter.com/jenkins_release">@jenkins_release</Link>,
              and other local and language group community channels.
            </>
          } />
        </ListItem>
        <ListItem>
          <ListItemText primary={
            <>
              <b>LinkedIn:</b> <Link href="https://www.linkedin.com/company/jenkins-project">Jenkins Project</Link>
            </>
          } />
        </ListItem>
        <ListItem>
          <ListItemText primary={
            <>
              <b>YouTube:</b> <Link href="https://www.youtube.com/c/jenkinscicd">Official Jenkins channel</Link>
            </>
          } />
        </ListItem>
        <ListItem>
          <ListItemText primary={
            <>
              <b>Discourse:</b> <Link href="https://community.jenkins.io/">community.jenkins.io</Link>
            </>
          } />
        </ListItem>
        <ListItem>
          <ListItemText primary={
            <>
              <b>Reddit:</b> <Link href="https://www.reddit.com/r/jenkinsci/">/r/jenkinsci</Link>
            </>
          } />
        </ListItem>
      </List>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Want to help with managing our social media?
        Join the <Link href="/sigs/advocacy-and-outreach/#social-media">Advocacy and Outreach SIG</Link> that coordinates the effort!
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
        Join our chats and forums
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        There are many communication channels in the Jenkins community and its entities.
        You are welcome to join these channels and participate in discussions.
        Here are the key ones:
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
          <ListItemText primary={<Link href="/mailing-lists">Mailing lists</Link>} />
          <ListItemText secondary="We use mailing lists for async communications and open governance." />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="/chat">Chat: Gitter, IRC, Slack, etc.</Link>} />
          <ListItemText secondary="Realtime and async communications in the community." />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://community.jenkins.io/">community.jenkins.io</Link>} />
          <ListItemText secondary="our new community forum on Discourse. Jenkins end users, developers and contributors are welcome!" />
        </ListItem>
      </List>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Refer to <Link href="https://community.jenkins.io/t/all-communication-channels-that-we-are-aware-of/79">the list of communication channels that Jenkins has</Link> for further information.
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
        Join our events!
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        You can also join our events and <Link href="../meet">meet Jenkins users and contributors!</Link>.
      </Typography>
    </Box>
  );
};

export default ConnectPage;