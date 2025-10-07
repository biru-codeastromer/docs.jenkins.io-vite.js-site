import React from 'react';
import { Typography, Box, Link, useTheme } from '@mui/material';
import Note from '../../components/Note';

export default function HacktoberfestEventKit() {
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
        Hacktoberfest. Jenkins Event Kit
      </Typography>

      <Note>
        This page is an extension of the standard{' '}
        <Link href="https://hacktoberfest.com/events/#organizers" target="_blank" rel="noopener noreferrer" underline="hover">
          Hacktoberfest Event Kit
        </Link>.
        Please refer to this page for the base guidelines.
      </Note>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
      >
        Introduction
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Hacktoberfest is an online event,
        but there are many events being organized by open-source communities.
        You can join one of{' '}
        <Link href="https://hacktoberfest.com/events/" target="_blank" rel="noopener noreferrer" underline="hover">
          these events
        </Link>.
        We encourage{' '}
        <Link href="/projects/jam/" underline="hover">
          Jenkins Area Meetup (JAM)
        </Link>{' '}
        organizers and contributors to
        run Jenkins-specific events in October (workshops, hackergartens, hackathons, etc.).
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
        How to organize an event?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you are a meetup organizer, just use your existing{' '}
        <Link href="/projects/jam/" underline="hover">
          Jenkins Area Meetup
        </Link>{' '}
        to run the event.
        Evening events could follow the recommended JAM schedule,
        but it is also possible to organize a full-day event.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you are not a meetup organizer but want to host a meetup,
        please ping us in{' '}
        <Link href="https://app.gitter.im/#/room/#jenkinsci_hacktoberfest:gitter.im" target="_blank" rel="noopener noreferrer" underline="hover">
          our Gitter channel
        </Link>{' '}
        so that we can help with reaching out to meetup organizers.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Steps:
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
        <li style={{ marginBottom: '0.5rem' }}>Find a venue, set the date</li>
        <li style={{ marginBottom: '0.5rem' }}>Schedule a meetup and announce it, preferably as a{' '}
          <Link href="/projects/jam/" underline="hover">
            Jenkins Area Meetup
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Register the meetup on the Hacktoberfest site (see the{' '}
          <Link href="https://hacktoberfest.com/events/#organizers" target="_blank" rel="noopener noreferrer" underline="hover">
            Event Kit
          </Link>)
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Add a meetup to{' '}
          <Link href="/events/hacktoberfest" underline="hover">
            our Hacktoberfest page
          </Link>{' '}
          and
          then add it to the list of events ({' '}
          <Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc#adding-an-event" target="_blank" rel="noopener noreferrer" underline="hover">
            guide
          </Link>{' '}
          ). 
          It can be done in a single pull request.
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
        Sample agenda and resources
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <Link href="https://hacktoberfest.com/events/#organizers" target="_blank" rel="noopener noreferrer" underline="hover">
          Hacktoberfest Event Kit
        </Link>{' '}
        offers a good sample agenda for events, 
        you can stick to it.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        There are few name/topics we advertise:
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
          <strong>Contributing intro meetup</strong> - 
          Meetup with introduction to Hacktoberfest and talks about contributing to Jenkins: 
          how to contribute, success stories, live demos.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Hackathon</strong> - 
          Event where participants split to teams and work together on a limited number of predefined topics (e.g. see{' '}
          <Link href="/events/hacktoberfest/#featured-projects" underline="hover">
            featured projects
          </Link>)
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Hackergarten/workshop</strong> - 
          Hack and study together. 
          Combines show-and-tell presentations and some time for participants to hack something.
          See the{' '}
          <Link href="https://hackergarten.net/" target="_blank" rel="noopener noreferrer" underline="hover">
            Hackergarten
          </Link>{' '}
          page for more info
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Jenkins and Friends</strong> - 
          Joint meetup with other groups and open-source projects. 
          Work together on on integrating your projects with Jenkins or
          adopting modern Jenkins features in your projects,
          e.g. Jenkins Pipeline or Configuration as Code. 
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
        Reusable slidedecks
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Here are some slidedecks which can be used for opening talks and introductions:
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
          <Link href="https://docs.google.com/presentation/d/1_RiCjOrWHCC-w2SwaY7i_jfx8c480oPHwoyI403yAPE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" underline="hover">
            Jenkins in Hacktoberfest 2019
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://docs.google.com/presentation/d/1JHgVzWZAx95IsUAZp8OoyCQGGkrCjzUd7eblwd1Y-hA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" underline="hover">
            Contributing to Jenkins - It Is All About You
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://docs.google.com/presentation/d/1mVS2CRZhh12V4-Oi7PoL5gv9idGetEY09LORmgl1JyM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" underline="hover">
            Hacking Jenkins
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/blog/2017/08/23/pull-requests-and-more/" target="_blank" rel="noopener noreferrer" underline="hover">
            How to contribute to Jenkins if you have a day or just 5 minutes
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://docs.google.com/presentation/d/1A-9znEoysyGujOgDwbiu-Rl1oQUqdxk1RfQJEsyHBfE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" underline="hover">
            Adopt a Plugin slidedeck
          </Link>
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
        Swag
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you organize a meetup,
        Hacktoberfest organizers will send you some swag if you register the event timely.
        See{' '}
        <Link href="https://hacktoberfest.digitalocean.com/#events" target="_blank" rel="noopener noreferrer" underline="hover">
          these events
        </Link>.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Jenkins project will not be able to send Hacktoberfest 2019 swag timely to meetup organizers, but it is possible to print stickers locally.
        Sticker sources can be found on the{' '}
        <Link href="/artwork" underline="hover">
          artwork page
        </Link>{' '}
        and printed locally.
        Please contact the meetup sponsors to cover the production costs.
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
        Useful links
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
          <Link href="https://hacktoberfest.com/events/#organizers" target="_blank" rel="noopener noreferrer" underline="hover">
            Hacktoberfest Event Kit
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/projects/jam/" underline="hover">
            Jenkins Area Meetups sub-project
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.meetup.com/pro/cicd-cdf/" target="_blank" rel="noopener noreferrer" underline="hover">
            List of Jenkins Area Meetups
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/participate/" underline="hover">
            Contributing to Jenkins
          </Link>
        </li>
      </ul>
    </Box>
  );
}
