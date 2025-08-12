import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function TerminologyPage() {
  return (
    <SecurityFrame title="Terminology">
      <SecurityLayout title="Terminology" showTitle>
        <p>
          This page provides a quick overview of commonly used security terms in Jenkins and its documentation.
          While not exhaustive, it aims to clarify terminology used in security advisories and security-related documentation on this site.
        </p>

        <h2>General</h2>
        <dl>
          <dt>Attack</dt>
          <dd>As a noun, an attack is a deliberate attempt to <em>exploit</em> a <em>vulnerability</em> to compromise the confidentiality, integrity, or availability of a system. As a verb, it means to perform actions intended to compromise, damage, or gain unauthorized access to a system.</dd>

          <dt>Attacker</dt>
          <dd>An attacker is an individual, program, or group that attempts to <em>exploit</em> <em>vulnerabilities</em> in a system.</dd>

          <dt>Crafted</dt>
          <dd>In <em>vulnerability</em> descriptions, "crafted" refers to input or data that has been intentionally designed or manipulated by an <em>attacker</em> to trigger a <em>vulnerability</em>.</dd>

          <dt>Exploit</dt>
          <dd>As a noun, an exploit is software, code, or a sequence of instructions that leverages a <em>vulnerability</em> to perform an <em>attack</em>. As a verb, it means to take advantage of a specific <em>vulnerability</em> in a system.</dd>

          <dt>Fix</dt>
          <dd>A fix is a code or configuration change that removes a <em>vulnerability</em>, thereby preventing it from being <em>exploited</em>.</dd>

          <dt>Mitigation</dt>
          <dd>A mitigation is a security measure or control that reduces the chances of a <em>vulnerability</em> being <em>exploited</em>, or lessens the damage if it is. Unlike a <em>fix</em>, a mitigation does not necessarily eliminate the <em>vulnerability</em>.</dd>

          <dt>Vulnerability</dt>
          <dd>A vulnerability is a flaw or weakness that could be leveraged by an <em>attacker</em> to perform unauthorized actions with a security impact.</dd>
        </dl>

        <h2>Vulnerabilities</h2>
        <dl>
          <dt>Command Injection</dt>
          <dd>Command injection (or OS command injection) is a <em>vulnerability</em> that occurs when an application constructs and executes OS shell commands using unsafe user input.</dd>

          <dt>Cross-Site Request Forgery (CSRF)</dt>
          <dd>CSRF <em>attacks</em> trick a user's browser into performing unwanted actions in a web application they are logged into, often without the user's knowledge. <a href="/security/vulnerabilities/#csrf">Learn more.</a></dd>

          <dt>Cross-Site Scripting (XSS)</dt>
          <dd>XSS <em>vulnerabilities</em> allow an <em>attacker</em> to inject malicious scripts into web pages viewed by other users. These scripts run within the victim's web browser and can steal sensitive data, hijack sessions, modify content, or perform unauthorized actions on behalf of the user. <a href="/security/vulnerabilities/#xss">Learn more.</a></dd>

          <dt>Disclosure</dt>
          <dd>Disclosure refers to a type of <em>vulnerability</em> where sensitive information becomes accessible to unauthorized actors.</dd>

          <dt id="pt">Path Traversal</dt>
          <dd>A path traversal <em>vulnerability</em> allows an <em>attacker</em> to access files and directories that are stored outside the intended directory. This is typically achieved by manipulating file path parameters, such as using <code>../</code> sequences, to traverse the filesystem and access sensitive resources such as configuration files or cryptographic secrets. <a href="/security/vulnerabilities/#pt">Learn more.</a></dd>

          <dt>Remote Code Execution (RCE)</dt>
          <dd>RCE is the ability of an <em>attacker</em> to run arbitrary code on a target system remotely, typically as a result of <em>exploiting</em> a <em>vulnerability</em>. In Jenkins security advisories, this generally refers to executing code inside the Jenkins JVM, as opposed to (OS) command injection, which generally refers to shell command invocations. Each can usually be used to achieve the other, resulting in an equivalent complete compromise of Jenkins. Note that Jenkins administrators have access to the <a href="/doc/book/managing/script-console/">Script Console</a>, a feature of comparable power.</dd>

          <dt id="ssrf">Server-Side Request Forgery (SSRF)</dt>
          <dd>SSRF is a <em>vulnerability</em> in which an <em>attacker</em> tricks the server into making unauthorized requests to internal resources or third-party services, potentially leading to data exposure or unauthorized access.</dd>

          <dt>XML External Entity (XXE)</dt>
          <dd>An XXE <em>vulnerability</em> occurs when an XML parser processes an external entity reference within an XML document. This can enable <em>attackers</em> to read local files (see <a href="#pt">Path Traversal</a>), perform server-side request forgery (see <a href="#ssrf">Server-Side Request Forgery</a>), or execute denial-of-service <em>attacks</em>, depending on the system configuration. <a href="/security/vulnerabilities/#xxe">Learn more.</a></dd>
        </dl>
      </SecurityLayout>
    </SecurityFrame>
  );
}
