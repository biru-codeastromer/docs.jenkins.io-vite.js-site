import { Box, Typography, Link, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const HelpPage = () => {
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
        <title>Help Jenkins Users</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Help
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
        Helping Jenkins Users
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        There are many platforms and channels where you can help jenkins users.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        Mailing Lists, Chats/Interest Groups, How-To Guides
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
          <ListItemText primary={<Link href="/mailing-lists">Mailing Lists</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://community.jenkins.io">Forum</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="/chat/">Gitter rooms and IRC channels</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="/sigs/">Special Interest Groups</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="/participate/how-to-guides/">How-To Guides</Link>} />
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
        Social Platforms
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
          <ListItemText primary={<Link href="https://twitter.com/jenkinsci">Jenkins on Twitter</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://www.facebook.com/jenkins.io">Jenkins on Facebook</Link>} />
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
        Professional Sites
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
          <ListItemText primary={<Link href="https://stackoverflow.com/tags/jenkins">Jenkins on StackOverflow</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://community.jenkins.io">Jenkins Forum</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://issues.jenkins.io/secure/BrowseProjects.jspa">Jenkins Projects</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://community.atlassian.com/t5/tag/jenkins/tg-p">Jenkins on Atlassian Community</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://www.quora.com/topic/Jenkins">Jenkins on Quora</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://www.reddit.com/r/jenkinsci">jenkinsci on Reddit</Link>} />
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
        Many Other Links
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
          <ListItemText primary={<Link href="https://stackshare.io/jenkins">jenkins on Stackshare</Link>} />
        </ListItem>
      </List>
    </Box>
  );
};

export default HelpPage;