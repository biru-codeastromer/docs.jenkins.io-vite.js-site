import React from 'react';
import { Typography, Box, Link, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DevOpsWorld() {
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
        DevOps World 2022
      </Typography>

      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Link href="https://www.devopsworld.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/assets/events/conferences/devops-world-2022_825x350.png" 
            alt="DevOps World 2022" 
            style={{ 
              width: 825,
              height: 'auto',
              display: 'block',
              ml: 0,
              mb: 1,
            }}
          />
        </Link>
      </Box>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        DevOps World caters to the full DevOps ecosystem and brings together thought leaders, practitioners and community contributors from around the world.
        It provides attendees the opportunity to learn, explore, network and transform the future of software delivery together.
        Join us in person in Orlando, Florida where ideas and experiences from a wide range of perspectives and viewpoints are shared to give all attendees the insights they need to build and deliver great software.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 1,
        }}
      >
        Registration
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Link href="https://www.devopsworld.com/updates" target="_blank" rel="noopener noreferrer">
          <img 
            src="/assets/events/buttons/sign-up-for-update-button.png" 
            alt="Sign up for updates" 
            style={{ 
              width: 475,
              height: 'auto',
              display: 'block',
              ml: 0,
              mb: 1,
            }}
          />
        </Link>
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
      >
        Discussion channels
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 4,
          mb: 2,
        }}
      >
        Chat
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We have created the <code style={{ color: 'red' }}>#jenkins-at-devops-world</code> channel in the Continuous Delivery Foundation Slack workspace.
        Anyone is welcome to join and participate in the organization, planning, and async conversation.
        <Link href="/chat/#continuous-delivery-foundation" underline="hover">
          How to join the CDF Slack
        </Link>.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 4,
          mb: 2,
        }}
      >
        Discourse
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        You can discuss DevOps World on{' '}
        <Link href="https://community.jenkins.io/" target="_blank" rel="noopener noreferrer" underline="hover">
          community.jenkins.io
        </Link>.
        Please use the <code style={{ color: 'red' }}>devops-world</code> label.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 4,
          mb: 2,
        }}
      >
        Social media
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Please use the <code style={{ color: 'red' }}>#DevOpsWorld</code> hashtag to share about the contributor summit on social media.
        Find posts:
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
          <Link href="https://twitter.com/search?q=DevOpsWorld" target="_blank" rel="noopener noreferrer" underline="hover">
            Twitter Query
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.linkedin.com/search/results/content/?keywords=%22Jenkins%20Contributor%20Summit%22%20OR%20%23DevOpsWOrld%20OR%20%22Jenkins%20project%20contributor%20summit%22&origin=GLOBAL_SEARCH_HEADER&sortBy=%22relevance%22" target="_blank" rel="noopener noreferrer" underline="hover">
            LinkedIn query
          </Link>
        </li>
      </ul>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 4,
          mb: 2,
        }}
      >
        Mailing lists
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We do not use mailing lists actively for this event.
        Should you want to use an email instead of the channels above, please use one of the{' '}
        <Link href="/mailing-lists/" underline="hover">
          Jenkins mailing lists
        </Link>.
        For organization matters, please use the{' '}
        <Link href="/mailing-lists/#jenkins-advocacy-and-outreach-sig-googlegroups-com" underline="hover">
          Adevocacy and Outreach SIG
        </Link>{' '}
        mailing list.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 2,
        }}
      >
        References
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
          <Link href="https://www.cloudbees.com/devops-world-2021/registration" target="_blank" rel="noopener noreferrer" underline="hover">
            Registration
          </Link>
        </li>
      </ul>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 2,
        }}
      >
        Archive
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
        Previous events
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
          <Link href="https://www.jenkins.io/blog/2021/09/21/jenkins-at-devops-world/#content-top" target="_blank" rel="noopener noreferrer" underline="hover">
            DevOps World 2021
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/blog/2020/09/19/jenkins-at-devops-world-2020/" target="_blank" rel="noopener noreferrer" underline="hover">
            DevOps World 2020
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/blog/2020/12/11/devops-world-2020-jenkins-contributors-awarded-top-honors-at-devops-worlds-2020/" target="_blank" rel="noopener noreferrer" underline="hover">
            DevOps World 2020 Contributors Awards
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/blog/2020/02/07/trip-to-dwjw/" target="_blank" rel="noopener noreferrer" underline="hover">
            DevOps World 2019 experience report - Abhyudaya Sharma
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/blog/2019/08/22/devops-world/" target="_blank" rel="noopener noreferrer" underline="hover">
            DevOps World 2019 experience report - Natasha Stopa
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/blog/2020/02/19/jenkins-world-lisbon-with-love-from-india/" target="_blank" rel="noopener noreferrer" underline="hover">
            DevOps World 2019 experience report - Parichay Barpanda
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/blog/2019/11/01/devops-world-jenkins-world-san-francisco-in-living-colors/" target="_blank" rel="noopener noreferrer" underline="hover">
            DevOps World in living color
          </Link>
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
        Gallery
      </Typography>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>DevOps World 2019 - Kohsuke Kawaguchi</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src="/assets/events/role-strategy-performance/dwjw-14.jpg" 
              alt="Kohsuke Kawaguchi" 
              style={{ maxWidth: '100%' }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>DevOps World 2019 - 15 years of Jenkins</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src="/assets/events/jenkinsworld2019/1D5_0614.jpg" 
              alt="15 years of Jenkins" 
              style={{ maxWidth: '100%' }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>DevOps World 2019 - Continuous Delivery Foundation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src="/assets/events/jenkinsworld2019/1D5_0437.jpg" 
              alt="Continuous Delivery Foundation" 
              style={{ maxWidth: '100%' }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>DevOps World 2019 - Ask the Experts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src="/assets/events/role-strategy-performance/dwjw-16.jpg" 
              alt="Ask the Experts" 
              style={{ maxWidth: '100%' }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
