import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function SecurityIndex() {
  return (
    <SecurityFrame title="Jenkins Security">
      <SecurityLayout title="Jenkins Security" showTitle>
        <p>
          The Jenkins project takes security seriously. We make every possible effort to ensure users can adequately secure their automation infrastructure. To that end, we work with Jenkins core and plugin developers, as well as security researchers, to fix security vulnerabilities in Jenkins in a timely manner, and to improve the security of Jenkins in general.
        </p>
        <p>
          Learn more about <a href="/doc/book/security/">Securing Jenkins</a> in the Jenkins User Handbook.
        </p>

        <h2 id="advisories">Security Advisories</h2>
        <p>
          Security advisories are the primary way to publicly inform Jenkins users about security issues in Jenkins and Jenkins plugins. You can find all past security advisories in our <a href="/security/advisories/">security advisories archive</a>.
        </p>
        <p>We announce the publication of a new security advisory through multiple channels:</p>
        <ul>
          <li>
            We send an email notification to the public <a href="https://groups.google.com/g/jenkinsci-advisories">jenkinsci-advisories</a> Google group with a short overview of affected components and a link to the security advisory. Only Jenkins security team members can post. You can <a href="mailto:jenkinsci-advisories+subscribe@googlegroups.com">subscribe</a> and <a href="mailto:jenkinsci-advisories+unsubscribe@googlegroups.com">unsubscribe</a> via email.
          </li>
          <li>
            We send an email notification to the <a href="https://oss-security.openwall.org/wiki/mailing-lists/oss-security">oss-security</a> mailing list with excerpts of the security advisory.
          </li>
          <li>
            We publish an <a href="/security/advisories/rss.xml">RSS feed for the jenkins.io/security/advisories/</a> page.
          </li>
        </ul>
        <p>
          Additionally, Jenkins administrators are informed about published security issues directly in Jenkins if they have affected versions of Jenkins or plugins installed.
        </p>
        <p>
          Finally, the Jenkins project is a <a href="/security/cna">CVE Numbers Authority</a>, and we submit CVE metadata simultaneously with the publication of security advisories, allowing automated security tools using CVE information to identify vulnerable installations.
        </p>

        <div className="app-banner">
          <strong>IMPORTANT</strong>
          <div>
            Even if you run Jenkins on a private network and trust everyone in your team, security issues in Jenkins can still impact you:
            <ul>
              <li><a href="https://en.wikipedia.org/wiki/Cross-site_request_forgery">CSRF vulnerabilities</a> are a risk even if attackers have no direct access to Jenkins.</li>
              <li>
                Does Jenkins build source code you haven't audited, using build scripts someone else wrote, displaying generated reports on its web UI?
                &nbsp;All of these are potential security concerns.
              </li>
            </ul>
          </div>
        </div>

        <h2 id="reporting-vulnerabilities">How to Report a Security Vulnerability</h2>
        <p>
          If you find a vulnerability in Jenkins, please{' '}
          <a href="https://issues.jenkins.io/secure/CreateIssueDetails!init.jspa?pid=10180&issuetype=10103">
            report it in the issue tracker under the SECURITY project
          </a>.
          This project is configured in such a way that only the reporter, the maintainers, and the Jenkins security team can see the details. Restricting access to this potentially sensitive information allows core and plugin maintainers to develop effective security fixes that are safe to apply. We provide issue reporting guidelines and an overview of our process on <a href="/security/reporting">Reporting Security Vulnerabilities</a>.
        </p>
        <p>
          If you are unable to report using our issue tracker, you can also send your report to the private Jenkins Security Team mailing list:
          <code> jenkinsci-cert@googlegroups.com</code>
        </p>
        <p>
          <strong>IMPORTANT:</strong> Do not contact the Jenkins security team asking us for compliance documents, certifications, or to fill out a questionnaire. We will not respond to such queries. If we consider it necessary to provide a statement in response to incidents such as <a href="/blog/2021/12/10/log4j2-rce-CVE-2021-44228/">log4shell</a> or <a href="/blog/2022/03/31/spring-rce-CVE-2022-22965/">SpringShell</a>, you will find a response in our <a href="/blog/">blog</a>.
        </p>

        <h2>Learn More</h2>
        <dl>
          <dt><a href="/security/plugins">How We Handle Vulnerabilities in Plugins</a></dt>
          <dd>We strive to fix all security vulnerabilities in Jenkins and plugins in a timely manner. However the number and diversity of plugins and maintainers' autonomy make this impossible to guarantee.</dd>

          <dt><a href="/security/scheduling">How We Schedule Security Advisories</a></dt>
          <dd>Information about how we schedule security advisories and security updates.</dd>

          <dt><a href="/security/fixing">How We Fix Security Issues</a></dt>
          <dd>Guidelines for developing security fixes in the Jenkins project.</dd>

          <dt><a href="/security/for-maintainers">Information for Plugin Maintainers</a></dt>
          <dd>The Jenkins security team contacted me about a security vulnerability. Now what?</dd>

          <dt><a href="/security/for-administrators">Information for Administrators</a></dt>
          <dd>This page explains everything Jenkins users and administrators need to know about the Jenkins security process.</dd>

          <dt><a href="/security/cna">Jenkins CVE Numbers Authority</a></dt>
          <dd>The Jenkins project is a CVE Numbers Authority (CNA) for Jenkins and Jenkins plugins published by the Jenkins project.</dd>

          <dt><a href="/security/team">About the Jenkins Security Team</a></dt>
          <dd>The Jenkins Security Team is a group of volunteers led by the Jenkins Security Officer who triage and fix security vulnerabilities.</dd>

          <dt><a href="/security/improvements">Improvements by the Security Team</a></dt>
          <dd>These are some contributions by members of the Jenkins security team that weren't delivered as security fixes, but still are security-related.</dd>
        </dl>
      </SecurityLayout>
    </SecurityFrame>
  );
}
