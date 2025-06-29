import React from 'react';
import { Typography, Box, Link, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ContributorSummit() {
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
        Jenkins Contributor Summit
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        The Jenkins Contributor Summit brings together current and future contributors to the Jenkins project.
        It brings together community members to learn, meet, and help shape the future of Jenkins.
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
        Next Summit: Brussels (TBD)
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Details for the next <strong>Jenkins Contributor Summit</strong> (likely in 2026) are yet to be confirmed. Stay tuned!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <Link href="https://fosdem.org/2025/" target="_blank" rel="noopener noreferrer" underline="hover">
          FOSDEM
        </Link>{' '}
        is a free event for software developers to meet, share ideas, and collaborate. 
        Every year, thousands of developers of free and open-source software from all over the world gather at the event in Brussels. 
        For the 2025 event, FOSDEM was held between February 1 - 2, the first weekend of February.
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
        Key Dates:
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
        <li style={{ marginBottom: '0.5rem' }}><strong>Jenkins:</strong> TBD</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>FOSDEM:</strong> TBD</li>
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
        Location:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <Link href="https://www.betacowork.com/" target="_blank" rel="noopener noreferrer" underline="hover">
          <em>Betacowork</em>
        </Link>, located at <em>4 Rue des Pères Blancs, 1040 Brussels, Belgium</em>
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        The Betacowork location is easily accessible from downtown Brussels or the FOSDEM venue.
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
        Entry Fee:
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
        <li style={{ marginBottom: '0.5rem' }}>No cost to attend.</li>
        <li style={{ marginBottom: '0.5rem' }}>Registration will be required (room capacity: 30).</li>
        <li style={{ marginBottom: '0.5rem' }}>Event is in-person only.</li>
        <li style={{ marginBottom: '0.5rem' }}>No catering is foreseen but food can be purchased in the neighborhood.</li>
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
        Agenda (Draft)
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        (To be updated)
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
        <li style={{ marginBottom: '0.5rem' }}>Board report - (Jenkins Governance Board member)</li>
        <li style={{ marginBottom: '0.5rem' }}>Infrastructure officer report - Damien Duportal</li>
        <li style={{ marginBottom: '0.5rem' }}>Docs officer report - Kevin Martens</li>
        <li style={{ marginBottom: '0.5rem' }}>Release officer report - Tim Jacomb</li>
        <li style={{ marginBottom: '0.5rem' }}>Events officer report - Alyssa Tong</li>
        <li style={{ marginBottom: '0.5rem' }}>Security officer report - Wadeck Follonier</li>
        <li style={{ marginBottom: '0.5rem' }}>User Experience SIG report - Tim Jacomb or Mark Waite</li>
        <li style={{ marginBottom: '0.5rem' }}>Platform SIG report</li>
        <li style={{ marginBottom: '0.5rem' }}>Java support plan</li>
        <li style={{ marginBottom: '0.5rem' }}>Hardware support</li>
        <li style={{ marginBottom: '0.5rem' }}>Initiatives and roadmap</li>
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
        Call for participation
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Jenkins Contributor Summit is a community driven event.
        Our agenda is based on interest of contributors and community members.
        The Contributor Summit agenda is created with input and suggestions from Jenkins community members.
        We're always ready to welcome additional help as we plan, organize, and run Contributor Summits.
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
        Discussion channels
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
        Discourse
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        You can discuss the contributor summit on{' '}
        <Link href="https://community.jenkins.io/" target="_blank" rel="noopener noreferrer" underline="hover">
          community.jenkins.io
        </Link>.
        Please use the <code style={{ color: 'red' }}>contributor-summit</code> label.
        You can find all the related topics using{' '}
        <Link href="https://community.jenkins.io/tag/contributor-summit" target="_blank" rel="noopener noreferrer" underline="hover">
          this query
        </Link>.
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
        Social media
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Please use the <code style={{ color: 'red' }}>#jenkinsContributorSummit</code> hashtag to share about the contributor summit on social media.
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
          <Link href="https://twitter.com/search?q=%23jenkinsContributorSummit%20OR%20%22Jenkins%20Contributor%20Summit%22%20OR%20%22%40jenkinsci%20Contributor%20Summit%22&src=typed_query" target="_blank" rel="noopener noreferrer" underline="hover">
            Twitter Query
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.linkedin.com/search/results/content/?keywords=%22Jenkins%20Contributor%20Summit%22%20OR%20%23jenkinsContributorSummit%20OR%20%22Jenkins%20project%20contributor%20summit%22&origin=GLOBAL_SEARCH_HEADER&sortBy=%22relevance%22" target="_blank" rel="noopener noreferrer" underline="hover">
            LinkedIn query
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
        Mailing lists
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We do not use mailing lists actively for Contributor Summits.
        Should you want to use an email instead of the channels above, please use one of the{' '}
        <Link href="/mailing-lists/" underline="hover">
          Jenkins mailing lists
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
          <Link href="https://community.jenkins.io/t/jenkins-contributor-summit-on-jan-31-2025-call-for-topics-and-ideas/21678" target="_blank" rel="noopener noreferrer" underline="hover">
            Agenda for 2025 Contributor Summit at FOSDEM
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/blog/2024/02/28/jenkins-contributor-summit-and-fosdem-recap/" target="_blank" rel="noopener noreferrer" underline="hover">
            2024 Contributor Summit at FOSDEM
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/events/contributor-summit/archive/2021-10" target="_blank" rel="noopener noreferrer" underline="hover">
            Online Contributor Summit on Oct 2, 2021 and Oct 9, 2021
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/events/contributor-summit/archive/2021-06" target="_blank" rel="noopener noreferrer" underline="hover">
            Online Contributor Summit on Jun 25, 2021
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/blog/2021/02/16/contributor-summit-online/" target="_blank" rel="noopener noreferrer" underline="hover">
            Online Contributor Summit on Feb 23-25, 2021
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.meetup.com/jenkinsmeetup/events/267684785/" target="_blank" rel="noopener noreferrer" underline="hover">
            2020 contributor summit at FOSDEM
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/blog/2019/08/25/jenkinsworld-contrib-summit-ask-the-expert-booth/" target="_blank" rel="noopener noreferrer" underline="hover">
            2019 contributor summit blog post
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.jenkins.io/blog/2018/10/18/contributor-summit-summary/" target="_blank" rel="noopener noreferrer" underline="hover">
            2018 contributor summit summary
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.meetup.com/jenkinsmeetup/events/236370750/" target="_blank" rel="noopener noreferrer" underline="hover">
            2017 contributor hackathon
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://www.meetup.com/jenkinsmeetup/events/227463345/" target="_blank" rel="noopener noreferrer" underline="hover">
            2016 contributor summit at FOSDEM
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
          <Typography sx={{ fontWeight: 500 }}>Jenkins Contributor Summit, 2018:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src="/assets/events/conferences/contributor_summit_kk.jpg" 
              alt="Jenkins Contributor Summit, 2018. Image 1" 
              style={{ maxWidth: '100%' }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>Jenkins Contributor Summit, 2018:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src="/assets/events/conferences/contributor_summit_sf.jpg" 
              alt="Jenkins Contributor Summit, 2018. Image 2" 
              style={{ maxWidth: '100%' }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500 }}>Jenkins Contributor Summit, 2021:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ textAlign: 'center' }}>
            <img 
              src="/assets/events/conferences/2021-02-16-contributor-summit.png" 
              alt="Jenkins Contributor Summit, Feb 2021" 
              style={{ maxWidth: '100%' }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}