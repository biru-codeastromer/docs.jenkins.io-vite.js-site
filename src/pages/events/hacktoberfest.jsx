import React from 'react';
import { Typography, Box, Link, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material';
import '../../styles/global.css';
export default function Hacktoberfest() {
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
        Hacktoberfest
      </Typography>

      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <img 
          src="/assets/events/hacktoberfest/hacktoberfest_2024_logo.svg" 
          alt="Hacktoberfest" 
          style={{ 
            width: 720,
            height: 'auto',
            display: 'block',
            ml: 0,
            mb: 1,
          }}
        />
      </Box>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <Link href="https://hacktoberfest.com/" target="_blank" rel="noopener noreferrer" underline="hover">
          Hacktoberfest
        </Link>{' '}
        is a month-long celebration of open source software that happens every October.
        During this event, everyone can support open source by contributing changes and earning a unique digital reward.
        This year marks the 11th anniversary of Hacktoberfest!
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We invite everyone to participate and contribute to the Jenkins project, regardless of their background and Jenkins experience.
        There are many ways to{' '}
        <Link href="/participate/" underline="hover">
          contribute
        </Link>{' '}
        to Jenkins during Hacktoberfest.
        You can participate by working on{' '}
        <Link href="/participate/code/" underline="hover">
          code
        </Link>{' '}
        or{' '}
        <Link href="/participate/document/" underline="hover">
          documentation
        </Link>, contributing to{' '}
        <Link href="/doc/developer/internationalization/" underline="hover">
          localization
        </Link>, or creating new{' '}
        <Link href="/artwork" underline="hover">
          artwork
        </Link>.
        You can also share your experiences with Jenkins by{' '}
        <Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc#adding-a-blog-post" target="_blank" rel="noopener noreferrer" underline="hover">
          creating a new blogpost
        </Link>.
        Generally, any four non-spammy pull requests in GitHub would qualify.
        Please refer to the{' '}
        <Link href="/participate/" underline="hover">
          Contribute and Participate
        </Link>{' '}
        page for more information about how to contribute.
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
        Quick start
      </Typography>
      <ol
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
        <li style={{ marginBottom: '0.5rem' }}>Sign-up to Hacktoberfest on the{' '}
          <Link href="https://hacktoberfest.com" target="_blank" rel="noopener noreferrer" underline="hover">
            event website
          </Link>.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Join our{' '}
          <Link href="https://app.gitter.im/#/room/#jenkinsci_hacktoberfest:gitter.im" target="_blank" rel="noopener noreferrer" underline="hover">
            Gitter channel
          </Link>.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Everything is set, just start creating pull requests on repositories with the{' '}
          <Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+topic%3Ahacktoberfest&type=repositories" target="_blank" rel="noopener noreferrer" underline="hover">
            <code style={{ color: 'red' }}>hacktoberfest</code> topic
          </Link>!
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>If a repository has no <code style={{ color: 'red' }}>hacktoberfest</code> topic set, contact the maintainers to see if they are willing to accept a contribution.</li>
            <li style={{ marginBottom: '0.5rem' }}>Alternatively, if a pull request has the label <code style={{ color: 'red' }}>hacktoberfest-accepted</code>, it will count towards your total.</li>
            <li style={{ marginBottom: '0.5rem' }}>Your pull request must not be labeled as invalid to be counted.</li>
            <li style={{ marginBottom: '0.5rem' }}>For your pull requests to be accepted, the request must either be merged or have the <code style={{ color: 'red' }}>hacktoberfest-accepted</code> label.</li>
          </ul>
        </li>
      </ol>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
      >
        Where to contribute?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        The Jenkins project is spread across two organizations on GitHub:{' '}
        <Link href="https://github.com/jenkinsci/" target="_blank" rel="noopener noreferrer" underline="hover">
          <code style={{ color: 'red' }}>jenkinsci</code>
        </Link>{' '}
        and{' '}
        <Link href="https://github.com/jenkins-infra/" target="_blank" rel="noopener noreferrer" underline="hover">
          <code style={{ color: 'red' }}>jenkins-infra</code>
        </Link>.
        You are welcome to contribute to <strong>any</strong> repository with the{' '}
        <Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+topic%3Ahacktoberfest&type=repositories" target="_blank" rel="noopener noreferrer" underline="hover">
          <code style={{ color: 'red' }}>hacktoberfest</code> topic
        </Link>{' '}
        in <strong>either</strong> of those organizations.
        Be aware that repositories may have different contribution guidelines, review processes, and merge policies.
        Not all pull requests will automatically count towards Hacktoberfest.
        Keep in mind, the pull request must either be merged in a repository with the <code style={{ color: 'red' }}>hacktoberfest</code> topic or have the <code style={{ color: 'red' }}>hacktoberfest-accepted</code> label.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+topic%3Ahacktoberfest&type=repositories" target="_blank" rel="noopener noreferrer" underline="hover">
          Repositories marked for Hacktoberfest
        </Link>{' '}
        - In these repositories you can just submit pull requests, no extra steps are needed.
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
        Issue queries
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We have marked some issues in Jenkins Jira and GitHub issues which can be handled by contributors during Hacktoberfest:
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
          <Link href="https://issues.jenkins.io/secure/Dashboard.jspa?selectPageId=19342" target="_blank" rel="noopener noreferrer" underline="hover">
            Newbie-friendly issues in Jenkins Jira
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22" target="_blank" rel="noopener noreferrer" underline="hover">
            Good first issues on GitHub
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+is%3Aissue+is%3Aopen+label%3Ahacktoberfest" target="_blank" rel="noopener noreferrer" underline="hover">
            GitHub issues suggested for Hacktoberfest
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
        Featured projects
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you are a new contributor, we have prepared a list of projects/components where you will get a warm welcome.
        All these projects have tasks ready for new contributors, contributing guidelines, and active maintainers
        who have committed to assist contributors and to provide quick turnaround in pull requests.
      </Typography>

      <Table 
        sx={{
          border: '1px solid #ccc',
          borderCollapse: 'collapse',
          '& *': {
            fontWeight: 500,
            fontSize: '1rem',
          },
          '& td, & th': {
            border: '1px solid #ccc',
          },
        }}
      >
        <TableBody>
          <TableRow>
            <TableCell><Link href="/" underline="hover">Jenkins Website</Link></TableCell>
            <TableCell>Documentation, Asciidoc, CSS</TableCell>
            <TableCell>
              Extend and improve Jenkins documentation, help to improve the website's look&feel, create{' '}
              <Link href="/blog/" underline="hover">a new blogpost</Link>, a technology-specific solution page or a tutorial.
              <ul
                style={{
                  paddingLeft: '1.5rem',
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc" target="_blank" rel="noopener noreferrer" underline="hover">
                    Contributing guidelines
                  </Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="https://github.com/jenkins-infra/jenkins.io/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22" target="_blank" rel="noopener noreferrer" underline="hover">
                    Good first issues
                  </Link>
                </li>
              </ul>
              Additionally, we invite new and experienced Jenkins developers to help improve the{' '}
              <Link href="/doc/developer/" underline="hover">developer documentation</Link>.
              If you want to learn a Jenkins development topic and share your new knowledge with others, or want to help someone else learn, you're welcome to contribute here.
              <ul
                style={{
                  paddingLeft: '1.5rem',
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="https://github.com/jenkins-infra/jenkins.io/projects/3" target="_blank" rel="noopener noreferrer" underline="hover">
                    Board
                  </Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="https://app.gitter.im/#/room/#jenkins/docs:matrix.org" target="_blank" rel="noopener noreferrer" underline="hover">
                    chat
                  </Link>
                </li>
              </ul>
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell><Link href="https://github.com/jenkinsci/jenkins" target="_blank" rel="noopener noreferrer" underline="hover">Jenkins Core</Link></TableCell>
            <TableCell>Java, Jelly, Groovy, Javascript, HTML, CSS, SCSS</TableCell>
            <TableCell>
              There is always something to improve in Jenkins core itself.
              You can address various issues, improve the codebase,
              and add new features there.
              <ul
                style={{
                  paddingLeft: '1.5rem',
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="https://github.com/jenkinsci/jenkins/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" underline="hover">
                    Contributing
                  </Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="https://issues.jenkins.io/issues/?jql=project%20%3D%20JENKINS%20AND%20status%20in%20(Open%2C%20%22In%20Progress%22%2C%20Reopened)%20AND%20labels%20in%20(newbie-friendly)%20AND%20component%20in%20(core)" target="_blank" rel="noopener noreferrer" underline="hover">
                    newcomer-friendly issues
                  </Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="https://app.gitter.im/#/room/#jenkinsci_jenkins:gitter.im" target="_blank" rel="noopener noreferrer" underline="hover">
                    chat
                  </Link>
                </li>
              </ul>
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell><Link href="http://plugins.jenkins.io/" target="_blank" rel="noopener noreferrer" underline="hover">Jenkins Plugin Site</Link></TableCell>
            <TableCell>Javascript, Java, React, Gatsby</TableCell>
            <TableCell>
              The plugin site is used to find information about 1800+ plugins available in Jenkins.
              It provides plugin documentation, changelogs, open issues, and other data needed for Jenkins admins and end users.
              We are interested to keep improving the plugin site's UI/UX,
              provide more search options, and to provide deeper integration with GitHub and other services.
              Creating a dark mode was also mentioned a couple of times.
              <ul
                style={{
                  paddingLeft: '1.5rem',
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  Repositories:{' '}
                  <Link href="https://github.com/jenkins-infra/plugin-site" target="_blank" rel="noopener noreferrer" underline="hover">
                    Plugin site
                  </Link>,{' '}
                  <Link href="https://github.com/jenkins-infra/plugin-site-api/" target="_blank" rel="noopener noreferrer" underline="hover">
                    Plugin site API
                  </Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Issues:{' '}
                  <Link href="https://github.com/jenkins-infra/plugin-site/issues" target="_blank" rel="noopener noreferrer" underline="hover">
                    Plugin Site
                  </Link>,{' '}
                  <Link href="https://github.com/jenkins-infra/plugin-site-api/issues" target="_blank" rel="noopener noreferrer" underline="hover">
                    Plugin Site API
                  </Link>,{' '}
                  <Link href="https://issues.jenkins.io/issues/?jql=project%20%3D%20WEBSITE%20AND%20component%20%3D%20plugin-site%20AND%20status%20%3D%20%22To%20Do%22%20%20" target="_blank" rel="noopener noreferrer" underline="hover">
                    Jira tickets
                  </Link>
                </li>
              </ul>
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell><Link href="/artwork" underline="hover">Jenkins Artwork</Link></TableCell>
            <TableCell>Design</TableCell>
            <TableCell>
              Create new images and logos for{' '}
              <Link href="/projects/jam/" underline="hover">Jenkins area meetups</Link>,
              <Link href="/projects/" underline="hover">subprojects</Link>, and plugins.
              You can also contribute new graphics to plugins.
              <ul
                style={{
                  paddingLeft: '1.5rem',
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc#adding-a-logo" target="_blank" rel="noopener noreferrer" underline="hover">
                    Adding a logo
                  </Link>
                </li>
              </ul>
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell><Link href="/projects/infrastructure/#pick-up-a-task" underline="hover">Jenkins Infrastructure</Link></TableCell>
            <TableCell>Asciidoctor, Docker, Github Actions, Jenkins Pipeline, Kubernetes, Markdown, Packer, Puppet, Python, Shell, YAML</TableCell>
            <TableCell>
              An infrastructure is constantly moving forward: there are always dependencies to update,
              security issues to fix, new feature to release, tools to improve, etc.
              Any kind of contribution is welcome: from documentation to real life code.
              Either you are a beginner in this area, or a veteran of system administration,
              you are welcome to pick an issue and contribute!
              <ul
                style={{
                  paddingLeft: '1.5rem',
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  You might want to read the Jenkins Infrastructure's{' '}
                  <Link href="/projects/infrastructure/#contributing" target="_blank" rel="noopener noreferrer" underline="hover">
                    Contributing Guide
                  </Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Ready for action? Look at the good first issues we have on the infrastructure help desk at{' '}
                  <Link href="https://github.com/jenkins-infra/helpdesk/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22" target="_blank" rel="noopener noreferrer" underline="hover">
                    good first issues
                  </Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  You can also browse the{' '}
                  <Link href="https://github.com/jenkins-infra" target="_blank" rel="noopener noreferrer" underline="hover">
                    https://github.com/jenkins-infra
                  </Link>{' '}
                  GitHub organization and check for repositories and code.
                </li>
              </ul>
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell><Link href="/doc/developer/security/csp/" underline="hover">Content Security Policy (CSP)</Link></TableCell>
            <TableCell>JavaScript, Jelly, Security</TableCell>
            <TableCell>
              During the last years, the Jenkins Security team has seen a lot of{' '}
              <Link href="https://owasp.org/www-community/attacks/xss/" target="_blank" rel="noopener noreferrer" underline="hover">
                Cross-Site Scripting (XSS)
              </Link>{' '}
              vulnerabilities, inside Jenkins core and also for a lot of plugins.
              They have put in place different kinds of mechanisms to enhance the protection of some of the common dangerous code locations.
              But this kind of approach does not scale enough to cover the wide ecosystem and the numerous different ways of introducing (accidentally) XSS vulnerabilities.
              The objective of this topic is to ease the introduction of{' '}
              <Link href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank" rel="noopener noreferrer" underline="hover">
                Content Security Policy (CSP)
              </Link>{' '}
              in Jenkins by un-inlining the JavaScript resources.
              <ul
                style={{
                  paddingLeft: '1.5rem',
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>• Skill requirement: a bit of JavaScript. The Jelly part is straightforward. No need to have security background.</li>
                <li style={{ marginBottom: '0.5rem' }}>• Time requirement: between 30 minutes and 4 hours.</li>
              </ul>
              More details on the approach in{' '}
              <Link href="https://docs.google.com/document/d/1hr_Kaf0fVWBACibpHbSYsk4RoqcHD3cBrqXxuTtWKVM" target="_blank" rel="noopener noreferrer" underline="hover">
                this document
              </Link>.
              <ul
                style={{
                  paddingLeft: '1.5rem',
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  <Link href="https://issues.jenkins.io/issues/?jql=labels%20%3D%20newbie-friendly%20and%20status%20not%20in%20(Resolved%2C%20closed%2C%20%22In%20Review%22%2C%20%22In%20Progress%22)%20and%20%20%22Epic%20Link%22%20%3D%20JENKINS-60865" target="_blank" rel="noopener noreferrer" underline="hover">
                    Jira newcomer-friendly issues
                  </Link>
                </li>
              </ul>
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell>French translation</TableCell>
            <TableCell>Git, French, Jenkins developer tools</TableCell>
            <TableCell>
              Improve coverage of French localization of the Jenkins web interface, including the Jenkins core and plugins.
              The same is possible for other languages, let us know if you are interested!
              <ul
                style={{
                  paddingLeft: '1.5rem',
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  Some proposals are listed in a{' '}
                  <Link href="https://issues.jenkins.io/browse/JENKINS-66660" target="_blank" rel="noopener noreferrer" underline="hover">
                    dedicated Epic
                  </Link>.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Use and improve the{' '}
                  <Link href="/doc/book/using/using-local-language/" underline="hover">
                    language selection documentation
                  </Link>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Use and improve the{' '}
                  <Link href="/doc/developer/internationalization/" underline="hover">
                    internationalization documentation
                  </Link>
                </li>
              </ul>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 4,
          mb: 2,
        }}
      >
        Experienced developers
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you are an established developer and want to create something new, feel free to explore beyond the suggested topics!
        Feel free to contribute to any area of Jenkins.
        If you see any major functionality missing in Jenkins, we invite you to create new plugins.
        Refer to the{' '}
        <Link href="/doc/developer/tutorial/" underline="hover">
          Plugin Tutorial
        </Link>{' '}
        and{' '}
        <Link href="/doc/developer/publishing/requesting-hosting/" underline="hover">
          Hosting Plugins
        </Link>{' '}
        guidelines for more information.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mt: 5,
          mb: 2,
        }}
        id="local-events"
      >
        Events
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Hacktoberfest is a fully online event this year.
        Jenkins specific events for Hacktoberfest will be announced on the{' '}
        <Link href="/events/" underline="hover">
          events page
        </Link>, in social media ({' '}
        <Link href="https://twitter.com/jenkinsci" target="_blank" rel="noopener noreferrer" underline="hover">
          twitter
        </Link>{' '}
        and{' '}
        <Link href="https://www.linkedin.com/company/jenkins-project" target="_blank" rel="noopener noreferrer" underline="hover">
          LinkedIn
        </Link>{' '}
        ), and through the{' '}
        <Link href="https://www.meetup.com/Jenkins-online-meetup/" target="_blank" rel="noopener noreferrer" underline="hover">
          Jenkins Online Meetup page
        </Link>.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We are also looking for event organizers and sponsors!
        See our{' '}
        <Link href="/events/hacktoberfest/event-kit" underline="hover">
          Event Kit
        </Link>{' '}
        for more information and guidelines.
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
        FAQ
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        See{' '}
        <Link href="/events/hacktoberfest/faq" underline="hover">
          Hacktoberfest in Jenkins FAQ
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
        Resources
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
          Presentation: Contributing to Jenkins - It Is All About You ({' '}
          <Link href="https://docs.google.com/presentation/d/1JHgVzWZAx95IsUAZp8OoyCQGGkrCjzUd7eblwd1Y-hA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" underline="hover">
            slides
          </Link>{' '}
          )
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="https://youtu.be/nLTfJOZG5kw?t=214" target="_blank" rel="noopener noreferrer" underline="hover">
            Jenkins in Hacktoberfest 2019
          </Link>
        </li>
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
        Contact us
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
          Gitter:{' '}
          <Link href="https://app.gitter.im/#/room/#jenkinsci_hacktoberfest:gitter.im" target="_blank" rel="noopener noreferrer" underline="hover">
            jenkinsci/hacktoberfest
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          GitHub:{' '}
          <Link href="https://github.com/orgs/jenkinsci/teams/hacktoberfest" target="_blank" rel="noopener noreferrer" underline="hover">
            @jenkinsci/hacktoberfest
          </Link>,{' '}
          <Link href="https://github.com/orgs/jenkins-infra/teams/hacktoberfest" target="_blank" rel="noopener noreferrer" underline="hover">
            @jenkins-infra/hacktoberfest
          </Link>
        </li>
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
        Previous years
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
          <Link href="/blog/2023/09/20/Hacktoberfest-2023/" target="_blank" rel="noopener noreferrer" underline="hover">
            2023
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/blog/2022/11/17/hacktoberfest-recap/" target="_blank" rel="noopener noreferrer" underline="hover">
            2022
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/blog/2021/10/31/hacktoberfest-results-2021/" target="_blank" rel="noopener noreferrer" underline="hover">
            2021
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/blog/2021/01/12/new-year-report/#jenkins-in-hacktoberfest-2020" target="_blank" rel="noopener noreferrer" underline="hover">
            2020
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/blog/2019/10/01/hacktoberfest/" target="_blank" rel="noopener noreferrer" underline="hover">
            2019
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/blog/2018/10/01/hacktoberfest/" target="_blank" rel="noopener noreferrer" underline="hover">
            2018
          </Link>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link href="/blog/2017/10/06/hacktoberfest/" target="_blank" rel="noopener noreferrer" underline="hover">
            2017
          </Link>
        </li>
      </ul>
    </Box>
  );
}