import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export default function ChatPage() {
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
        <title>Jenkins Chat</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Chat
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        The Jenkins project meets to discuss various topics on Matrix, commonly referenced as "Gitter", because a majority of our rooms live on the <code style={{ color:'red' }}>gitter.im</code> server.
        In addition to the general purpose rooms and channels listed below, <Link href="/sigs">special interest groups</Link> and <Link href="/projects">sub-projects</Link> have their own spaces, and you will see chat rooms linked from their pages.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.75rem',
          mt: 4,
          mb: 2,
        }}
      >
        Gitter
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        The Jenkins community discusses various topics in multiple rooms on <Link href="https://app.gitter.im/#/room/#jenkins-ci:matrix.org" target="_blank" rel="noopener">Gitter</Link>.
        Various <Link href="/sigs">special interest groups</Link> also use Gitter to meet, and you will find their rooms linked on the SIGs overview page.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        To ease accessibility, all links pointing to Gitter or Matrix channels on jenkins.io use <Link href="https://element.io/" target="_blank" rel="noopener">Element</Link> as a web client hosted by <Link href="https://app.gitter.im/" target="_blank" rel="noopener">Gitter</Link>.
        You don't need to download any software to join a Jenkins chat room on Matrix, but you can use <Link href="https://matrix.org/ecosystem/clients/" target="_blank" rel="noopener">a Matrix client</Link> if you like.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        <Link href="https://app.gitter.im/#/room/#jenkinsci_jenkins:gitter.im" target="_blank" rel="noopener">jenkinsci/jenkins</Link>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        General discussions about Jenkins.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        <Link href="https://app.gitter.im/#/room/#jenkinsci_newcomer-contributors:gitter.im" target="_blank" rel="noopener">jenkinsci/newcomer-contributors</Link>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        Q&A channel for newcomer contributors to Jenkins.
        Use this channel if you are not sure where to ask, and other contributors will help you.
        <Link href="/participate/"> More about contributing to Jenkins</Link>.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        <Link href="https://app.gitter.im/#/room/#jenkins-infra:matrix.org" target="_blank" rel="noopener">jenkins-infra:matrix.org</Link>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        Discussions of the <Link href="/projects/infrastructure/">Jenkins project infrastructure</Link>, i.e. most services running on <code style={{ color:'red' }}>jenkins.io</code>, <code style={{ color:'red' }}>jenkins-ci.org</code>, and related domains.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        <Link href="https://app.gitter.im/#/room/#jenkins-release:matrix.org" target="_blank" rel="noopener">jenkins-release:matrix.org</Link>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        Channel for coordinating the Jenkins <Link href="/download/weekly/">weekly</Link> and <Link href="/download/lts/">LTS</Link> releases.
        It is used by the Release Team when planning and rolling out the new releases and release candidates.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.75rem',
          mt: 4,
          mb: 2,
        }}
      >
        Internet Relay Chat (IRC)
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        The Jenkins community discusses various project-related topics in a channel on the <Link href="https://libera.chat/" target="_blank" rel="noopener">Libera Chat</Link> IRC network.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        For information on how to connect, see the <Link href="https://libera.chat/guides" target="_blank" rel="noopener">Libera Chat</Link> website.
        <Link href="https://libera.chat/guides/clients" target="_blank" rel="noopener"> Find an IRC client</Link>.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        <code style={{ color:'red' }}>#jenkins</code>
      </Typography>

      <Box sx={{
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        margin: '2rem 0',
        borderLeft: '4px solid #6c757d',
        borderRadius: '4px',
      }}>
        <Typography variant="body1" sx={{ mb: 0, fontSize: '1rem', fontWeight: 600 }}>
          WARNING: The bridge that synced messages between Matrix and IRC has been <Link href="https://matrix.org/blog/2023/08/libera-bridge-disabled/" target="_blank" rel="noopener">suspended</Link> indefinitely. Messages are not synchronized between the services. We recommend using the Gitter/Matrix rooms for ease of accessibility.
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        General discussions channel for Jenkins users and developers.
        It used to be the primary one until non-IRC communication options were introduced.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        If you want to join the matrix room IRC messages were bridged to earlier, connect to <Link href="https://app.gitter.im/#/room/#jenkinsci_jenkins:gitter.im" target="_blank" rel="noopener">#jenkinsci_jenkins:gitter.im</Link>.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        <strong>Tip:</strong> If you have a question about Jenkins, just ask it. Don't ask whether you can ask a question.
        It's common to not receive an answer for quite a while if no active contributors are currently checking IRC.
        In that case, just stick around, and periodically (every few hours) ask your question again.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        <code style={{ color:'red' }}>#jenkins-hosting</code>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        Chat of the Jenkins <Link href="/project/teams/hosting/">Hosting team</Link> that manages permissions and handles plugin hosting requests.
        We use the <em>jenkins-admin</em> bot to automate common administrative operations.
        Its use is limited to users with <em>voice</em> or <em>op</em> in this channel.
        <Link href="/projects/infrastructure/ircbot/">Learn more about the IRC Bot</Link>.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        Channel spam protection
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        Because of irregular spam attacks, we sometimes have to make some channels protected.
        In such circumstances, we make the targeted channel(s) only accessible to registered IRC nicks.
        Example error:
      </Typography>

      <Box component="pre" sx={{
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        borderRadius: '4px',
        overflowX: 'auto',
        mb: 3,
      }}>
        <code style={{ color:'red' }}>
          [10:28] -NickServ- my_nickname is not a registered nickname.<br />
          [10:28] == #jenkins Cannot join channel (+r) - you need to be identified with services
        </code>
      </Box>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        That means you basically need to create a reserved nick for you, <Link href="https://libera.chat/guides/registration" target="_blank" rel="noopener">following the official documentation</Link>.
        Once done, you will be able to connect to <code style={{ color:'red' }}>#jenkins</code> even if that channel is undergoing a spam attack.
        Note that even without this, this is a recommended practice so that people <em>know</em> this is you, and cannot be someone else, when a given nick is online.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        Cloaks
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        #jenkins is not only a registered channel, but the Jenkins project has an official relationship with Libera Chat (see <Link href="https://libera.chat/chanreg" target="_blank" rel="noopener">the Libera Chat site</Link> for more details).
        Because of this, we can provide IRC cloaks for developers.
        IRC cloaks are used to protect the privacy of developers.
        Cloaking is also a common way for projects with an IRC presence to designate status for contributors and developers.
        We currently offer the following cloak levels:
      </Typography>

      <Box component="ul" sx={{
        pl: 4,
        mb: 3,
        '& li': {
          mb: 1,
        }
      }}>
        <li>
          <code style={{ color:'red' }}>jenkins/contributor/(username)</code>
        </li>
      </Box>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        To obtain a cloak:
      </Typography>

      <Box component="ul" sx={{
        pl: 4,
        mb: 3,
        '& li': {
          mb: 1,
        }
      }}>
        <li>ensure you have a <em>registered user</em> on Libera Chat</li>
        <li>ensure you are already recognized as a developer (have +vV voice privilege)</li>
        <li>Contact a <Link href="/projects/infrastructure/">Jenkins Infrastructure Team</Link> member, who will request a cloak on your behalf in <code style={{ color:'red' }}>#libera-community</code></li>
        <li>monitor your memoserv notices for updates from Libera Chat staff requesting confirmation of cloak request
          <Box component="ul" sx={{ pl: 4, mt: 1 }}>
            <li><code style={{ color:'red' }}>/msg memoserv help</code></li>
          </Box>
        </li>
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.75rem',
          mt: 4,
          mb: 2,
        }}
      >
        Slack
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        Some teams and working groups use Slack for communications.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        Continuous Delivery Foundation
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        <Link href="https://cd.foundation/" target="_blank" rel="noopener">Continuous Delivery Foundation (CDF)</Link> Slack is used for coordinating the Jenkins community activities with the CDF, other projects and special interest groups.
        Any contributor can join this channel, but the Jenkins community does not currently host its official channels there.
        <Link href="https://join.slack.com/t/cdeliveryfdn/shared_invite/zt-nwc0jjd0-G65oEpv5ynFfPD5oOX5Ogg" target="_blank" rel="noopener">Join CDF Slack</Link>
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        Kubernetes
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        The Kubernetes Slack includes an <strong>unofficial</strong> <code style={{ color:'red' }}>#jenkins-ci</code> channel.
        This channel is commonly used to discuss various aspects of running Jenkins in Kubernetes.
        Our sister project <Link href="https://jenkins-x.io/" target="_blank" rel="noopener">Jenkins X</Link> also hosts its official chats there (<Link href="https://jenkins-x.io/community/#slack" target="_blank" rel="noopener">links</Link>).
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        You can join this Slack workspace by requesting an invitation <Link href="https://slack.k8s.io/" target="_blank" rel="noopener">here</Link>.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 3,
          mb: 2,
        }}
      >
        Jenkins Operator for Kubernetes
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', fontWeight: 500 }}>
        The <Link href="/projects/jenkins-operator/">Jenkins Operator sub-project</Link> uses a separate <code style={{ color:'red' }}>#jenkins-operator</code> channel on <Link href="https://virtuslab-oss.slack.com/" target="_blank" rel="noopener">virtuslab-oss.slack.com</Link>.
        See more information and joining guidelines <Link href="https://github.com/jenkinsci/kubernetes-operator#community" target="_blank" rel="noopener">here</Link>.
      </Typography>
    </Box>
  );
}
