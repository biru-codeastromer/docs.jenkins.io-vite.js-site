import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function TeamPage() {
  return (
    <SecurityFrame title="About the Jenkins Security Team">
      <SecurityLayout title="About the Jenkins Security Team" showTitle>
        <p>
          The Jenkins Security Team is a group of volunteers led by the <a href="/project/board/#security">Jenkins Security Officer</a>.
          Our goal is to improve the security of Jenkins and to give administrators the tools and information they need to secure their Jenkins controllers and agents.
        </p>

        <h2>What We Do</h2>
        <ol>
          <li>We look for security issues in Jenkins and plugins</li>
          <li>We process incoming reports of security issues in any component</li>
          <li>We work with reporters and maintainers to get security issues fixed</li>
          <li>We develop Jenkins (core) security fixes</li>
          <li>We review and test security fixes in core and plugins</li>
          <li>We write and publish security advisories</li>
          <li>We implement security-related features and improvements (<a href="#contribute">and you can too!</a>)</li>
        </ol>
        <p>
          Security vulnerabilities in core are typically resolved by members of this team, while vulnerabilities in plugins are generally resolved in collaboration with the plugin maintainer(s).
        </p>

        <h2 id="join">Joining the Team</h2>
        <p>
          Members of the security team have access to sensitive information, so membership is limited to people with a history of contributions to the Jenkins project and is subject to approval by the Jenkins Security Officer.
        </p>
        <p>
          Contact the Jenkins security team via email to the private <code>jenkinsci-cert@googlegroups.com</code> mailing list if you're interested.
        </p>
        <p>
        </p>

        <h3>Expectations</h3>
        <p>
          As a member of the security team you will be expected to regularly contribute, or you may be removed from the team again to limit the exposure of sensitive security-related information.
          Security team membership is specifically for those working on Jenkins (core) security fixes or on improving Jenkins security beyond specific components.
          These contributions need to be not otherwise feasible without the additional access to sensitive information granted through the membership.
          For example, as a plugin maintainer, you are already able to address security issues in plugins you maintain even without being a security team member.
        </p>
        <p>
          There are many ways to contribute to the security of Jenkins that don't require you to be on the security team.
          Learn more: <a href="#contribute">Other Ways to Contribute</a>
        </p>

        <h3>Technical Requirements</h3>
        <p>In order to join, you'll need to have:</p>
        <ol>
          <li>a <a href="https://accounts.jenkins.io/">Jenkins community account</a> and have logged in to Artifactory and Jira before,</li>
          <li>a <a href="https://github.com">GitHub</a> account with <a href="https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/">two-factor authentication enabled</a>,</li>
          <li>a <a href="https://github.com/jenkinsci/infra-cla/">Contributor License Agreement</a> (CLA) in place, and</li>
          <li>a <a href="https://libera.chat/guides/registration">registered nickname on Libera Chat</a>.</li>
        </ol>

        <h2 id="contribute">Other Ways to Contribute</h2>
        <p>You can contribute to the security of Jenkins and its plugin ecosystem even without being a security team member:</p>
        <ul>
          <li>
            Identify and report security issues, even in plugins you maintain yourself.
            As a reporter, you can include proposed fixes or ask the maintainer to collaborate with you on a fix.
            As a maintainer, please inform us about security issues in your own plugins, even if you fix the issue yourself.
            This lets us properly inform users.
          </li>
          <li>Inform us about plugin security updates without a corresponding security advisory. Plugin maintainers may be unaware of our process, so this helps ensure all security updates are properly announced.</li>
          <li>Document security best practices for Jenkins administrators and Jenkins developers.</li>
          <li>
            As a Jenkins developer, develop features and improvements that help admins secure their controllers and agents.
            <a href="/security/improvements/">Check out these improvements delivered by security team members over the years.</a>
          </li>
          <li>
            As a plugin maintainer:
            <ul>
              <li>Be responsive when contacted by the security team.</li>
              <li>Consider the security impact of features and improvements you consider adding.</li>
            </ul>
          </li>
        </ul>
      </SecurityLayout>
    </SecurityFrame>
  );
}
