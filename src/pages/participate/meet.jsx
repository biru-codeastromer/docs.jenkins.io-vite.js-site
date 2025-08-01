import { Box, Typography, Link, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Helmet } from 'react-helmet-async';


const MeetPage = () => {
  const theme = useTheme();

  const sharedListStyles = {
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
      color: theme.palette.text.primary,
    },
  };

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
        <title>Jenkins Meetups and Events</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Meet
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        There are many Jenkins-related events happening around the world: meetups, conferences, contributor summits, etc.
        You are welcome to join any of these events and meet other Jenkins contributors and users there.
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We publish events on the <Link href="/events/">Events page</Link> and in our <Link href="/event-calendar/">event calendar</Link>, but not all events are listed there.
        Below you can find links to some of Jenkins-related events you can attend.
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
        Online events
      </Typography>
      
      <List dense sx={sharedListStyles}>
        <ListItem>
          <ListItemText primary={<Link href="https://www.meetup.com/Jenkins-online-meetup/">Jenkins Online Meetup</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="/sigs">Special Interest Group</Link>} />
          <ListItemText secondary="and sub-project meetings" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Webinars organized by different communities and companies" />
        </ListItem>
      </List>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 1,
        }}
      >
        Local events
      </Typography>
      
      <List dense sx={sharedListStyles}>
        <ListItem>
          <ListItemText primary={<Link href="/projects/jam">Jenkins Area Meetups</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://www.meetup.com/pro/cicd-cdf/">Continuous Delivery Foundation CI/CD Meetups</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://www.cloudbees.com/devops-world">DevOps World | Jenkins World conferences</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Conferences and summits organized by Continuous Delivery Foundation:" />
          <ListItemText secondary={<Link href="https://cd.foundation/events/list/">events list</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={
            <>
              <Link href="https://www.socallinuxexpo.org">Southern California Linux Expo (SCALE)</Link>,{' '}
              <Link href="https://fosdem.org">Free and Open source Software Developers' European Meeting (FOSDEM)</Link>, and other community-focused conferences
            </>
          } />
        </ListItem>
      </List>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 1,
        }}
      >
        Organizing events
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        There are many community events, and we are always looking for more organizers!
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <b>Events we organize:</b><br />
        Our events include <Link href="/projects/jam">Jenkins Area Meetup</Link>, <Link href="https://www.meetup.com/pro/cicd-cdf/">Continuous Delivery Foundation CI/CD Meetups</Link>, and
        <Link href="/events/contributor-summit">contributor summits</Link>.
        We also participate in conferences like <Link href="/events/fosdem">FOSDEM</Link> or <Link href="https://events.linuxfoundation.org/cdcon/">cdCon</Link>,
        and we commonly have a booth and multiple sessions at these events.
        There are also many <Link href="/sigs/advocacy-and-outreach/outreach-programs/">outreach and mentorship programs</Link> we organize.
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <b>How to help:</b><br />
        You could help with any event!
        If you are interested in organizing an event, please reach out to the <Link href="/sigs/advocacy-and-outreach/">Advocacy and Outreach SIG</Link>.
        You can also find an introductory presentation
        <Link href="https://docs.google.com/presentation/d/1bhV2aOiFLq0MyE6LM24lcrTkA1XFi-55-J65sak3nKA/edit?usp=sharing">here</Link>
      </Typography>
      
      <Box sx={{ my: 4 }}>
        <iframe 
          width="640" 
          height="360" 
          src="https://www.youtube.com/embed/gQKbJoNbTpA" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 1,
        }}
      >
        Gallery
      </Typography>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>Jenkins Contributor Summit, 2018:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img 
            src="/assets/events/conferences/contributor_summit_sf.jpg" 
            alt="Jenkins Contributor Summit, 2018" 
            style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto' }}
          />
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>Jenkins World | DevOps World, 2019:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img 
            src="/assets/events/jenkinsworld2019/1D5_1376.jpg" 
            alt="Jenkins World 2019" 
            style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto 1rem' }}
          />
          <img 
            src="/assets/events/role-strategy-performance/dwjw-16.jpg" 
            alt="Jenkins World 2019 - Ask the experts" 
            style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto' }}
          />
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>Tolouse Jenkins Area Meetup 2017:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img 
            src="/assets/events/conferences/workshop-overview-3.jpg" 
            alt="Tolouse JAM 2017" 
            style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto' }}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MeetPage;
