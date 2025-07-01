import { Box, Typography, Link } from '@mui/material';

const DesignPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Art and Design
      </Typography>
      
      <Typography paragraph>
        As it is intended for daily use by finicky web developers, Jenkins design and user experience are essential.
        We invite designers to improve Jenkins, its website, and to create new artwork for the project.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Artwork
      </Typography>
      
      <Typography paragraph>
        Jenkins Area Meetups love special Jenkins art for their meetup, and some plugins are important enough to deserve their own logo. You can check the <Link href="/artwork/">gallery</Link> for some amazing contributions, or propose your own on the <Link href="https://github.com/jenkins-infra/jenkins.io">website repository</Link>.
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <img src="/images/logos/ice-cream/256.png" alt="Ice cream" width="128" height="128" />
        <img src="/images/logos/sherlock/256.png" alt="Sherlock" width="128" height="128" />
        <img src="/images/logos/raleigh/256.png" alt="Raleigh" width="128" height="128" />
        <img src="/images/logos/kongfu/256.png" alt="Kong-fu" width="128" height="128" />
      </Box>
      
      <Typography paragraph>
        Useful links:
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc#adding-a-logo">Contributing Guidelines: Adding a logo</Link></li>
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Design
      </Typography>
      
      <Typography paragraph>
        Jenkins itself could also use some eye candy; dive into the <Link href="https://github.com/jenkinsci/jenkins">Jenkins repository</Link> for places to start, or browse the issues on <Link href="https://issues.jenkins.io">Jira</Link>
      </Typography>
      
      <Typography paragraph>
        You can also propose your pixel-perfect css improvements and/or images for Jenkins.io on the <Link href="https://github.com/jenkins-infra/jenkins.io">website repository</Link>.
      </Typography>
    </Box>
  );
};

export default DesignPage;