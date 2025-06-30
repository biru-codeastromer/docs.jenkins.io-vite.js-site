import React from 'react';
import { Box, Typography, Link, List, ListItem, ListItemText, Divider, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export default function ConductPage() {
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
        <title>Jenkins Code of Conduct</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Jenkins Code of Conduct
      </Typography>

      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        As community members, contributors and maintainers of this project,
        and in the interest of fostering an open and welcoming community,
        we commit to respect all people who participate in the community through reporting issues,
        posting feature requests, updating documentation, submitting pull requests or
        patches, and other activities.
      </Typography>

      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        This document defines the Code of Conduct along with reporting and handling guidelines for the Jenkins community. 
        For more details about our cultural values, goals, philosophies, and structure, please consult our <Link href="/project/governance">Governance Document</Link>.
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
        Our Pledge
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        We as members, contributors, and leaders pledge to make participation in our
        community a harassment-free experience for everyone, regardless of age, body
        size, visible or invisible disability, ethnicity, sex characteristics, gender
        identity and expression, level of experience, education, socio-economic status,
        nationality, personal appearance, race, caste, color, religion, or sexual identity
        and orientation.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        We pledge to act and interact in ways that contribute to an open, welcoming,
        diverse, inclusive, and healthy community.
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
        Our Standards
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Examples of behavior that contributes to a positive environment for our
        community include:
      </Typography>
      <List dense sx={{
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.5,
        listStyleType: 'disc',
        pl: 4,
        '& .MuiTypography-root': {
            fontWeight: 500,
            color: 'black',
        },
      }}>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Demonstrating empathy and kindness toward other people" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Being respectful of differing opinions, viewpoints, and experiences" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Giving and gracefully accepting constructive feedback" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Focusing on what is best not just for us as individuals, but for the overall community" />
        </ListItem>
      </List>

      <Typography variant="body1" sx={{ mt: 2, mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Examples of unacceptable behavior include:
      </Typography>
      <List dense sx={{
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.5,
        listStyleType: 'disc',
        pl: 4,
        '& .MuiTypography-root': {
            fontWeight: 500,
            color: 'black',
        },
      }}>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="The use of sexualized language or imagery, and sexual attention or advances of any kind" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Trolling, insulting or derogatory comments, and personal or political attacks" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Public or private harassment" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Publishing others' private information, such as a physical or email address, without their explicit permission" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Other conduct which could reasonably be considered inappropriate in a professional setting" />
        </ListItem>
      </List>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 1,
        }}
      >
        Enforcement Responsibilities
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Jenkins Board members are responsible for clarifying and enforcing our standards of
        acceptable behavior and will take appropriate and fair corrective action in
        response to any behavior that they deem inappropriate, threatening, offensive,
        or harmful.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Community leaders (Jenkins Board members, service administrators, plugin and other maintainers)
        have the right and responsibility to remove, edit, or reject
        comments, commits, code, wiki edits, issues, and other contributions that are
        not aligned to this Code of Conduct, and will communicate reasons for moderation
        decisions when appropriate.
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
        Scope
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        This Code of Conduct applies within all <Link href="#community-spaces">Community Spaces</Link>, and also applies when
        an individual is officially representing the community in public spaces.
        Examples of representing our community include using an official e-mail address,
        posting via an official social media account, or acting as an appointed
        representative at an online or offline event.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
        id="community-spaces"
      >
        Community Spaces
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          fontSize: '1.25rem',
          mb: 1,
        }}
      >
        Source Control
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        All resources and conversations within the Jenkins GitHub organizations are subject to the code of conduct.
        It includes but not limited to:
      </Typography>
      <List dense sx={{
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.5,
        listStyleType: 'disc',
        pl: 4,
        '& .MuiTypography-root': {
            fontWeight: 500,
            color: 'black',
        },
      }}>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Organizations:" />
          <List dense sx={{
            listStyleType: 'circle',
            pl: 4,
            '& .MuiTypography-root': {
                fontWeight: 500,
                color: 'black',
            },
          }}>
            <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
              <ListItemText primary={<Link href="https://github.com/jenkinsci" target="_blank" rel="noopener">jenkinsci</Link>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
              <ListItemText primary={<Link href="https://github.com/jenkinsci-cert" target="_blank" rel="noopener">jenkinsci-cert</Link>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
              <ListItemText primary={<Link href="https://github.com/jenkins-infra" target="_blank" rel="noopener">jenkins-infra</Link>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
              <ListItemText primary={<Link href="https://github.com/stapler" target="_blank" rel="noopener">stapler</Link>} />
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Commits" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Pull requests" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Issues" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Wikis" />
        </ListItem>
      </List>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Technical criticism is always appreciated. Keep it positive and constructive. Don't merely decry the current state of affairs. Offer and solicit suggestions as to how things may be improved.
        (courtesy of the <Link href="https://golang.org/conduct#values" target="_blank" rel="noopener">Go Lang Code of Conduct</Link>)
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          fontSize: '1.25rem',
          mb: 1,
        }}
      >
        Websites
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Everything hosted under:
      </Typography>
      <List dense sx={{
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.5,
        listStyleType: 'disc',
        pl: 4,
        '& .MuiTypography-root': {
            fontWeight: 500,
            color: 'black',
        },
      }}>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary={<Link href="/">jenkins.io</Link>} />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary={<Link href="https://jenkins-ci.org/" target="_blank" rel="noopener">jenkins-ci.org</Link>} />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="And their sub-domains:" />
          <List dense sx={{
            listStyleType: 'circle',
            pl: 4,
          }}>
            <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
              <ListItemText primary={<Link href="https://issues.jenkins.io/" target="_blank" rel="noopener">issues.jenkins.io</Link>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
              <ListItemText primary={<Link href="https://stories.jenkins.io/" target="_blank" rel="noopener">stories.jenkins.io</Link>} />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          fontSize: '1.25rem',
          mb: 1,
        }}
      >
        Mailing lists
      </Typography>
      <Typography sx={{ fontWeight: 500, fontSize: '1rem' }}>
      All <Link href="/mailing-lists">mailing lists</Link>  hosted on Google Groups and other platforms.
      </Typography>

        <Typography
        variant="subtitle1"
        sx={{
            fontWeight: 700,
            fontSize: '1.25rem',
            mb: 1,
        }}
        >
        Chats
        </Typography>

        <List
        dense
        sx={{
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontSize: '1rem',
            lineHeight: 1.5,
            listStyleType: 'disc',
            pl: 4,
            '& .MuiTypography-root': {
            fontWeight: 500,
            color: 'black',
            },
        }}
        >
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
            <ListItemText
            primary={
                <>
                All chats documented on{' '}
                <Link href="/chat" underline="hover">
                    this page
                </Link>
                , e.g. IRC channels: #jenkins, #jenkins-meeting, #jenkins-infra, etc.
                </>
            }
            />
        </ListItem>

        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
            <ListItemText
            primary={
                <>
                Gitter channels within the{' '}
                <Link
                    href="https://app.gitter.im/#/room/#jenkins-ci:matrix.org"
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                >
                    jenkinsci
                </Link>{' '}
                space
                </>
            }
            />
        </ListItem>

        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
            <ListItemText
            primary="Jenkins chats hosted by Linux Foundation and its subsidiaries including Continuous Delivery Foundation"
            />
        </ListItem>
        </List>

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          fontSize: '1.25rem',
          mb: 1,
        }}
      >
        Events
      </Typography>
      <List dense sx={{
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.5,
        listStyleType: 'disc',
        pl: 4,
        '& .MuiTypography-root': {
            fontWeight: 500,
            color: 'black',
        },
      }}>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary={<Link href="/projects/jam/">Jenkins Area Meetups</Link>} />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary={<Link href="/events/online-meetup">Jenkins Online Meetup</Link>} />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Events where Jenkins is officially being represented:" />
          <List dense sx={{
            listStyleType: 'circle',
            pl: 4,
            '& .MuiTypography-root': {
                fontWeight: 500,
                color: 'black',
            },
          }}>
            <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
              <ListItemText primary={<Link href="https://fosdem.org" target="_blank" rel="noopener">FOSDEM</Link>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
              <ListItemText primary={<Link href="https://socallinuxexpo.org/" target="_blank" rel="noopener">SCaLE</Link>} />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          fontSize: '1.25rem',
          mb: 1,
        }}
      >
        Other Jenkins Communities
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Other Jenkins groups (such as conferences, meetups, and other unofficial forums) and local communities are encouraged to adopt this Code of Conduct.
        Those groups must provide their own moderators and/or reporting system.
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
        Reporting
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Instances of abusive, harassing, or otherwise unacceptable behavior may be
        reported by contacting the <Link href="/project/board">Jenkins board</Link>.
        If you feel somebody has breached this code, please send an email with the
        relevant information (links, etc) to <code style={{ color: 'red' }}>jenkinsci-board@googlegroups.com</code>.
        This email list is only readable by the <Link href="/project/board">Governance Board</Link> members.
        The board may not have all of the necessary context and history,
        so it's better to describe the issue thoroughly.
        All complaints will be reviewed
        and investigated and will result in a response that is deemed necessary and
        appropriate to the circumstances.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        If you believe one of the board members has violated the code of conduct
        above, please email one of the other members of the Governance Board with the
        details (their emails are visible on the <Link href="/project/board">Governance Board</Link> page).
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        If the desired resolution cannot be reached on the Jenkins community level,
        an issue can be escalated to the Continuous Delivery Foundation (CDF) by contacting the project team at <code style={{ color: 'red' }}>conduct@cd.foundation</code>.
        See the <Link href="https://github.com/cdfoundation/.github/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener">CDF Code of Conduct</Link> for more information about reporting and enforcement in this case.
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
        Handling of violations
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Community leaders will follow these Community Impact Guidelines in determining
        the consequences for any action they deem in violation of this Code of Conduct.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Depending on the severity of the violations the board may elect to take one of the following paths.
        Handling of violations will be done in private and the affected people will be notified.
        In the majority of cases there will not be a public announcement of the resolution,
        unless the Governance Board deems it necessary to announce the resolution in public.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        1. Correction
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        If the severity of the violation is mild enough, the board will notify the community member that their conduct is not acceptable and needs to change.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 700 }}>
        Community Impact: Use of inappropriate language or other behavior deemed
        unprofessional or unwelcome in the community.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        <strong>Consequence:</strong> A private, written warning from community leaders, providing
        clarity around the nature of the violation and an explanation of why the
        behavior was inappropriate. A public apology may be requested.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        2. Warning
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        If the severity of the violation is serious enough,
        the board will issue an official warning to the community member.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 700 }}>
        Community Impact: A violation through a single incident or series
        of actions.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        <strong>Consequence:</strong> A warning with consequences for continued behavior. No
        interaction with the people involved, including unsolicited interaction with
        those enforcing the Code of Conduct, for a specified period of time. This
        includes avoiding interactions in community spaces as well as external channels
        like social media. Violating these terms may lead to a <em>Probation</em> or <em>Ban</em>.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        3. Probation
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        If the severity of the violation is serious or reprimands are not effective,
        the board will ask the community member to "take a break" 
        and to step away from the community for a period of time.
        The intent of this is to send a clear signal to the community member that their
        conduct is unacceptable, de-escalate the situation for everyone who are
        affected, and ask the community member to reflect on their behaviors.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 700 }}>
        Community Impact: A serious violation of community standards, including
        sustained inappropriate behavior.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        <strong>Consequence:</strong> A temporary ban from any sort of interaction or public
        communication with the community for a specified period of time
        (chats, mailing lists, pull requests, issues, events, etc.).
        No public or private interaction with the people involved, including unsolicited interaction
        with those enforcing the Code of Conduct, is allowed during this period.
        Violating these terms may lead to a ban.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        4. Ban
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        <strong>Community Impact:</strong> Demonstrating a pattern of violation of community
        standards, including sustained inappropriate behavior, harassment of an
        individual, or aggression toward or disparagement of classes of individuals.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        <strong>Consequence:</strong> A permanent ban from any sort of public interaction within
        the community.
        The individual will be expelled from the Jenkins community.
        After 12 months they may appeal to the board for the ban to be lifted.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        The ban will include but is not limited to:
      </Typography>
      <List dense sx={{
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.5,
        listStyleType: 'disc',
        pl: 4,
        '& .MuiTypography-root': {
            fontWeight: 500,
            color: 'black',
        },
      }}>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
        <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>
            Bans from Jenkins community{' '}
            <Link href="/chat" underline="hover">
                chats
            </Link>
        </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Deletion of their LDAP account" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Blocking their GitHub username from the Jenkins GitHub organizations" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Banning their email address from Jenkins mailing lists" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Banning them from social media and meetup groups" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Banning them from participating in Community-organized events" />
        </ListItem>
      </List>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 1,
        }}
      >
        Attribution
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        This Code of Conduct is adapted from the <Link href="https://www.contributor-covenant.org/" target="_blank" rel="noopener">Contributor Covenant</Link>,
        version 2.1, available at{' '}
        <Link href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html" target="_blank" rel="noopener">
          https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
        </Link>.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        Community Impact Guidelines were inspired by <Link href="https://github.com/mozilla/diversity" target="_blank" rel="noopener">Mozilla's code of conduct
        enforcement ladder</Link>.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
        For answers to common questions about the adapted code of conduct, see the FAQ at{' '}
        <Link href="https://www.contributor-covenant.org/faq" target="_blank" rel="noopener">https://www.contributor-covenant.org/faq</Link>. Translations are available at{' '}
        <Link href="https://www.contributor-covenant.org/translations" target="_blank" rel="noopener">https://www.contributor-covenant.org/translations</Link>.
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
        Version history
      </Typography>
      <List dense sx={{
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: 1.5,
        listStyleType: 'disc',
        pl: 4,
        '& .MuiTypography-root': {
            fontWeight: 500,
            color: 'black',
        },
      }}>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText primary="Aug 23, 2023" primaryTypographyProps={{variant: 'body1', sx: { fontWeight: 'bold' }}} secondary="Minor update of the Code of Conduct adding translations to the footer and incorporating the 2.1 update." />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText 
            primary="Jul 02, 2020" primaryTypographyProps={{variant: 'body1', sx: { fontWeight: 'bold' }}}
            secondary={
              <span>
                Major update of the Code of Conduct. It was approved the project governance meeting on Jul 01 (
                <Link href="https://docs.google.com/document/d/11Nr8QpqYgBiZjORplL_3Zkwys2qK1vEvK-NYyYa4rzg/edit#heading=h.6rx5y09hwmti" target="_blank" rel="noopener">meeting notes</Link>,{' '}
                <Link href="https://groups.google.com/forum/#!topic/jenkinsci-dev/u0T56f9MSZY" target="_blank" rel="noopener">developer mailing list discussion</Link>).{' '}
                Notable changes: Code of Conduct is updated to Contributor Covenant, version 2.0. Align Handling of Violations with Contributor Covenant 2.0 Enforcement Guidelines. Refresh the Community Spaces section. Reference Continuous Delivery Foundation (CDF) as a second escalation level.
              </span>
            }
          />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0, pl: 1 }}>
          <ListItemText 
            primary="Jan 06, 2016" primaryTypographyProps={{variant: 'body1', sx: { fontWeight: 'bold' }}}
            secondary={
              <span>
                First version of Code of Conduct is introduced. It is adapted from the{' '}
                <Link href="https://www.contributor-covenant.org/version/1/3/0/" target="_blank" rel="noopener">Contributor Covenant, version 1.3.0</Link>.{' '}
                The Code of Conduct was approved by the project governance meeting on{' '}
                <Link href="http://meetings.jenkins-ci.org/jenkins-meeting/2016/jenkins-meeting.2016-01-06-19.01.html" target="_blank" rel="noopener">2016-01-06</Link>
              </span>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
