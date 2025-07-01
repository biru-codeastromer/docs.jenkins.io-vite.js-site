import { Box, Typography, Link } from '@mui/material';

const ConnectPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Get connected with the Jenkins community!
      </Typography>
      
      <Typography paragraph>
        There are many ways to connect to the Jenkins community!
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Follow us on social media
      </Typography>
      
      <Typography paragraph>
        We do our best to spread the word about Jenkins in social media.
        It helps us to communicate the Jenkins vision, highlight achievements, and attract new contributors.
        Follow us and share the posts with your network!
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li>
          <b>Twitter:</b> <Link href="https://twitter.com/jenkinsci">@jenkinsci</Link>,{' '}
          <Link href="https://twitter.com/jenkins_release">@jenkins_release</Link>,
          and other local and language group community channels.
        </li>
        <li>
          <b>LinkedIn:</b> <Link href="https://www.linkedin.com/company/jenkins-project">Jenkins Project</Link>
        </li>
        <li>
          <b>YouTube:</b> <Link href="https://www.youtube.com/c/jenkinscicd">Official Jenkins channel</Link>
        </li>
        <li>
          <b>Discourse:</b> <Link href="https://community.jenkins.io/">community.jenkins.io</Link>
        </li>
        <li>
          <b>Reddit:</b> <Link href="https://www.reddit.com/r/jenkinsci/">/r/jenkinsci</Link>
        </li>
      </Typography>
      
      <Typography paragraph>
        Want to help with managing our social media?
        Join the <Link href="/sigs/advocacy-and-outreach/#social-media">Advocacy and Outreach SIG</Link> that coordinates the effort!
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Join our chats and forums
      </Typography>
      
      <Typography paragraph>
        There are many communication channels in the Jenkins community and its entities.
        You are welcome to join these channels and participate in discussions.
        Here are the key ones:
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="/mailing-lists">Mailing lists</Link> - We use mailing lists for async communications and <Link href="/project/governance">open governance</Link>.</li>
        <li><Link href="/chat">Chat: Gitter, IRC, Slack, etc.</Link> - Realtime and async communications in the community.</li>
        <li><Link href="https://community.jenkins.io/">community.jenkins.io</Link> - our new community forum on Discourse.
          Jenkins end users, developers and contributors are welcome!</li>
      </Typography>
      
      <Typography paragraph>
        Refer to <Link href="https://community.jenkins.io/t/all-communication-channels-that-we-are-aware-of/79">the list of communication channels that Jenkins has</Link> for further information.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Join our events!
      </Typography>
      
      <Typography paragraph>
        You can also join our events and <Link href="../meet">meet Jenkins users and contributors!</Link>.
      </Typography>
    </Box>
  );
};

export default ConnectPage;