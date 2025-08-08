import { Box, Typography, Link, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const DonatePage = () => {
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
        <title>Donate to Jenkins | Jenkins</title>
        <meta name="description" content="Support the Jenkins project through donations. Your contributions help maintain and evolve the project through various initiatives and infrastructure needs." />
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Donate to Jenkins
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        The Jenkins project operates thanks to individual and company contributors
        investing their time and resources to maintain and evolve the project.
        The best way to help the project is to <Link href="/participate">participate and contribute</Link>,
        volunteer time is the most precious resource for an open-source project. 
        We will appreciate any contributions to the Jenkins: code, documentation, etc.
        If you have no opportunity to contribute your time, we also appreciate donations of money and equipment.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        You can donate here:
      </Typography>

      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Link href="https://crowdfunding.lfx.linuxfoundation.org/projects/jenkins">
          <Box 
            component="img" 
            src="/assets/governance/funding/lfx_crowdfunding.png" 
            alt="Donate via LFX Crowdfunding"
            sx={{ 
                height: 'auto',
                width: '100%',
                maxWidth: '400px'
              }}
          />
        </Link>
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
        Why donate?
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Your donations help to keep the project going and to accelerate its evolution:
      </Typography>
      
      <List dense sx={sharedListStyles}>
        <ListItem>
          <ListItemText primary="Facilitating key initiatives within the Jenkins Roadmap: new features, documentation, user experience improvement, etc." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Organizing community events and outreach programs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Running self-funded mentorship programs like Outreachy and Community Bridge" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Swag for active Jenkins contributors" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Operating and infrastructure expenses not covered by existing sponsorships" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Certificates and domains for our websites, network transit costs, hardware for self-hosted services" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Cost of SaaS services not covered by sponsorships" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Organizing online and local Jenkins meetups (swag, promotion materials)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Funding the Jenkins Travel Grant Program to help community members to attend Jenkins related events" />
        </ListItem>
      </List>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Your contribution will <strong>NOT</strong> be used for paying personnel, for placing ads, or for other forms of commercial promotion.
        The Jenkins project has no personnel on payroll, all contributions come from individual and company contributors.
        Sponsorships cover most of our "big" expenses: most of the infrastructure costs, contributor summits, meetup accounts, swag, etc.
        It allows spending the most of donations on targeted projects focused on evolving the project and the community.
        Many initiatives we run require "just" hundreds or thousands of US dollars,
        even small contributions can make a real difference for the project and its users.
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
        Donations through LFX Crowdfunding
      </Typography>

      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Link href="https://crowdfunding.lfx.linuxfoundation.org/projects/jenkins">
          <Box 
            component="img" 
            src="/assets/governance/funding/lfx_crowdfunding.png" 
            alt="Donate via LFX Crowdfunding"
            sx={{ 
                height: 'auto',
                width: '100%',
                maxWidth: '400px'
              }}
          />
        </Link>
      </Box>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        The Jenkins project has an account on the LFX Crowdfunding platform.
        It provides support for donations by individuals and by organizations, including anonymous donations.
        Minimum donation is 5 USD for individuals and 500 USD for organizations.
      </Typography>
      
      <List dense sx={sharedListStyles}>
        <ListItem>
          <ListItemText primary="You can make a one-time donation or configure monthly donations using your credit card." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Organizations can also make a donation via invoice" />
        </ListItem>
      </List>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        See <Link href="/jep/15">Jenkins funding on LFX Crowdfunding</Link> for more details about the donation process and targets.
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
        Donations through the Continuous Delivery Foundation
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Large donations can be also made through the <Link href="https://cd.foundation/">Continuous Delivery Foundation</Link>.
        Please contact the <Link href="/project/board/">Jenkins Governance Board</Link> if you want to make such a donation.
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
        Recognition
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        As for any other type of contributions, we are interested in publicly recognizing and promoting donations made to the project.
        If you announce your or your company's donation in social media, reach out to the <Link href="/sigs/advocacy-and-outreach/">Advocacy and Outreach special interest group</Link> for reposts.
        The Jenkins governance board is also responsible for recognizing big donations.
        There is no formal process for that, please contact the <Link href="/project/board/">Jenkins Governance Board</Link>.
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
        Donations to sub-projects and plugins
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        This page describes donations to the Jenkins project in general.
        Plugin and component maintainers may define their own donation guidelines.
        Such information can be found in their documentation and in GitHub repositories.
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
        References
      </Typography>
      
      <List dense sx={sharedListStyles}>
        <ListItem>
          <ListItemText primary={<Link href="/jep/15">Jenkins funding on LFX Crowdfunding</Link>} />
        </ListItem>
      </List>
    </Box>
  );
};

export default DonatePage;
