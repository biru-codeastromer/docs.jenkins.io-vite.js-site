import { Box, Typography, Link } from '@mui/material';

const CodePage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Contribute code
      </Typography>
      
      <Typography paragraph>
        Jenkins project includes a lot of code, and we invite everyone to contribute to the project.
        There is a diverse set of programming languages used in Jenkins,
        including but not limited to: Java, JavaScript, Groovy, Golang, Ruby, Shell scripts.
        And, since Jenkins is an automation server with hundreds of plugins, there is a huge number of technologies involved.
        If you are an expert or just want to study something new while contributing,
        you may find interesting opportunities in our project.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Where to contribute?
      </Typography>
      
      <Typography paragraph>
        The Jenkins project is spread across multiple organizations on GitHub.
        You are welcome to contribute to <b>any</b> repository in <b>any</b> of those organizations, or to any other Jenkins-related repository on GitHub.
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li>
          <Link href="https://github.com/jenkinsci">jenkinsci</Link> - Main organization.
          Jenkins core, plugins and libraries reside there.
          To aid in classifying our 1000+ Git repositories, some naming conventions have been adopted:
          <Typography component="ul" sx={{ pl: 4 }}>
            <li>plugins are named "*-plugin"</li>
            <li>libraries are named "lib-*"</li>
          </Typography>
        </li>
        <li>
          <Link href="https://github.com/jenkins-infra">jenkins-infra</Link> - Jenkins infrastructure, including the website and other services
        </li>
      </Typography>
      
      <Typography paragraph>
        Various components in Jenkins have differing review and delivery policies,
        so please see the repositories for specific contributing guidelines.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Plugins
      </Typography>
      
      <Typography paragraph>
        There are more than <Link href="https://plugins.jenkins.io">1800 plugins</Link> in Jenkins,
        and these plugins implement the majority of Jenkins functionality.
        Every plugin is an isolated component which can be developed independently of other parts of the project,
        with help of the APIs and development tools provided by the project.
      </Typography>
      
      <Typography paragraph>
        Most Jenkins contributors work on plugins and it is often the best way to start contributing to the project.
        Here are some documentation links:
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="/doc/developer/">Jenkins developer documentation</Link></li>
        <li><Link href="/doc/developer/plugin-development/">The plugin tutorial will get you started with Jenkins plugin development</Link></li>
        <li><Link href="/doc/developer/publishing/requesting-hosting/">The complete guide to hosting and publishing plugins</Link></li>
        <li><Link href="/doc/developer/plugin-governance/adopt-a-plugin/">Adopt a plugin</Link></li>
        <li><Link href="https://wiki.jenkins.io/display/JENKINS/Before+starting+a+new+plugin">Advice before creating a new plugin</Link></li>
        <li><Link href="https://wiki.jenkins.io/display/JENKINS/Pull+Request+to+Repositories">How we handle pull requests to plugin repositories</Link></li>
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Jenkins core
      </Typography>
      
      <Typography paragraph>
        Jenkins core is the heart of any Jenkins installation. It provides the kernel functionality and extension APIs used by Jenkins plugins.
        Written mostly in Java, it includes multiple components and frameworks.
        The core also includes the standard Web container and acts as an executable WAR file which can be run in the instance.
      </Typography>
      
      <Typography paragraph>
        See the <Link href="https://github.com/jenkinsci/jenkins">jenkinsci/jenkins</Link> repository for the overview and documentation links.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Infrastructure
      </Typography>
      
      <Typography paragraph>
        As an independent open source project, the Jenkins project maintains most of its own infrastructure including services which help to keep the project running. 
        The kind of things that fall into "infrastructure" can span from operating virtual machines, containers, configuring network or developing and maintaining project-specific applications to make the development of Jenkins core and plugins more efficient.
      </Typography>
      
      <Typography paragraph>
        Because we strongly believe in Open Source principles, we also apply them to our infrastructure. 
        As such we consider ourself as an open infrastructure project where everybody is invited to learn, share, contribute.
      </Typography>
      
      <Typography paragraph>
        See the <Link href="/projects/infrastructure/">Infrastructure sub-project</Link> for more information and contributing guidelines.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Other components
      </Typography>
      
      <Typography paragraph>
        There are hundreds of repositories which do not fall under categories below:
        libraries, packaging, developer tools, etc.
        You can discover these components by looking into <Link href="/sigs">special interest groups</Link> and <Link href="/projects">sub-projects</Link> pages.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Newcomers
      </Typography>
      
      <Typography paragraph>
        The Jenkins project always welcomes newcomer contributors.
        We maintain lists of newbie-friendly issues and encourage new contributors to work on those issues.
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="https://issues.jenkins.io/issues/?jql=labels%20%3D%20newbie-friendly%20and%20status%20in%20(Open%2C%20%22To%20Do%22%2C%20Reopened)">Newbie-friendly issues in Jenkins JIRA</Link></li>
        <li><Link href="https://github.com/search?q=org%3Ajenkinsci+org%3Ajenkins-infra+is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">Good first issues on GitHub</Link></li>
      </Typography>
      
      <Typography paragraph>
        Useful links:
      </Typography>
      
      <Typography component="ul" sx={{ pl: 4, mb: 2 }}>
        <li><Link href="https://wiki.jenkins.io/display/JENKINS/Beginners+Guide+to+Contributing#BeginnersGuidetoContributing-Areyouinterestedinwritingcode%3F">Beginners Guide to Contributing</Link></li>
        <li>Presentation: Contributing to Jenkins (<Link href="https://docs.google.com/presentation/d/1JHgVzWZAx95IsUAZp8OoyCQGGkrCjzUd7eblwd1Y-hA/edit?usp=sharing">slides</Link>)</li>
        <li><Link href="/sigs/advocacy-and-outreach/outreach-programs/">Outreach programs</Link> - Google Summer of Code, Outreachy, Hacktoberfest may be a good opportunity to start contributing to the project</li>
      </Typography>

      <Box sx={{ my: 4 }}>
        <iframe 
          width="640" 
          height="360" 
          src="https://www.youtube.com/embed/ivMBMuZXdBA" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </Box>

      <Typography variant="h2" component="h2" gutterBottom>
        Experienced contributors
      </Typography>
      
      <Typography paragraph>
        Are you an established contributor to Jenkins and looking for a new challenge?
        The <Link href="/security#team">Jenkins Security Team</Link> is looking for members willing to help improve Jenkins security.
        Also, there are many <Link href="/sigs">special interest groups</Link> and <Link href="/projects">sub-projects</Link> which are seeking contributors 
        in order to push bigger projects forward.
      </Typography>
    </Box>
  );
};

export default CodePage;