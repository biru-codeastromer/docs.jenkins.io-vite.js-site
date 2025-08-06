import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Link,
  Select,
  MenuItem,
  useTheme,
} from '@mui/material';
import eventsData from './eventsData.json';

export default function EventsIndex() {
  const [timezone, setTimezone] = useState('');
  const [calendarIframe, setCalendarIframe] = useState('');
  const theme = useTheme();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.6/jstz.min.js';
    script.async = true;
    script.onload = () => {
      const deviceTimeZone = window.jstz.determine().name();
      setCalendar(deviceTimeZone);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const setCalendar = (timezone) => {
    const calendarSrc =
      'https://calendar.google.com/calendar/b/1/embed' +
      '?showCalendars=0&height=600&wkst=1&bgcolor=%23FFFFFF&mode=WEEK' +
      '&src=4ss12f0mqr3tbp1t2fe369slf4%40group.calendar.google.com&color=%2329527A' +
      '&ctz=' +
      encodeURIComponent(timezone);

    const iframeHtml = `<iframe src="${calendarSrc}" style="border-width:0; max-width:100%;" width="1024" height="600" frameborder="0" scrolling="no"></iframe>`;
    setCalendarIframe(iframeHtml);
  };

  const handleTimezoneChange = (event) => {
    const newTimezone = event.target.value;
    setTimezone(newTimezone);
    setCalendar(newTimezone || window.jstz.determine().name());
  };

  const now = new Date();
  const upcomingEvents = eventsData.filter((event) => {
    const eventEndTime = event.endDate
      ? new Date(event.endDate)
      : new Date(event.date);
    return eventEndTime > now;
  });

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
        Jenkins Events
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        There are many online and local Jenkins-related events: including conferences,
        meetups, webinars, hackathons, etc.
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
          <Link href="/events/online-meetup" underline="hover">
            Jenkins Online Meetup.
          </Link>{' '}
          Our project has a virtual meetup for users and developers. We organize regular events
          and webinars there.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/projects/jam" underline="hover">
            Local meetups.
          </Link>{' '}
          Jenkins contributors organize many local CI/CD and Jenkins meetups around the world.
          There might be one in your city!
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/events/contributor-summit" underline="hover">
            Contributor Summits.
          </Link>{' '}
          We organize a few contributor summits every year. It brings together current
          community members and future contributors to learn, meet, and help shape the future
          of Jenkins.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/events/devops-world" underline="hover">
            DevOps World.
          </Link>{' '}
          CloudBees organizes the DevOps World conference and includes Jenkins topics in the
          conference agenda.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/events/hacktoberfest" underline="hover">
            Hacktoberfest.
          </Link>{' '}
          Jenkins project is participating in Hacktoberfest.
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
        Major Events
      </Typography>

      {upcomingEvents.length > 0 ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </Box>
      ) : (
        <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500 }}>
          There are no upcoming major events registered in the database. If you see that
          your event is missing, please submit a change to our website.
        </Typography>
      )}

      <Typography variant="body1" sx={{ mb: 2, fontWeight: 500}}>
        <Link
          href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc#adding-an-event"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'> '}How to add an event to the Jenkins website?
        </Link>
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
        Event calendar
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We have a calendar which lists events related to Jenkins, including regular SIG
        and project meetings. This calendar is also available in the{' '}
        <Link href="https://calendar.google.com/calendar/ical/4ss12f0mqr3tbp1t2fe369slf4%40group.calendar.google.com/public/basic.ics">
          .ics format
        </Link>
      </Typography>

      <Box
        id="calendar-container"
        dangerouslySetInnerHTML={{ __html: calendarIframe }}
        sx={{
          mt: 2,
          mb: 4,
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden',
          maxWidth: '100%',
        }}
      />

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500 }}>
          View calendar using TimeZone:
        </Typography>
        <Select
          id="selected_timezone"
          value={timezone}
          onChange={handleTimezoneChange}
          sx={{ ml: 2, minWidth: 160, fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', '& .MuiSelect-select': { color: theme.palette.text.primary} }}
          size="small"
          displayEmpty
        >
          <MenuItem value="" sx={{ color: theme.palette.text.primary }}>(auto)</MenuItem>
          <MenuItem value="GMT">GMT</MenuItem>
          <MenuItem value="CET">CET</MenuItem>
          <MenuItem value="America/New_York">US Eastern</MenuItem>
          <MenuItem value="America/Los_Angeles">US Pacific</MenuItem>
          <MenuItem value="Asia/Tokyo">Tokyo</MenuItem>
          <MenuItem value="Asia/Shanghai">Shanghai</MenuItem>
        </Select>
      </Box>

    </Box>
  );
}

function EventCard({ event }) {
  const eventTime = new Date(event.date);

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
        border: '1px solid #eee',
        borderRadius: 2,
        p: 2,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      }}
    >
      <Link
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        color="inherit"
      >
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {eventTime.toLocaleString('default', { month: 'short' })}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {eventTime.getDate()}
          </Typography>
          <Typography variant="subtitle2">
            {eventTime.toLocaleString('default', { weekday: 'short' })}
          </Typography>
          <Typography variant="body2">
            {eventTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {event.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {event.location}
        </Typography>
        {event.raw_content && (
          <Typography variant="body2" color="text.secondary">
            {event.raw_content}
          </Typography>
        )}
      </Link>
    </Box>
  );
}
