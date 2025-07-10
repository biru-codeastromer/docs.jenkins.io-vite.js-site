import React from 'react';
import { Box, Typography, Link, List, ListItem, ListItemText, Divider, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export default function PressPage() {
  const theme = useTheme();

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
        <title>Jenkins Press Information</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Jenkins Press Information
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you're a journalist, blogger or anybody else who might consider themselves
        "press" this page should help you refer to, explain or otherwise cite the
        Jenkins project correctly. If this page does not sufficiently answer a question
        you may have, or you're seeking comment, please reach out to our <Link href="#press-contact">Press Contact</Link> below.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 1,
        }}
        id="about-jenkins"
      >
        About Jenkins
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          fontSize: '1rem',
          mb: 2,
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}
      >
        Elevator Pitch
      </Typography>
      <Box component="blockquote" sx={{ 
        pl: 2, 
        borderLeft: '4px solid', 
        borderColor: 'divider', 
        mb: 3,
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.5,
      }}>
        <Typography sx={{
            fontWeight: 600,
            fontStyle: 'italic',
        }}>
          The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.
        </Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          fontSize: '1rem',
          mb: 2,
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}
      >
        Blurb
      </Typography>
      <Box component="blockquote" sx={{ 
        pl: 2, 
        borderLeft: '4px solid', 
        borderColor: 'divider', 
        mb: 2,
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.5,
      }}>
        <Typography sx={{
            fontWeight: 600,
            fontStyle: 'italic',
        }}>
          Jenkins is the leading open source automation server supported by a large and growing community of developers, testers, designers and other people interested in continuous integration, continuous delivery and modern software delivery practices. Built on the Java Virtual Machine (JVM), it provides more than 2,000 plugins that extend Jenkins to automate with practically any technology software delivery teams use. In 2022, Jenkins reached 300,000 known installations making it the most widely deployed automation server.
        </Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
        id="governance"
      >
        Governance
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Our <Link href="/project/governance/">Governance Document</Link> outlines the project's philosophy, structure and guidelines. This
        also includes information on the <Link href="/project/board">Governance Board</Link>, which is the group with acting executive authority. While board members
        are available for comment, we encourage you to reach out to our <Link href="#press-contact">Press Contact</Link>
        as an initial point of contact for press inquiries.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
        id="trademark"
      >
        Trademark
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        The name "Jenkins" is a registered trademark in the USA to protect the project and users from confusing use of the term: 
        <Link href="https://trademarks.justia.com/854/47/jenkins-85447465.html" target="_blank" rel="noopener">#4664929</Link>,
        held by LF CHARITIES, Inc. (a 501(c)(3) nonprofit charity associated with the Linux Foundation).
        For more info about trademark and its usage see the <Link href="/project/governance/#trademark">Trademark</Link> and <Link href="/project/governance/#trademark-attribution">Trademark Attribution</Link> sections of the Governance document.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
        id="branding"
      >
        Branding
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        We ask that the following branding guidelines be used when referring to or
        writing about the Jenkins project:
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          fontSize: '1rem',
          mb: 0.5,
        }}
      >
        Correct:
      </Typography>
      <List variant="body1" dense sx={{
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
            color: 'black',
        },
      }}>
        <ListItem>
          <ListItemText primary="the Jenkins project" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Jenkins" />
        </ListItem>
      </List>

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          fontSize: '1rem',
          mb: 2,
        }}
      >
        Incorrect:
      </Typography>
      <List dense sx={{
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
            color: 'black',
        },
      }}>
        <ListItem>
          <ListItemText primary="Jenkins CI" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Jenkins server" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Mr. Jenkins" />
        </ListItem>
      </List>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 2,
        }}
        id="artwork"
      >
        Artwork
      </Typography>
      <Box sx={{ float: 'left', ml: 0, marginRight: '1rem' }}>
        <img 
          src="/assets/press/jenkins.svg" 
          alt="Jenkins Logo" 
          width={128}
          loading="lazy"
        />
      </Box>
      <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500, overflow: 'hidden' }}>
        On our <Link href="https://wiki.jenkins.io/display/JENKINS/Logo" target="_blank" rel="noopener">Logo</Link> page we have
        documented some versions of our logo, including the color palette our branding
        uses. Our logos can be downloaded in a number of sizes, or as vector graphics,
        from <Link href="https://get.jenkins.io/art/" target="_blank" rel="noopener">here</Link>. Please do not use any of
        our "fun logo" variations like Ninja or Superhero Jenkins in publications.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        When embedding our logo in an article, we prefer the <code>logo.png</code> (see Figure 1)
        to be used over the <code>headshot.png</code> image.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you have any questions about artwork, please ask our <Link href="#press-contact">Press Contact</Link>.
      </Typography>

      <Box sx={{ clear: 'both', mt: 4 }} />

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 2,
        }}
        id="about-cdf"
      >
        About the Continuous Delivery Foundation
      </Typography>
      <Box sx={{ float: 'left', ml: 0, marginRight: '1rem' }}>
        <img 
          src="/assets/press/cdf-logo-color-knockout.png" 
          alt="CDF Logo" 
          width={164}
          loading="lazy"
        />
      </Box>
      <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500, overflow: 'hidden' }}>
        The <Link href="https://cd.foundation" target="_blank" rel="noopener">Continuous Delivery Foundation (CDF)</Link> serves as the vendor-neutral home of many of the fastest-growing projects for continuous integration/continuous delivery (CI/CD).
        It fosters vendor-neutral collaboration between the industry's top developers, end users and vendors to further CI/CD best practices and industry specifications.
        Its mission is to grow and sustain projects that are part of the broad and growing continuous delivery ecosystem.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 2,
        }}
        id="press-contact"
      >
        Press Contact
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        A single point of contact is available for comment, clarification
        or questions about the Jenkins project. Please bear in mind that many are
        volunteers so availability and time may be limited.
        Please post your inquiries in the <Link href="https://community.jenkins.io/c/press/24" target="_blank" rel="noopener">Press</Link> category on the Jenkins community forums.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 2,
        }}
      >
        Security related contacts
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If your press request involves any security related matter, please contact the <Link href="/security/cna">Security Team</Link> directly.
      </Typography>
    </Box>
  );
}
