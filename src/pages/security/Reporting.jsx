import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function ReportingPage() {
  return (
    <SecurityFrame title="Reporting Security Vulnerabilities">
      <SecurityLayout title="Reporting Security Vulnerabilities" showTitle>
        <h2>Overview</h2>
        <p>Thanks for your interest in reporting vulnerabilities to the Jenkins project!</p>
        <p>
          Please <a href="https://issues.jenkins.io/secure/CreateIssueDetails!init.jspa?pid=10180&issuetype=10103">report them in the issue tracker under the SECURITY project</a>.
          This project is configured in such a way that only the reporter and the security team can see the details.
          By restricting access to this potentially sensitive information, we can work on a fix and deliver it before the method of attack becomes well-known.
        </p>
        <div className="app-banner">
          <strong>IMPORTANT</strong>
          <div>
            If you are unable to report using our issue tracker, you can also send your report to the private Jenkins Security Team mailing list:
            <code> jenkinsci-cert@googlegroups.com</code>
            <br />We will then file an issue on your behalf.
          </div>
        </div>

        <h2>Scope</h2>
        <p>
          This section aims to clarify the scope of issues handled by the Jenkins security team. When in doubt, we recommend you report issues to us as described above, and let us evaluate them.
        </p>

        <h3>Components</h3>
        <p>Please report issues present in the following components:</p>
        <ul>
          <li>Jenkins, including installers and Docker images published by the Jenkins project</li>
          <li>
            Jenkins plugins published by the Jenkins project (listed on <a href="https://plugins.jenkins.io/">plugins.jenkins.io</a> and/or hosted in <a href="https://github.com/jenkinsci">the jenkinsci GitHub organization</a>)
          </li>
          <li>Additional components published by the Jenkins project for general use, such as Docker images for Jenkins agents</li>
          <li>
            Jenkins infrastructure projects, such as <a href="/">jenkins.io</a> or more generally the repositories hosted in the <a href="https://github.com/jenkins-infra">jenkins-infra GitHub organization</a>
          </li>
        </ul>

        <p>The following components are out of scope:</p>
        <ul>
          <li>Issues specific to CloudBees Jenkins products <a href="https://www.cloudbees.com/security-policy">should be reported to CloudBees directly</a>.</li>
          <li>Issues specific to Jenkins X <a href="https://jenkins-x.io/community/security/#how-to-report-a-security-vulnerability">should be reported directly to them</a>.</li>
        </ul>

        <h3>Non-Issues</h3>
        <h4>Jenkins core and plugins</h4>
        <p>We do not consider the following issues to be vulnerabilities in Jenkins (core + plugins):</p>
        <ul>
          <li>
            Vulnerabilities only exploitable by users with Overall/Administer permission will generally not be considered to be vulnerabilities.
            Administrators in Jenkins can use the <a href="/doc/book/managing/script-console/">Script Console</a> and install plugins.
            These tools let them run arbitrary code and change the behavior of Jenkins in multiple ways, so that very few, if any, vulnerabilities will let them do something novel.
            We still recommend reporting such vulnerabilities in private so that they can be reviewed by the security team, in case the vulnerable code is also used for features accessible by regular users.
          </li>
          <li>
            Web methods that lack permission checks or CSRF protection, and cause Jenkins to access a URL, that is not controlled by an attacker, without disclosing configuration information from Jenkins or returning sensitive information.
            This behavior is commonly the case in plugins integrating with a hosted service (e.g., some connection tests) and while permissions beyond Overall/Read should be required to cause Jenkins to send a request, the impact is negligible.
          </li>
          <li>
            Vulnerabilities in dependencies without a plausible or demonstrated exploit will not be treated as vulnerabilities.
            While we may inform maintainers about the need to update their dependencies and track progress in the SECURITY Jira project, no security advisory will be published for these.
          </li>
          <li>
            Claims of malware in plugin:<a href="https://plugins.jenkins.io/durable-task/">durable-task</a> plugin or <a href="https://github.com/jenkinsci/lib-durable-task">lib-durable-task</a> unless substantiated (e.g., local builds from source are unaffected).
            Our best guess is that these tools consider the low-level process and signal handling and/or the bundling of native go binaries inside nested <code>jar</code> files in these components to be suspicious behavior.
            Please report this false positive finding to your anti-malware vendor.
          </li>
          <li>
            Cookies not set to <code>Secure</code> due to misconfiguration of Jenkins.
            If a cookie is <code>Secure</code> on <a href="https://ci.jenkins.io">ci.jenkins.io</a>, then it's a matter of configuration.
          </li>
          <li>Cookies not set to <code>HttpOnly</code> when they contain no sensitive information (e.g. "screen size")</li>
          <li>
            Users with Overall/Administer permission (or the deprecated Overall/RunScripts permission) are able to execute arbitrary code using the Script Console, related APIs (<code>/eval</code>, <code>/script</code>, <code>/scriptText</code>), and many plugins.
            This is a feature.
          </li>
          <li>
            Jobs started by a specific user can run on agents where the user lacks Agent/Build permission and can themselves trigger builds of jobs where the user lacks Job/Build permission.
            <a href="/doc/book/security/build-authorization/">See the documentation on Access Control for Builds</a>.
          </li>
          <li>Ability for unauthenticated users to trigger SCM polling via webhooks without directly initiating a build or other resource-intensive computations.</li>
          <li>
            Any issues in plugins whose exploitation has been prevented through changes in Jenkins core or other plugins for at least 13 months. Some examples:
            <ul>
              <li>
                Cross-site scripting (XSS) vulnerabilities due to lack of <code>escape-by-default</code> XML processing instruction are no longer exploitable since Jenkins 2.146 and 2.138.2 (published 2018-10-10).
              </li>
              <li>
                Cross-site scripting (XSS) vulnerabilities through user-provided content in <code>Cause#getShortDescription</code> without a custom <code>description.jelly</code> are no longer exploitable since Jenkins 2.315 and LTS 2.303.2 (published 2021-10-06).
                <a href="/doc/developer/security/xss-prevention/Cause-getShortDescription/">See the documentation on the redefinition of Cause#getShortDescription</a>.
              </li>
              <li>
                <code>Callable</code> implementations providing an implementation of <code>#checkRoles(RoleChecker)</code> that neither throws an exception nor calls <code>RoleChecker#check</code> is no longer exploitable since Jenkins 2.319 and LTS 2.303.3 (published 2021-11-04).
                <a href="/doc/developer/security/remoting-callables/">See the documentation on Remoting Callables</a>.
              </li>
            </ul>
          </li>
          <li>
            Log messages containing secrets at levels more verbose than <code>INFO</code> (i.e., <code>CONFIG</code>, <code>FINE</code>, <code>FINER</code>, <code>FINEST</code>), implying that they are not recorded in the default Jenkins log recorder.
          </li>
        </ul>

        <h4>Docker Images</h4>
        <p>See the <a href="https://github.com/jenkinsci/docker/security/policy">Docker images security policy</a>.</p>

        <h4>Infrastructure</h4>
        <p>The following behaviors/issues are not vulnerabilities in Jenkins project infrastructure:</p>
        <ul>
          <li>
            Issues in issues.jenkins.io are publicly accessible, and anyone can sign up to become an authenticated user.
            This is deliberate, the Jenkins project hosts <a href="/participate/report-issue/">a public issue tracker</a>.
            Only issues in the SECURITY project are sensitive, and they require specific permissions to access.
            <ul>
              <li>
                File attachments of public issues are also publicly accessible (URLs starting with <code>https://issues.jenkins.io/secure/attachment/</code>).
                This is deliberate as well.
              </li>
              <li>
                Some PoCs for vulnerabilities in Jira may appear successful if it is configured to be accessible anonymously.
                Please do not report issues whose fixes we already have applied, check the version reported on the UI first.
              </li>
            </ul>
          </li>
          <li>
            File listings on get.jenkins.io, updates.jenkins.io, and mirrors.jenkins.io (and equivalent host names).
            These are our download indexes and we deliberately allow directory listing.
          </li>
          <li>
            Public repositories in the <a href="https://github.com/jenkins-infra/">jenkins-infra</a> GitHub organization expose how many of our services are configured.
            This is intentional. Please only report leaked secrets, or similar information disclosure, that results in a direct, immediate risk.
          </li>
          <li>
            Configuration of googlegroups.com, which we use for our <a href="/mailing-lists/">mailing lists</a> (e.g., DMARC/DKIM/SPF/TLS).
            We trust Google to choose the correct tradeoffs for their Google Groups service, and have no power to change anything anyway.
          </li>
          <li>The public availability of the Algolia API key. It needs to be public.</li>
          <li>
            Publicly accessible Jenkins controllers other than ci.jenkins.io and weekly.ci.jenkins.io are not operated by the Jenkins project.
            Please do not contact us with any concerns regarding them.
          </li>
        </ul>

        <h2>Issue Handling Process</h2>
        <p>
          Once reported, the Jenkins security team will perform an evaluation of the issue to determine affected components and whether the report is a valid security vulnerability.
          We endeavour to respond to all reports within three working days (Mon-Fri), with typical response times within one working day.
        </p>
        <p>
          Please note that we may choose to reject issues as security vulnerabilities while still tracking them in the SECURITY project.
          In those cases, the issue type will be changed accordingly.
        </p>
        <p>
          Once an issue is ready to be published in a security advisory (typically because a fix is available, or a coordinated disclosure deadline approaches), the Jenkins project CNA will assign one or more CVE identifiers for the vulnerability, as applicable, if the issue is in scope of the Jenkins CNA.
          Around this time, we will also ask the reporter how they would like to be credited in the security advisory, and post a draft of the description of the vulnerability for review.
        </p>

        <h2>Issues in Plugins</h2>
        <p>
          Most plugins are maintained independently by contributors working exclusively on a small number of plugins.
          In those cases, the Jenkins security team acts as an intermediary between reporters and maintainers, providing a single point of contact for reporters.
          As part of initial issue review, the Jenkins security team will attempt to determine the current maintainer of the plugin to assign the issue to.
        </p>
        <p>
          While it is the individual plugin maintainer's responsibility to fix security issues in their plugins, the Jenkins security team helps by providing documentation, review, and coordination of the release.
        </p>
        <p>
          We generally ask maintainers of popular plugins to publish fixes only in coordination with the Jenkins security team to ensure that users are informed immediately about the availability of a security fix.
          In plugins with only few installations, we generally recommend that maintainers release the fixes once ready and we will inform users in the next suitable security advisory about the fix.
        </p>

        <h2>Coordinated (Responsible) Disclosure</h2>
        <p>
          Please let us know in advance if your issue report is subject to a coordinated disclosure deadline.
          This allows us to schedule the fix well in advance and ensure a high quality of the fix.
          For example, Jenkins core is on a monthly release cadence with several weeks of testing for each release, so we would like to know well in advance when a fix is due.
        </p>

        <h2>Attribution Policy</h2>
        <p>We will credit reporters who informed us in private about security vulnerabilities in security advisories.</p>
        <p><em>// TODO more detail</em></p>

        <h2>Bug bounty / Reward / Gift</h2>
        <p>Currently there is no program to reward vulnerability reporters.</p>

        <h2>Security Advisories</h2>
        <p>
          We publish Jenkins core and plugin security advisories <a href="/security/advisories">on this site</a> and notify users via <a href="/security/#security-notifications">various mailing lists</a> as well as through security warnings on the Jenkins UI.
        </p>
      </SecurityLayout>
    </SecurityFrame>
  );
}
