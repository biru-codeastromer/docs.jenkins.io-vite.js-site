import { Box, Typography, Link, List, ListItem, ListItemText, Table, TableBody, TableCell, TableHead, TableRow, useTheme } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const DocumentPage = () => {
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
        <title>Jenkins Documentation</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '0.5rem',
        }}
      >
        Document
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Jenkins has lots of documentation, and we appreciate any contributions to it:
        new docs, design and styling, copy-editing, reviews, etc.
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        We coordinate and discuss documentation efforts in the <Link href="/sigs/docs">Documentation Special Interest Group</Link>.
        You can reach out to us in the mailing list or on <Link href="https://app.gitter.im/#/room/#jenkins/docs:matrix.org">Gitter</Link>, and you can also join our <Link href="/sigs/docs/#meetings">regular meetings</Link>.
        See the contacts on the right sidebar.
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
        Where to find documentation?
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        There are many documentation sources in Jenkins.
        This website and the <Link href="https://plugins.jenkins.io/">plugins site</Link> are the most notable ones,
        but we also have docs in other places (GitHub repositories, various sites like <Link href="https://github.com/jenkins-infra/javadoc">javadoc.jenkins.io</Link> or the <Link href="https://wiki.jenkins.io/">deprecated Jenkins Wiki</Link>).
        For the most of the repositories we try to follow the documentation-as-code approach.
      </Typography>
      
      <Table sx={{ mb: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>Documentation type</TableCell>
            <TableCell>Repository</TableCell>
            <TableCell>Comments and links</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell><Link href="/doc/">User documentation</Link></TableCell>
            <TableCell><Link href="https://github.com/jenkins-infra/jenkins.io/tree/master/content/doc">jenkins-infra/jenkins.io</Link></TableCell>
            <TableCell><Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc">Contributing guidelines</Link>.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Link href="/doc/developer">Developer documentation</Link></TableCell>
            <TableCell><Link href="https://github.com/jenkins-infra/jenkins.io/tree/master/content/doc/developer">jenkins-infra/jenkins.io</Link></TableCell>
            <TableCell><Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc">Contributing guidelines</Link>.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Link href="/solutions/">Solution pages</Link></TableCell>
            <TableCell><Link href="https://github.com/jenkins-infra/jenkins.io/tree/master/content/solutions">jenkins-infra/jenkins.io</Link></TableCell>
            <TableCell><Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc#adding-a-solution-page">Contributing guidelines</Link></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Link href="https://plugins.jenkins.io/">Plugin documentation</Link></TableCell>
            <TableCell>Plugin repositories or Jenkins Wiki</TableCell>
            <TableCell>See <Link href="/doc/developer/publishing/documentation/">Developer documentation</Link> for more information about plugin docs and the ongoing migration from Wiki to GitHub.</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.8rem',
          mt: 5,
          mb: 1,
        }}
      >
        Newcomers
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you are a newcomer, documentation is a great place to contribute.
        A lot of small patches can be done from the GitHub's web interface even without forking repositories and cloning them locally.
        You can open any GitHub Markdown or Asciidoc page in any Jenkins repo, click <i>Edit</i> on the page, modify and preview changes in the web interface, and then propose a change.
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Useful links:
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
          <ListItemText primary={<Link href="https://github.com/jenkins-infra/jenkins.io/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22">Newbie-friendly documentation tasks</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://github.com/jenkins-infra/jenkins.io/issues?q=is%3Aopen+is%3Aissue">More advanced documentation tasks</Link>} />
          <ListItemText secondary="(no good first issue label set)" />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="/sigs/docs/">Documentation SIG Page</Link>} />
          <ListItemText secondary="with links to the Jenkins documentation" />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link href="https://help.github.com/en/github/writing-on-github/about-writing-and-formatting-on-github">Writing and Formatting on GitHub</Link>} />
          <ListItemText secondary="(applies to Github Markdown documentation)" />
        </ListItem>
      </List>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: '1.5rem',
          mt: 5,
          mb: 1,
        }}
      >
        Featured projects
      </Typography>
      
      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.3rem',
          mb: 1,
        }}
      >
        Good first issues
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        The documentation issue list includes issues that are good for first time contributors.
        See the <Link href="https://github.com/jenkins-infra/jenkins.io/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22">"good first issues"</Link> list.
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        If you decide to work on an issue, add a comment to the issue that tells others you are working on it.
        For example, add the comment "I'm working on this issue".
        You do not need to wait for someone to assign you an issue.
        Choose an issue, add a comment, and start writing.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.3rem',
          mb: 1,
        }}
      >
        Migrating Plugin Documentation to GitHub
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Currently we are working on migrating the documentation from Jenkins Wiki to GitHub and jenkins.io.
        See <Link href="/blog/2019/10/21/plugin-docs-on-github/">this blog post</Link> for more information about the reasons why we do this migration.
        This migration involves modification of hundreds of pages and repositories, and we invite everyone to contribute.
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <Link href="/doc/developer/publishing/wiki-page/#migrating-from-wiki-to-github"><b>Migrating plugin documentation to GitHub</b></Link>
      </Typography>
      
      <Box sx={{ my: 4 }}>
        <iframe 
          width="640" 
          height="360" 
          src="https://www.youtube.com/embed/GseBgDOaa0A?start=317" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontSize: '1.3rem',
          mb: 1,
        }}
      >
        Migrating Other Documentation to www.jenkins.io
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Jenkins user documentation was initially created in the <Link href="https://wiki.jenkins.io">Jenkins Wiki</Link>.
        The Jenkins wiki was made read-only in 2019.
        Jenkins documentation improvements are now made on the Jenkins documentation site at www.jenkins.io.
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        Some of the documentation on the deprecated <Link href="https://wiki.jenkins.io">Jenkins Wiki</Link> is still useful.
        Skilled Jenkins users and administrators may find Wiki information that is still accurate and can be added to www.jenkins.io.
        They are encouraged to submit pull requests for those cases.
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        This is <b>not</b> a task for new contributors or for those who are not experienced with Jenkins.
        New contributors and inexperienced Jenkins users should assist with other documentation tasks rather than attempting to migrate documentation from the wiki to www.jenkins.io.
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        <Link href="https://github.com/jenkins-infra/jenkins.io/blob/master/CONTRIBUTING.adoc#moving-documentation-from-jenkins-wiki"><b>Moving other documentation from wiki to www.jenkins.io</b></Link>
      </Typography>
      
      <Box sx={{ my: 4 }}>
        <iframe 
          width="640" 
          height="360" 
          src="https://www.youtube.com/embed/KB-NPlRvLoY" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </Box>
      
      <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
        There are also other ongoing projects which you can find on the <Link href="/sigs/docs/#ongoing-projects">Documentation SIG page</Link> and in the <Link href="/project/roadmap">project roadmap</Link>.
      </Typography>
    </Box>
  );
};

export default DocumentPage;
