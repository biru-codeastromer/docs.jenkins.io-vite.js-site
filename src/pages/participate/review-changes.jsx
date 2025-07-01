import { Box, Typography, Link } from '@mui/material';

const ReviewChangesPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Review Changes
      </Typography>
      
      <Typography paragraph>
        Help us to review changes to code or documentation!
        All pull requests within Jenkins GitHub organizations are publicly open for reviews and any reviews are much appreciated.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Code Reviews and Copy Editing
      </Typography>
      
      <Typography paragraph>
        Contributors and component maintainers may explicitly request reviews from other community members.
        Below there are some queries which can help to find open pull requests where help is needed:
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+is%3Aopen+is%3Apr+team-review-requested%3Ajenkins-infra%2Fcopy-editors">Open pull requests for copy editing</Link>, mostly for Jenkins website</li>
        <li><Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+is%3Aopen+is%3Apr+%22jenkinsci%2Fcode-reviewers%22&type=Issues">Open pull requests for code reviews</Link> (<Link href="https://github.com/orgs/jenkinsci/teams/code-reviewers">@jenkinsci/code-reviewers</Link> team is mentioned)</li>
        <li><Link href="https://github.com/jenkinsci/jenkins/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+-label%3Astalled+-label%3Awork-in-progress+-label%3Aneeds-fix">Open pull requests for code reviews in the Jenkins Core</Link> which would benefit from reviews</li>
      </Typography>
      
      <Typography paragraph>
        <b>NOTE:</b> You will only be able to see the linked teams if you belong to the corresponding GitHub Team.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Reviewer team membership
      </Typography>
      
      <Typography paragraph>
        If you are interested to join a reviewers team,
        you can request membership in the <Link href="https://groups.google.com/g/jenkinsci-dev">Jenkins Developer mailing list</Link>.
        You can also request membership in the GitHub web interface if you are already a member of the respective GitHub organization.
      </Typography>
      
      <Typography paragraph>
        Reviewer team links (GitHub permissions required to view teams):
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="https://github.com/orgs/jenkins-infra/teams/copy-editors">Copy Editors team</Link> - Jenkins website and documentation hosted there</li>
        <li><Link href="https://github.com/orgs/jenkinsci/teams/code-reviewers">Code Reviewers team</Link> - Jenkins plugins and other components</li>
        <li><Link href="https://github.com/orgs/jenkinsci/teams/core-pr-reviewers">Core Reviewers team</Link> - Jenkins Core and its modules/libraries</li>
      </Typography>
      
      <Typography paragraph>
        Membership in all teams requires a track of contributions to Jenkins, and also a signed <Link href="https://github.com/jenkinsci/infra-cla">Contributor License Agreement</Link>.
      </Typography>
    </Box>
  );
};

export default ReviewChangesPage;