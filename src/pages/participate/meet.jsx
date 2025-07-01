import { Box, Typography, Link, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MeetPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Meet
      </Typography>
      
      <Typography paragraph>
        There are many Jenkins-related events happening around the world: meetups, conferences, contributor summits, etc.
        You are welcome to join any of these events and meet other Jenkins contributors and users there.
      </Typography>
      
      <Typography paragraph>
        We publish events on the <Link href="/events/">Events page</Link> and in our <Link href="/event-calendar/">event calendar</Link>, but not all events are listed there.
        Below you can find links to some of Jenkins-related events you can attend.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Online events
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="https://www.meetup.com/Jenkins-online-meetup/">Jenkins Online Meetup</Link></li>
        <li><Link href="/sigs">Special Interest Group</Link> and <Link href="/projects">sub-project</Link> meetings</li>
        <li>Webinars organized by different communities and companies</li>
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Local events
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="/projects/jam">Jenkins Area Meetups</Link></li>
        <li><Link href="https://www.meetup.com/pro/cicd-cdf/">Continuous Delivery Foundation CI/CD Meetups</Link></li>
        <li><Link href="https://www.cloudbees.com/devops-world">DevOps World | Jenkins World conferences</Link></li>
        <li>Conferences and summits organized by Continuous Delivery Foundation: <Link href="https://cd.foundation/events/list/">events list</Link></li>
        <li><Link href="https://www.socallinuxexpo.org">Southern California Linux Expo (SCALE)</Link>, <Link href="https://fosdem.org">Free and Open source Software Developers' European Meeting (FOSDEM)</Link>, and other community-focused conferences</li>
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Organizing events
      </Typography>
      
      <Typography paragraph>
        There are many community events, and we are always looking for more organizers!
      </Typography>
      
      <Typography paragraph>
        <b>Events we organize:</b><br />
        Our events include <Link href="/projects/jam">Jenkins Area Meetup</Link>, <Link href="https://www.meetup.com/pro/cicd-cdf/">Continuous Delivery Foundation CI/CD Meetups</Link>, and
        <Link href="/events/contributor-summit">contributor summits</Link>.
        We also participate in conferences like <Link href="/events/fosdem">FOSDEM</Link> or <Link href="https://events.linuxfoundation.org/cdcon/">cdCon</Link>,
        and we commonly have a booth and multiple sessions at these events.
        There are also many <Link href="/sigs/advocacy-and-outreach/outreach-programs/">outreach and mentorship programs</Link> we organize.
      </Typography>
      
      <Typography paragraph>
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

      <Typography variant="h2" component="h2" gutterBottom>
        Gallery
      </Typography>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Jenkins Contributor Summit, 2018:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img 
            src="/images/conferences/contributor_summit_sf.jpg" 
            alt="Jenkins Contributor Summit, 2018" 
            style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto' }}
          />
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Jenkins World | DevOps World, 2019:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img 
            src="/images/post-images/jenkinsworld2019/1D5_1376.jpg" 
            alt="Jenkins World 2019" 
            style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto 1rem' }}
          />
          <img 
            src="/images/post-images/role-strategy-performance/dwjw-16.jpg" 
            alt="Jenkins World 2019 - Ask the experts" 
            style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto' }}
          />
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Tolouse Jenkins Area Meetup 2017:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img 
            src="/images/post-images/2017-03-toulousejam-workshop/workshop-overview-3.jpg" 
            alt="Tolouse JAM 2017" 
            style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto' }}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MeetPage;