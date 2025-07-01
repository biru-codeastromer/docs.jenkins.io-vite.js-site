import { Box, Typography, Link } from '@mui/material';

const TestPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Testing
      </Typography>
      
      <Typography paragraph>
        NOTE: This page is under development, there will be more content added soon.
        See the <Link href="https://issues.jenkins.io/browse/WEBSITE-662">WEBSITE-662</Link> EPIC for tasks related to this page, contributions are welcome!
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Automated Testing
      </Typography>
      
      <Typography variant="h3" component="h3" gutterBottom>
        Jenkins Code
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="https://github.com/jenkinsci/jenkins/blob/master/CONTRIBUTING.md#testing-changes">Unit Tests and Integration Tests</Link></li>
        <li><Link href="https://github.com/jenkinsci/acceptance-test-harness/blob/master/README.md">Acceptance Test Harness</Link></li>
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Jenkins Plugins
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li>Unit and integration tests with the <Link href="/doc/developer/testing/">Jenkins Test Harness</Link></li>
        <li>Compatibility tests with the <Link href="https://github.com/jenkinsci/plugin-compat-tester/blob/master/README.md">Plugin Compatibility Tester</Link></li>
        <li>Performance comparison tests with the <Link href="/doc/developer/testing/#performance-testing">Java Microbenchmark Harness</Link></li>
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Manual Testing
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="/participate/how-to-guides/">How-To guides</Link></li>
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Jenkins Code
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li>Pull Requests - <Link href="https://ci.jenkins.io/job/Core/job/jenkins/view/change-requests/">https://ci.jenkins.io/job/Core/job/jenkins/view/change-requests/</Link></li>
        <li>Weekly Release - <Link href="/download/">weekly downloads</Link></li>
        <li>Quarterly Long Term Support Release Candidate - <Link href="http://mirrors.jenkins.io/war-stable-rc/">http://mirrors.jenkins.io/war-stable-rc/</Link></li>
        <li>Quarterly Long Term Support Release - <Link href="/download/">LTS downloads</Link></li>
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Jenkins Plugins
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li>Pull request builds from <Link href="https://ci.jenkins.io/job/Plugins/">ci.jenkins.io</Link></li>
      </Typography>
    </Box>
  );
};

export default TestPage;