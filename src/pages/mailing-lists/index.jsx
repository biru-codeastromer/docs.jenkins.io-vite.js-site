import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const MailingListGroup = ({ name, description, isReadOnly = false }) => {
  const theme = useTheme();
  const address = `${name}@googlegroups.com`;
  const archiveLink = `https://groups.google.com/group/${name}/topics`;
  const subscribeLink = `mailto:${name}+subscribe@googlegroups.com`;
  const unsubscribeLink = `mailto:${name}+unsubscribe@googlegroups.com`;

  let content;
  if (React.isValidElement(description)) {
    content = <Typography component="div">{description}</Typography>;
  } else if (description) {
    content = <Typography>{description}</Typography>;
  } else {
    switch (name) {
      case 'jenkinsci-users':
        content = (
          <>
            <Typography sx={{ fontWeight: 500, color: theme.palette.text.primary }} >Mailing list for users of Jenkins. Post your questions on how to use Jenkins and Jenkins plugins here.</Typography>
            <Box sx={{
              backgroundColor: theme.palette.mode === 'dark' ? theme.palette.jenkins.lightGray : '#f8f9fa',
              padding: '1rem',
              margin: '1rem 0',
              borderLeft: `4px solid ${theme.palette.mode === 'dark' ? theme.palette.jenkins.darkGray : '#6c757d'}`,
              borderRadius: '4px',
            }}>
              <Typography sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                NOTE: If you're not sure which list is correct, post here.
              </Typography>
            </Box>
          </>
        );
        break;
      case 'jenkinsci-dev':
        content = (
          <>
            <Typography sx={{ fontWeight: 500, color: theme.palette.text.primary }} >Mailing list for <strong>developers</strong> of Jenkins.</Typography>
            <Typography sx={{ fontWeight: 500, color: theme.palette.text.primary }} >Post your Jenkins core development and plugin development questions here, as well as topics related to project governance.</Typography>
            <Box sx={{
              backgroundColor: theme.palette.mode === 'dark' ? theme.palette.jenkins.lightGray : '#f8f9fa',
              padding: '1rem',
              margin: '1rem 0',
              borderLeft: `4px solid ${theme.palette.mode === 'dark' ? theme.palette.jenkins.darkGray : '#6c757d'}`,
              borderRadius: '4px',
            }}>
              <Typography sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                WARNING: <em>Questions that should be asked on the <em>jenkinsci-users</em> list will be ignored</em>.
                That means your email will be moderated and not posted to the list.
                Do not cross-post.
              </Typography>
            </Box>
          </>
        );
        break;
      case 'jenkins-infra':
        content = (
          <Typography sx={{ fontWeight: 500, color: theme.palette.text.primary }} >
            Mailing list for jenkins.io operations and <Link href="/projects/infrastructure/">Jenkins Infrastructure</Link>.
          </Typography>
        );
        break;
      case 'jenkinsci-board':
        content = (
          <>
            <Typography sx={{ fontWeight: 500, color: theme.palette.text.primary }} >
              Mailing list to contact <Link href="https://www.jenkins.io/project/board/" target="_blank">Jenkins board members</Link>.
            </Typography>
            <Box sx={{
              backgroundColor: theme.palette.mode === 'dark' ? theme.palette.jenkins.lightGray : '#f8f9fa',
              padding: '1rem',
              margin: '1rem 0',
              borderLeft: `4px solid ${theme.palette.mode === 'dark' ? theme.palette.jenkins.darkGray : '#6c757d'}`,
              borderRadius: '4px',
            }}>
              <Typography sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                NOTE: The subscription to this mailing list is reserved to Jenkins board members. Do not send messages to this list for support with your Jenkins instance or plugins.
              </Typography>
            </Box>
          </>
        );
        break;
      case 'jenkinsci-advisories':
        content = (
          <Typography sx={{ fontWeight: 500, color: theme.palette.text.primary }} >
            Security Advisory announcements are sent to this list. <Link href="/security">More about security in Jenkins</Link>
          </Typography>
        );
        break;
      case 'jenkinsci-commits':
        content = (
          <Typography sx={{ fontWeight: 500, color: theme.palette.text.primary }} >Automated core and plugin commit notifications.</Typography>
        );
        break;
      default:
        content = <Typography sx={{ fontWeight: 500, color: theme.palette.text.primary }} >Mailing list for {name} group.</Typography>;
    }
  }

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        <Link
            href={`mailto:${address}`}
            underline="hover"
            sx={{ fontWeight: 700 }}
        >
        {address}
        </Link>
      </Typography>

      <Box sx={{ mb: 2 }}>
        {content}
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
      <Link href={archiveLink} target="_blank" underline="hover" sx={{ fontWeight: 600 }}>
        archive
      </Link>
      <span>|</span>
      <Link href={subscribeLink} underline="hover" sx={{ fontWeight: 600 }}>
        subscribe
      </Link>
      <span>|</span>
      <Link href={unsubscribeLink} underline="hover" sx={{ fontWeight: 600 }}>
        unsubscribe
      </Link>
      </Box>
    </Box>
  );
};

export default function MailingListsPage() {
  const theme = useTheme();

  const sigs = [
    {
      name: 'jenkins-advocacy-and-outreach-sig',
      description: 'Mailing list for events, meet-ups, outreach programs, and fostering local communities.',
      url: '/sigs/advocacy-and-outreach/'
    },
  ];

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
        <title>Jenkins Mailing Lists</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Mailing Lists
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontWeight: 500, color: theme.palette.text.primary }}>
        The Jenkins project uses <Link href="https://en.wikipedia.org/wiki/Electronic_mailing_list" target="_blank">mailing lists</Link> to communicate.
        These mailing lists are organized by topic (see below).
        Posting to the wrong mailing list will just result in your message being ignored.
        Please strive to be clear and concise when sending messages. 
        <Link href="https://www.catb.org/esr/faqs/smart-questions.html" target="_blank">How to ask questions the smart way.</Link>
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontWeight: 500, color: theme.palette.text.primary }}>
        To subscribe to a mailing list, send an empty email to the "subscribe" email address.
      </Typography>

      <Box sx={{
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.jenkins.lightGray : '#f8f9fa',
        padding: '1rem',
        margin: '2rem 0',
        borderLeft: `4px solid ${theme.palette.mode === 'dark' ? theme.palette.jenkins.darkGray : '#6c757d'}`,
        borderRadius: '4px',
      }}>
        <Typography sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          WARNING: Due to heavy spam volume, we have enabled moderation of a user's first post on some of these lists.
          This may result in delays in delivering your first email to these lists. For this reason, you should not 
          re-send your email if it doesn't appear on the list straight away.
        </Typography>
      </Box>

      <Typography
        variant="h5"
        id="english-language"
        sx={{
          fontWeight: 800,
          fontSize: '1.75rem',
          mt: 4,
          mb: 2,
        }}
      >
        English-language discussion lists
      </Typography>

      <MailingListGroup name="jenkinsci-users" />
      <MailingListGroup name="jenkinsci-dev" />
      <MailingListGroup 
        name="jenkins-advocacy-and-outreach-sig"
        description="Mailing list for events, meet-ups, outreach programs, and fostering local communities."
      />
      <MailingListGroup name="jenkins-infra" />

      <Typography
        variant="h5"
        id="board"
        sx={{
          fontWeight: 800,
          fontSize: '1.75rem',
          mt: 4,
          mb: 2,
        }}
      >
        Governance board mailing list
      </Typography>

      <MailingListGroup name="jenkinsci-board" />

      <Typography
        variant="h5"
        id="read-only"
        sx={{
          fontWeight: 800,
          fontSize: '1.75rem',
          mt: 4,
          mb: 2,
        }}
      >
        Read-only lists
      </Typography>

      <MailingListGroup name="jenkinsci-advisories" />
      <MailingListGroup 
        name="jenkinsci-commits"
        description="Automated core and plugin commit notifications."
      />

      <Typography
        variant="h5"
        id="sigs"
        sx={{
          fontWeight: 800,
          fontSize: '1.75rem',
          mt: 4,
          mb: 2,
        }}
      >
        Special Interest Groups Mailing Lists
      </Typography>

      {sigs.map((sig, index) => (
        <MailingListGroup
          key={index}
          name={sig.name}
          description={
            <>
              Mailing list for <Link href={sig.url}>{sig.title || sig.name}</Link> group.
            </>
          }
        />
      ))}
    </Box>
  );
}
