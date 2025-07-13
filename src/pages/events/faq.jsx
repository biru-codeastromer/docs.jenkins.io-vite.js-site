import React from 'react';
import { Typography, Box, Link, useTheme } from '@mui/material';

export default function HacktoberfestFaq() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: { xs: 2, sm: 4 },
        fontFamily:
          '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        lineHeight: 1.65,
        color: theme.palette.text.primary,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Hacktoberfest in Jenkins FAQ
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        NOTE: You can find Hacktoberfest FAQ{' '}
        <Link href="https://hacktoberfest.com/about/" target="_blank" rel="noopener noreferrer" underline="hover">
          here
        </Link>.
        Below you can find answers to some Jenkins-specific questions.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
      >
        Committers
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        This section provides answers to anyone who wants to participate in Hacktoberfest and
        to submit pull requests to the Jenkins project.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        I am new to Jenkins, how do I start?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you are new to Jenkins,
        you could start by fixing some small and well described issues in the featured projects.
        There are lists of such newbie-friendly issues, see the links in our{' '}
        <Link href="/events/hacktoberfest#featured-projects" underline="hover">
          featured project list
        </Link>.
        You can also submit your own issue and propose a fix.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        How do I mark my pull requests?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        On Oct 03, the Hacktoberfest organizers{' '}
        <Link href="https://hacktoberfest.com/participation/" target="_blank" rel="noopener noreferrer" underline="hover">
          made an update
        </Link>{' '}
        to reduce spam and to introduce maintainer opt-in.
        We follow the same policy in the Jenkins community,
        and we do <strong>NOT</strong> require all maintainers to participate in Hacktoberfest.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We ask contributors to mark their pull requests so that we can help with having proper labels set:
      </Typography>
      <ul
        style={{
          paddingLeft: '1.5rem',
          fontFamily:
            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: '1rem',
          lineHeight: 1.5,
          fontWeight: 500,
          color: theme.palette.text.primary,
        }}
      >
        <li style={{ marginBottom: '0.5rem' }}>
          If a repository already has the <code style={{ color: 'red' }}>hacktoberfest</code> topic set,
          no extra steps required. Just submit a pull request!
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+org%3Ajenkins-zh+topic%3Ahacktoberfest" target="_blank" rel="noopener noreferrer" underline="hover">
                List of repositories marked for Hacktoberfest
              </Link>
            </li>
          </ul>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          If you are not a repository maintainer:
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Add <code style={{ color: 'red' }}>Hacktoberfest</code> to the beginning of your pull request title.</li>
            <li style={{ marginBottom: '0.5rem' }}>
              Reference the pull request in{' '}
              <Link href="https://app.gitter.im/#/room/#jenkinsci_hacktoberfest:gitter.im" target="_blank" rel="noopener noreferrer" underline="hover">
                our Gitter chat
              </Link>.
              We will contact maintainers to get the GitHub topic set.
            </li>
          </ul>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          If you are a repository maintainer, just add the <code style={{ color: 'red' }}>hacktoberfest</code> GitHub topic.
        </li>
      </ul>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        I want to work on my own plugin, is it fine?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Yes, it is fine!
        Any contributions count, your role in a repository does not matter.
        Just make sure you create pull requests instead of direct pushes
        (hint: it's a best practice anyway if you have a CI configured for your repository).
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        How to find documentation?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Jenkins project contains lots of materials about contributing to the project.
        Here are some links which may help:
      </Typography>
      <ul
        style={{
          paddingLeft: '1.5rem',
          fontFamily:
            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: '1rem',
          lineHeight: 1.5,
          fontWeight: 500,
          color: theme.palette.text.primary,
        }}
      >
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/participate/" underline="hover">
            Participate
          </Link>{' '}
          - landing page for newcomer contributors
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/blog/2017/08/07/intro-to-plugin-development/" target="_blank" rel="noopener noreferrer" underline="hover">
            Plugin Development Tutorials
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/doc/developer/" underline="hover">
            Developer Documentation
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://app.gitter.im/#/room/#jenkinsci_hacktoberfest:gitter.im" target="_blank" rel="noopener noreferrer" underline="hover">
            Gitter channel
          </Link>{' '}
          for Q&A
        </li>
      </ul>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Suggested project ideas also have their own documentation to help newcomers.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        How do I get reviews?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        All featured projects are monitored by their maintainers and you will likely get a review within a few days.
        Reviews in other repositories and plugins may take longer.
        In case of delays, ping us in the{' '}
        <Link href="https://matrix.to/#/#jenkinsci_hacktoberfest:gitter.im" target="_blank" rel="noopener noreferrer" underline="hover">
          hacktoberfest
        </Link>{' '}
        channel in Gitter.
        Unmerged pull-requests can also count in Hacktoberfest, as long as it has the <code style={{ color: 'red' }}>hacktoberfest-accepted</code> label and has an approving review, so merge delays won't block you from getting the digital reward.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        I am stuck. How do I get help?
      </Typography>
      <ul
        style={{
          paddingLeft: '1.5rem',
          fontFamily:
            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: '1rem',
          lineHeight: 1.5,
          fontWeight: 500,
          color: theme.palette.text.primary,
        }}
      >
        <li style={{ marginBottom: '0.5rem' }}>
          For general questions (process and general direction) use our{' '}
          <Link href="https://matrix.to/#/#jenkinsci_hacktoberfest:gitter.im" target="_blank" rel="noopener noreferrer" underline="hover">
            Hacktoberfest Gitter channel
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          You can also use other{' '}
          <Link href="/chat" underline="hover">
            chats
          </Link>{' '}
          or{' '}
          <Link href="/mailing-lists/" underline="hover">
            mailing lists
          </Link>.
          Many subprojects also have their own chats, and we encourage using them if you want to reach out to the wider community.
        </li>
      </ul>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        Does Jenkins project send special swag?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        All participants will get the digital rewards directly from the Hacktoberfest organizers if they have created at least 4 pull requests in the month of October.
        The Jenkins project may also distribute some swag to top contributors, depending on the budget and contributions.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
      >
        Event organizers
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        How do I organize a Hacktoberfest event?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you're hosting a Hacktoberfest online meetup related to Jenkins, share it with the rest of the world as a{' '}
        <Link href="/events/online-meetup/" underline="hover">
          Jenkins Online Meetup
        </Link>.
        See our{' '}
        <Link href="/events/hacktoberfest/event-kit" underline="hover">
          Event Kit
        </Link>{' '}
        for more details.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
      >
        Maintainers
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        How do I mark my project as a featured one? 
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        New featured projects are welcome!
        Please submit a pull request to update the{' '}
        <Link href="/events/hacktoberfest" underline="hover">
          Hacktoberfest page
        </Link>{' '}
        to get it added.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Conditions for being added as a featured project:
      </Typography>
      <ul
        style={{
          paddingLeft: '1.5rem',
          fontFamily:
            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: '1rem',
          lineHeight: 1.5,
          fontWeight: 500,
          color: theme.palette.text.primary,
        }}
      >
        <li style={{ marginBottom: '0.5rem' }}>
          There is a commitment from the maintainer(s) to provide timely reviews for incoming PRs
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          There are explicit contributing guidelines for the component
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          There are at least 5 newbie-friendly issues in Jenkins JIRA or GitHub Issues.
          We recommend putting the <code style={{ color: 'red' }}>hacktoberfest</code> label on them as well
        </li>
      </ul>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        How do I join the Hacktoberfest reviewers team?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        You can request joining{' '}
        <Link href="https://github.com/orgs/jenkinsci/teams/hacktoberfest" target="_blank" rel="noopener noreferrer" underline="hover">
          @jenkinsci/hacktoberfest
        </Link>{' '}
        or{' '}
        <Link href="https://github.com/orgs/jenkins-infra/teams/hacktoberfest" target="_blank" rel="noopener noreferrer" underline="hover">
          @jenkins-infra/hacktoberfest
        </Link>{' '}
        from GitHub.
        You need to be a member of a respective GitHub organization to send such request.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
      >
        Organizers
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        How do I get metrics about Hacktoberfest?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Unfortunately there is no way to get organization-wide metrics for Hacktoberfest,
        because the event organizers do not share info about registered users.
        This is why we recommend to mark pull requests with <code style={{ color: 'red' }}>hacktoberfest</code>, <code style={{ color: 'red' }}>hacktoberfest-accepted</code> label or <code style={{ color: 'red' }}>Hacktoberfest</code> in the title.
      </Typography>
    </Box>
  );
}
