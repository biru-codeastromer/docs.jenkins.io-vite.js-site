import { Box, Typography, Link } from '@mui/material';

const HelpPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Help
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Helping Jenkins Users
      </Typography>
      
      <Typography paragraph>
        There are many platforms and channels where you can help jenkins users.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Mailing Lists, Chats/Interest Groups, How-To Guides
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="/mailing-lists">Mailing Lists</Link></li>
        <li><Link href="https://community.jenkins.io">Forum</Link></li>
        <li><Link href="/chat/">Gitter rooms and IRC channels</Link></li>
        <li><Link href="/sigs/">Special Interest Groups</Link></li>
        <li><Link href="/participate/how-to-guides/">How-To Guides</Link></li>
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Social Platforms
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="https://twitter.com/jenkinsci">Jenkins on Twitter</Link></li>
        <li><Link href="https://www.facebook.com/jenkins.io">Jenkins on Facebook</Link></li>
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Professional Sites
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="https://stackoverflow.com/tags/jenkins">Jenkins on StackOverflow</Link></li>
        <li><Link href="https://community.jenkins.io">Jenkins Forum</Link></li>
        <li><Link href="https://issues.jenkins.io/secure/BrowseProjects.jspa">Jenkins Projects</Link></li>
        <li><Link href="https://community.atlassian.com/t5/tag/jenkins/tg-p">Jenkins on Atlassian Community</Link></li>
        <li><Link href="https://www.quora.com/topic/Jenkins">Jenkins on Quora</Link></li>
        <li><Link href="https://www.reddit.com/r/jenkinsci">jenkinsci on Reddit</Link></li>
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Many Other Links
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="https://stackshare.io/jenkins">jenkins on Stackshare</Link></li>
      </Typography>
    </Box>
  );
};

export default HelpPage;