import React from 'react';
import { Typography, Box, Link, useTheme } from '@mui/material';

export default function JamPage() {
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
        CI/CD and Jenkins Area Meetups
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        CI/CD Meetups and Jenkins Area Meetups (JAMs) are local meetups intended to bring CI/CD users and contributors together for socializing and learning.
        These are organized by local community members who have a passion for sharing experiences about new CI/CD concepts, patterns and tools.
        All topics about Jenkins are welcome: using Jenkins, case studies, success and war stories, development and the community.
        We invite everyone who is interested in other CI/CD projects such as Spinnaker, Tekton, and Jenkins X to join our network.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        JAMs and CI/CD Meetups receive support from the{' '}
        <Link href="https://cd.foundation/" target="_blank" rel="noopener noreferrer" underline="hover">
          Continuous Delivery Foundation
        </Link>{' '}
        and many local sponsors.
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
        How to find meetups?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        See the current list of Jenkins & CI/CD meetup groups{' '}
        <Link href="https://www.meetup.com/pro/cicd-cdf" target="_blank" rel="noopener noreferrer" underline="hover">
          here
        </Link>.
        If there isn't a CI/CD Meetup in your city, you could be the one to start it!
        We also have a{' '}
        <Link href="/events/online-meetup" underline="hover">
          Jenkins Online Meetup
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
        JAMs program status
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        There have been a few updates to the Jenkins Area Meetups in late 2019.
        First, the Jenkins Area Meetup Pro account, which JAMs has been under,
        has been rebranded after the transfer to{' '}
        <Link href="https://cd.foundation/" target="_blank" rel="noopener noreferrer" underline="hover">
          Continuous Delivery Foundation (CDF)
        </Link>.
        We notified all meetup organizers about this transition in early October 2019.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Meetup organizers are welcome to transition their meetup to CDF specific branding.
        By no means JAMs are under any obligation to update the naming convention or the branding.
        We are giving organizers the freedom to choose.
        If you decide to change your meetup name we offer the following naming convention:
        <em>Project Name City Name Meetup</em> or <em>CI/CD City Name Meetup</em>.
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
        Organizing meetups
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
        Getting Started
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Whether you want to start a new local JAM or a CI/CD meetup, send us an email to{' '}
        <Link href="mailto:meetups@cd.foundation" underline="hover">meetups@cd.foundation</Link> to get started.
        Let us know the city in which you'd like to host the CI/CD Meetup.
        Our team will create a meetup page on meetup.com and we will work with you to organize your meetup.
        See the application guidelines{' '}
        <Link href="https://github.com/cdfoundation/meetups#how-to-apply" target="_blank" rel="noopener noreferrer" underline="hover">
          here
        </Link>!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you would like to organize an online event, please see the{' '}
        <Link href="/events/online-meetup" underline="hover">
          Jenkins Online Meetup page
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
        CI/CD and JAM Support
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        CI/CD and Jenkins Meetups receive support from the{' '}
        <Link href="https://cd.foundation/" target="_blank" rel="noopener noreferrer" underline="hover">
          Continuous Delivery Foundation
        </Link>{' '}
        via swag (stickers, etc), promotion, and help bootstrapping and operating the meetup group.
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
          <strong>Swag</strong> - We will send you cool swags (stickers, t-shirts, etc) to share with members
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Promote</strong> - We give every CDF Meetup and JAM social media love via Twitter, blog posts, Facebook, newsletter, and post on the{' '}
          <Link href="https://cd.foundation/events/list/" target="_blank" rel="noopener noreferrer" underline="hover">
            events calendar
          </Link>.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>CI/CD Expertise</strong> - We will help you to schedule a project expert as the key speaker at your meetup, or provide you with presentation materials.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Outreach</strong> - We will assist in reaching out to your local community for food/venue sponsorship.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Support specific to JAMs</strong> - As CDF will manage the operational aspect of JAMs and CI/CD meetups, the{' '}
          <Link href="/sigs/advocacy-and-outreach/" underline="hover">
            Advocacy & Outreach SIG
          </Link>{' '}
          is a channel to provide guidance/advice to new JAM organizers if needed. See the contacts on the linked page.
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
        Best Practices
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
          Attend existing meetup groups to gauge any of CDF's current projects interest/market within your area.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Reach out to existing CDF/JAM organizer(s) to learn best practices and time commitment.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Set up a Twitter account (for example, #JenkinsNYC). Let us know about it so we can help to promote your meetup.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Promote, tweet and post your meetup in advance.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Avoid product pitches. Keep it real, it's not about promotions. This is about - and for - learning opportunities for the community.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Shake up the format. Have presentations, panel discussions, roundtables, workshops, hackathons, etc.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Set a consistent date, time and location so members will plan for it. Avoid cancelling your meeting as people will lose faith and stop RSVPing for your meetup.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Review the CDF meetups repository on Github{' '}
          <Link href="https://github.com/cdfoundation/meetups" target="_blank" rel="noopener noreferrer" underline="hover">
            https://github.com/cdfoundation/meetups
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
        Stepping Down
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        In the event you can no longer be an organizer, we ask that you nominate a replacement organizer in your place.
        If this is not possible please send email to{' '}
        <Link href="mailto:meetups@cd.foundation" underline="hover">meetups@cd.foundation</Link> and/or contact the{' '}
        <Link href="/sigs/advocacy-and-outreach/" underline="hover">
          Advocacy & Outreach SIG
        </Link>.
        We will work with you to find a replacement.
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
        Supporting a meetup group
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you are not able to be an organizer, speakers, food or venue, or recording sponsors are always needed.
        If your company is interested in sponsoring any of these items please email{' '}
        <code style={{ color: 'red' }}>meetups@cd.foundation</code> or reach out to the local organizers.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <strong>Benefits of Being a Food or Venue or Recording Sponsor:</strong>
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
        <li style={{ marginBottom: '0.5rem' }}>Logo and link on the meetup page.</li>
        <li style={{ marginBottom: '0.5rem' }}>Verbal acknowledgement at the opening/closing remark by the host.</li>
        <li style={{ marginBottom: '0.5rem' }}>Sponsor table at the meeting to display collaterals, signage, swag.</li>
        <li style={{ marginBottom: '0.5rem' }}>Opportunity to host a drawing.</li>
        <li style={{ marginBottom: '0.5rem' }}>Mention in social media.</li>
        <li style={{ marginBottom: '0.5rem' }}>A two minute talk to address the attendees.</li>
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
        Food Sponsor:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Sponsor food and beverages for the specific month's meetup.
        The cost is about $200 to $600 depending on the number of attendees.
        The money is used to purchase pizza, soft drinks and paperware.
        One sponsor is needed for each monthly meeting.
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
        Venue Sponsor:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Venue sponsors provide the facility to host the meeting for free.
        One venue sponsor is needed per meeting.
        A meeting room with chairs and a couple of six feet tables with open space for food/beverages and mingling would be sufficient.
        Access to a public bathroom would be needed as well.
        A meetup will need such equipment as projection and screen. In the event where a meeting has more than 50 attendees an audio system will be needed.
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
        Recording Sponsor:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Recording sponsor volunteer his/her recording equipment and time to record a
        meeting and make it public after the meeting.
      </Typography>
    </Box>
  );
}
