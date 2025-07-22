import React from 'react';
import { Typography, Box, Link, List, ListItem, useTheme } from '@mui/material';

export default function OnlineMeetup() {
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
        Jenkins Online Meetup
      </Typography>

      <Typography
        variant="body1"
        sx={{ fontSize: '1rem', fontWeight: 500, mb: 3 }}
      >
        Our project has a{' '}
        <Link
          href="https://www.meetup.com/Jenkins-online-meetup/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          virtual meetup group
        </Link>{' '}
        for users and developers around the world. The aim of this group is to conduct regular
        online webinars about Jenkins. We record these meetups and publish them on{' '}
        <Link
          href="https://www.youtube.com/playlist?list=PLN7ajX_VdyaOfwJ-BMZo_JNTIMCMNxlbN"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          our YouTube Channel
        </Link>. The majority of the online meetups are held in English, but we also host virtual
        events in other languages.
      </Typography>

      <Box
        component="img"
        src="/assets/events/256.png"
        alt="Jenkins Online Meetup logo"
        sx={{
          width: 190,
          height: 'auto',
          display: 'block',
          mx: 0,
          mb: 3,
        }}
      />

      <Typography
        variant="body1"
        sx={{ fontSize: '1rem', fontWeight: 500, mb: 3 }}
      >
        The meetup is managed under the umbrella of the{' '}
        <Link href="/sigs/advocacy-and-outreach" underline="hover">
          Jenkins Advocacy and Outreach
        </Link>{' '}
        special interest group.
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
        Areas of interest
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Areas of interest for this meetup include but not limited to...
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
        <li style={{ marginBottom: '0.5rem' }}>Case studies and war stories from Jenkins users</li>
        <li style={{ marginBottom: '0.5rem' }}>Jenkins features and plugins: new releases, live demos, etc.</li>
        <li style={{ marginBottom: '0.5rem' }}>Integrations of 3rd party tools and services with Jenkins</li>
        <li style={{ marginBottom: '0.5rem' }}>Jenkins on classic and cloud platforms (e.g. Docker, Kubernetes or Windows)</li>
        <li style={{ marginBottom: '0.5rem' }}>Jenkins development and developer tools</li>
        <li style={{ marginBottom: '0.5rem' }}>
          Key public events related to the <Link href="/project/governance" underline="hover">Jenkins governance</Link>
        </li>
      </ul>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
      >
        Speaking
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We invite everyone to present at our online meetup, any topic about Jenkins would be welcome!
        For applications we prefer to follow a public and informal process.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Application steps:
      </Typography>
      <ol
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
        <li style={{ marginBottom: '0.5rem' }}>Prepare a Google Doc with your talk title, abstract and short bio</li>
        <li style={{ marginBottom: '0.5rem' }}>Make this Google Doc available for public view and comments</li>
        <li style={{ marginBottom: '0.5rem' }}>
          Post a message on the{' '}
          <Link href="https://groups.google.com/g/jenkins-advocacy-and-outreach-sig" target="_blank" rel="noopener noreferrer" underline="hover">
            Advocacy and Outreach SIG forum
          </Link>
          <br />
          <Typography component="span" variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
            • Title: <code style={{ color: 'red' }}>Online Meetup application - ${'Presentation Title'}</code>
            <br />
            • Message body should contain a link to the created Google Doc and a short cover letter explaining what you would like to present and what would be the preferred presentation dates
          </Typography>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Process feedback from reviewers and coordinate the meetup with them</li>
      </ol>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you are not comfortable with a public review process, please reach out to online meetup organizers using the <code style={{ color: 'red' }}>Contact organizers</code> form on{' '}
        <Link href="https://www.meetup.com/Jenkins-online-meetup/" target="_blank" rel="noopener noreferrer" underline="hover">
          our meetup.com page
        </Link>.
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
        Hosting meetups
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We are ready to help meetup organizers, users and contributors who want to host virtual events about Jenkins.
        Jenkins Online Meetup team is ready to provide a platform for such meetups and to help with their hosting.
        If you are interested, please contact us using the{' '}
        <Link href="https://groups.google.com/g/jenkins-advocacy-and-outreach-sig" target="_blank" rel="noopener noreferrer" underline="hover">
          Advocacy and Outreach SIG forum
        </Link>.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        What do we offer?
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
          Hosting of the meetup on the Zoom Webinar platform. We support up to 500 participants, multiple presenters, Q&A, online polls, and other features available in Zoom
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Meetup hosts. We have a number of Jenkins contributors who volunteer to host the meetups if needed</li>
        <li style={{ marginBottom: '0.5rem' }}>Promotion through Jenkins resources and social media channels (meetup.com, Twitter, LinkedIn, etc.)</li>
        <li style={{ marginBottom: '0.5rem' }}>
          Publishing of the recordings on the{' '}
          <Link href="https://www.youtube.com/playlist?list=PLN7ajX_VdyaOfwJ-BMZo_JNTIMCMNxlbN" target="_blank" rel="noopener noreferrer" underline="hover">
            Jenkins YouTube channel
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Anonymous feedback forms for organizers and speakers</li>
      </ul>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
      >
        Resources
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
          <Link href="https://www.meetup.com/Jenkins-online-meetup/" target="_blank" rel="noopener noreferrer" underline="hover">
            Jenkins Online Meetup page on meetup.com
          </Link>{' '}
          - You can find the upcoming events there
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.youtube.com/playlist?list=PLN7ajX_VdyaOfwJ-BMZo_JNTIMCMNxlbN" target="_blank" rel="noopener noreferrer" underline="hover">
            Online Meetup recordings
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://github.com/jenkinsci/jep/tree/master/jep/13" target="_blank" rel="noopener noreferrer" underline="hover">
            JEP-13: Jenkins YouTube Channel Policy for Contributors
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/conduct" underline="hover">
            Jenkins Code of Conduct
          </Link>{' '}
          - All events on the Jenkins meetup must adhere to the project's code of conduct
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/projects/jam" underline="hover">
            Local Jenkins meetups
          </Link>{' '}
          - For those who want to organize local events
        </li>
      </ul>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
      >
        Sponsors
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Our meetup.com page and Zoom account are sponsored by the{' '}
        <Link href="https://cd.foundation/" target="_blank" rel="noopener noreferrer" underline="hover">
          Continuous Delivery Foundation (CDF)
        </Link>.
        We thank the CDF and all foundation members for making our online meetups possible.
      </Typography>
    </Box>
  );
}
