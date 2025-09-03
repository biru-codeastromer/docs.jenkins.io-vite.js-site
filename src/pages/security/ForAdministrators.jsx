import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function ForAdministratorsPage() {
  return (
    <SecurityFrame title="Overview for Jenkins Administrators">
      <SecurityLayout title="Overview for Jenkins Administrators" showTitle>
        <p>This page explains everything Jenkins users and administrators need to know about the Jenkins security process.</p>

        <h2>Terminology</h2>
        <p>In the context of the Jenkins security project, we're using the following terms with the specified meanings:</p>
        <dl>
          <dt>Security Vulnerability</dt>
          <dd>An unintended weakness with impact on confidentiality, integrity, or availability that typically allows an attacker to obtain or modify information.</dd>
          <dt>Security Issue</dt>
          <dd>Used interchangeably with <strong>Security Vulnerability</strong>.</dd>
          <dt>Security Fix</dt>
          <dd>The specific change that fixes a security vulnerability.</dd>
          <dt>Security Update</dt>
          <dd>A release containing one or more security fixes.</dd>
          <dt>Security Advisory</dt>
          <dd>
            A public announcement of security issues and security updates. <a href="#what-is-a-security-advisory">See below for details.</a>
          </dd>
        </dl>

        <h2>How Does the Jenkins Team Learn About Security Issues?</h2>
        <p>
          Security researchers, Jenkins contributors, Jenkins security team members, and regular Jenkins users and administrators <a href="/security/#reporting-vulnerabilities">report potential security issues they discover to the Jenkins security team</a>, via the SECURITY project in our issue tracker or via email. The Jenkins security team then evaluates the report to see whether it's a real security issue or something else, and acts accordingly.
        </p>

        <h2>How Does the Jenkins Team Fix Issues?</h2>
        <p>We work with maintainers of affected components to address these issues. In case of Jenkins (core), security team members usually develop the fixes.</p>
        <p>
          Once fixes are ready or <a href="/security/plugins">we've determined that a component is not maintained actively enough</a>, we announce the issues and fixes, if applicable, in a security advisory.
        </p>

        <h2 id="what-is-a-security-advisory">What is a Security Advisory?</h2>
        <p>
          A security advisory is a public announcement with information about security issues, including workarounds and fixes. In the Jenkins project, we publish all security advisories <a href="/security/advisories">here</a> and announce them through various channels.
        </p>

        <h2>How are Security Advisories Announced?</h2>
        <p>We announce the publication of a new security advisory through multiple channels:</p>
        <ul>
          <li>
            We send an email notification to the public <a href="https://groups.google.com/g/jenkinsci-advisories">jenkinsci-advisories</a> Google group with a short overview of affected components and a link to the security advisory. Only Jenkins security team members can post. You can <a href="mailto:jenkinsci-advisories+subscribe@googlegroups.com">subscribe</a> and <a href="mailto:jenkinsci-advisories+unsubscribe@googlegroups.com">unsubscribe</a> via email.
          </li>
          <li>
            We send an email notification to the <a href="https://oss-security.openwall.org/wiki/mailing-lists/oss-security">oss-security</a> mailing list with excerpts of the security advisory.
          </li>
          <li>
            We publish an <a href="/security/advisories/rss.xml">RSS feed</a> for the Security Advisories page.
          </li>
        </ul>
        <p>
          Additionally, Jenkins administrators are informed about published security issues directly in Jenkins if they have affected versions of Jenkins or plugins installed.
        </p>

        <h2>What Information Do Security Advisories Provide?</h2>
        <p>Security advisories published by the Jenkins project contain the following sections:</p>
        <ol>
          <li>A list of components included in the advisory</li>
          <li>Descriptions of the security issues and, if applicable, how they were addressed</li>
          <li>A list of issue severities using the CVSS 3.1 model</li>
          <li>A list of affected versions</li>
          <li>A list of fix versions, and, if applicable, a list of components for which no fix is available</li>
          <li>
            Credits for reporters <a href="/security/reporting">who informed the Jenkins project</a>
          </li>
        </ol>
        <p>
          The lists of version numbers are most useful as a general, short reference. The main content of a security advisory is in the section with detailed descriptions, which focuses on answering the following questions in the sections below.
        </p>

        <h3 id="attacker">The Kind of Security Issue</h3>
        <p>
          The title of each issue gives a quick synopsis to readers familiar with most common (e.g. OWASP Top 10) security vulnerability types. The description that follows goes into more details.
        </p>

        <h3 id="impact">Who is Able to Exploit the Issue, and How?</h3>
        <p>
          Descriptions usually mention the necessary permissions, for example Overall/Read or Job/Configure, except in cases where this cannot be determined with sufficient confidence. For example, through common practices like Pipeline-as-Code, limited job configuration permissions are delegated to users with SCM commit access, so claiming that Job/Configure permission is needed would be unintentionally misleading.
        </p>
        <p><strong>NOTE:</strong> Cross-site request forgery (CSRF) vulnerabilities inherently do not require attackers to have any permissions, so that information is typically omitted.</p>

        <h3 id="fix-description">The Impact of Successful Exploitation</h3>
        <p>
          In many cases, the impact of successful exploitation is directly tied to the kind of vulnerability: Cross-site scripting vulnerabilities ultimately can execute commands on Jenkins web pages as the victim, and remote code execution vulnerabilities can execute arbitrary code.
        </p>
        <p>
          In some cases, it is unclear what the <em>exact</em> impact of an issue is. Depending on our level of confidence about expected impact, we'll provide the best estimation or state that some of the impact is unclear.
        </p>

        <h3 id="workarounds">How the Issue Was Addressed</h3>
        <p>
          If the issue was fixed, the security advisory will include information about <em>how</em> the issue was addressed. This helps understand the impact of updating. For example, a previously unsafe feature may no longer work as some users would expect, if they relied on the unsafe behavior.
        </p>
        <p>
          Note that this section will only explain how an issue was addressed if a fix was available as of publication of the security advisory. Learn more: <a href="/security/for-administrators/#later">Are Security Advisories Updated Later?</a>
        </p>

        <h3 id="escape-hatches">Non-obvious Workarounds, if Applicable</h3>
        <p>
          In some cases the affected feature can be disabled using a hidden option. If the feature isn't used or essential, this can be a possible short-term way to work around the problem.
        </p>
        <p>
          Only workarounds not otherwise clear from the issue description will be mentioned here. For example, if the description mentions that an attacker needs specific permissions to exploit a vulnerability, a workaround could be to revoke that permission from anyone who is not fully trusted. This would not be explicitly mentioned in the advisory.
        </p>

        <h3>How to Disable (Part of) a Security Fix</h3>
        <p>
          Security fixes undergo limited testing, so we commonly add "escape hatches", mechanisms to disable all or part of a security fix in case of unexpected problems.
        </p>
        <div className="app-banner">
          <strong>WARNING</strong>
          <div>
            Disabling security fixes will typically cause security issues. Doing this should very rarely be necessary. Administrators should make sure to <a href="/participate/report-issue/">report problems</a> with security fixes to the Jenkins project's public issue tracker as a regression.
          </div>
        </div>

        <h2>How Quickly Should I Apply Security Updates?</h2>
        <p>
          Ideally, you apply security updates immediately. The various announcements we send out are intended to minimize any unnecessary delays between us publishing security advisories and users learning about them. Additionally, our guidelines for security fix development ensure that security updates are generally very safe to apply. In many cases, security fixes also include <a href="/security/for-administrators/#escape-hatches">hidden options that allow you to disable (parts of) security fixes</a> temporarily if they turn out to cause problems.
        </p>
        <p>
          If you're unable to apply every security update immediately, security advisories will explain for every security issue:
        </p>
        <ul>
          <li><a href="/security/for-administrators/#attacker">How can the issue be exploited, and by whom?</a></li>
          <li><a href="/security/for-administrators/#impact">What is the impact when exploited?</a></li>
        </ul>
        <p>
          This information helps you understand whether you're affected: For example, if you trust everyone with any access to Jenkins fully, then an issue that requires an attacker to be a user with some permissions in Jenkins might not need to be fixed urgently.
        </p>
        <div className="app-banner">
          <strong>WARNING</strong>
          <div>
            The extensibility of Jenkins makes it impossible to provide definitive answers about exploitability and impact in all cases. While the Jenkins security team works hard to understand security issues and provide the best available information in the security advisory, this does not guarantee that we are always correct. Even security issues that appear irrelevant for your environment may end up potentially impacting your setup, so security updates should always be installed at the earliest opportunity.
          </div>
        </div>

        <h2 id="pre-announcements">Can I Plan Maintenance Windows?</h2>
        <p>
          For most security advisories, we send a "pre-announcement" to the <code>jenkinsci-advisories</code> Google group. Depending on advisory content, these are typically sent a few days in advance, sometimes up to a week.
        </p>
        <p>
          These pre-announcements will only specify whether Jenkins (core) and/or plugins are affected. Affected plugins, if any, are not identified, but the announcement provides some information that allows Jenkins administrators to estimate whether they're affected, and how important it is to schedule an immediate update:
        </p>
        <ul>
          <li>The popularity of the most popular included plugins, and the highest severity of issues affecting these plugins.</li>
          <li>The highest severity of included issues, and the popularity of the most popular plugin in this group.</li>
        </ul>
        <p>
          See the <a href="https://groups.google.com/g/jenkinsci-advisories">jenkinsci-advisories list archive</a> for examples of past pre-announcements.
        </p>
        <p>
          Some advisories are published without a pre-announcement. Reasons include: The advisory wasn't planned more than a day or two in advance; or its content couldn't be finalized until just before publication.
        </p>

        <h2>When are Security Advisories Published?</h2>
        <p>See <a href="/security/scheduling">How We Schedule Security Advisories</a>.</p>

        <h2 id="later">Are Security Advisories Updated Later?</h2>
        <p>
          Security advisories will be updated if any of the information is later found to be wrong <em>as of time of publication</em>. These later updates will be announced through the same channels if the correction is important to understanding the security advisory.
        </p>
        <p>
          If the security advisory announced security issues in plugins without a fix, and a fix is made available later, the existing security advisory will not be updated. Learn more: <a href="/security/plugins/#followup">Handling Vulnerabilities in Plugins: Following Up Later</a>
        </p>
        <p>
          We may also apply minor changes (e.g. grammar correction, phrasing, or fixing broken links) that do not alter the meaning of the content. No notifications are sent for changes like that.
        </p>

        <h2>How Do I Configure Jenkins Securely?</h2>
        <p>See <a href="/doc/book/security/">Securing Jenkins in the Jenkins Handbook</a>.</p>
      </SecurityLayout>
    </SecurityFrame>
  );
}
