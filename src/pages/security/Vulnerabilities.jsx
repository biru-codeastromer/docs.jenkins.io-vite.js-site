import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function VulnerabilitiesPage() {
  return (
    <SecurityFrame title="Vulnerabilities and Scoring">
      <SecurityLayout title="Vulnerabilities and Scoring" showTitle>
        <p>
          {/* Style guide comment from source kept as a comment to preserve content intent */}
          {/* Complete CVSS vectors are shown in code formatting, e.g.: `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:L/A:N`
              Vector snippets are shown in code formatting with a "CVSS v3.1" prefix, e.g.: (CVSS v3.1: `C:H/I:H/A:H`) */}
        </p>
        <p>
          This page collects information about historically common kinds of security vulnerabilities in Jenkins, including how we score them.
          For vulnerability scoring, we use <a href="https://www.first.org/cvss/v3-1/">CVSS v3.1</a>.
        </p>

        <h2 id="xss">Cross-Site Scripting (XSS)</h2>
        <p>
          Attackers can inject JavaScript into Jenkins in a way that causes it to be executed in another user's (the "victim") browser when they view certain pages.
          <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS">Learn more</a>.
        </p>
        <p>
          Who can exploit this vulnerability depends on whether it is <em>stored</em> or <em>reflected</em>.
          The latter can generally be exploited by anyone, usually by having the victim click a link (CVSS v3.1: <code>PR:N/UI:R</code>), while the former usually needs some permission, such as View/Configure, to store the payload (CVSS v3.1: <code>PR:L/UI:R</code> or <code>PR:H/UI:R</code>).
        </p>
        <p>
          In Jenkins, if the victim is an administrator, features like the <a href="/doc/book/managing/script-console/">Script Console</a> allow executing arbitrary code on the controller.
          As a result, the impact can be a complete compromise of the Jenkins instance (CVSS v3.1: <code>C:H/I:H/A:H</code>).
        </p>
        <p>
          A less severe variant of this is when HTML elements, like formatting, can be injected in unexpected places, potentially causing user confusion, but JavaScript execution is prohibited through existing protections.
          We distinguish between these cases by calling this variant "HTML injection".
        </p>

        <h2 id="csrf">Cross-Site Request Forgery (CSRF)</h2>
        <p>
          These vulnerabilities allow attackers to use the trust that Jenkins has in a web browser's cookies/session for their own purposes.
          If a legitimate Jenkins user visits another web site, that web site can send requests to Jenkins in the background, impersonating the user.
        </p>
        <p>
          Conventionally, POST requests are used for any requests changing state, as opposed to GET requests that only query information.
          <span> (Requests using other HTTP verbs cannot be sent from other web sites ("origins") unless specifically allowed by Cross-Origin Resource Sharing (CORS).)</span>
          Jenkins protects against CSRF by <a href="/doc/book/security/csrf-protection/">requiring POST requests to include a session-specific token (the <em>crumb</em>)</a>.
          Because the crumb is temporary and specific to a user's session, it is not accessible to attackers and therefore absent from requests initiated by external websites.
        </p>
        <p>There are two common variants of CSRF vulnerabilities in Jenkins:</p>
        <ul>
          <li>
            Some actions do not require POST requests, even if the UI for them always sends POST requests anyway.
            As a result, these actions accept GET requests and the CSRF protection for POST requests can easily be bypassed.
          </li>
          <li>
            Jenkins allows plugin and extension developers to disable CSRF protection for specific URLs.
            If this is implemented improperly, an unintended consequence of that is the unexpected circumvention of CSRF protection.
          </li>
        </ul>
        <p>
          CSRF vulnerabilities generally have in common that attackers need no permissions, the attack occurs over the network, and victims need to interact in some manner (CVSS v3.1 <code>AV:N/AC:L/PR:N/UI:R/S:U</code>).
          Common issues and their severity:
        </p>
        <ul>
          <li>
            Jenkins is made to send an HTTP request, possibly with attacker-specified username/password, to a (partially) attacker-controlled URL (<code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:L/A:N</code>).
            This can often occur as part of HTTP endpoints implementing form validation.
            The impact of this is usually minor, but Jenkins may be on a private network with access to other services that lack access control.
          </li>
          <li>
            Jenkins is made to send an HTTP request using credentials stored in Jenkins, often using an attacker-specified credentials ID parameter, to an attacker-controlled endpoint (<code>CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:L/A:N</code>).
            This can be used to capture credentials stored in Jenkins, but requires knowledge of the credentials ID.
          </li>
        </ul>

        <h2 id="authorization">Missing or improper permission checks</h2>
        <p>This is any vulnerability that allows a user lacking certain permissions to take actions that should be subject to permission checks.</p>
        <p>
          Quite often, no dedicated permission checks are implemented on a web method (~HTTP endpoint) or similar action, allowing anyone with Overall/Read permission to take this action.
          It is expected that, for example, most form validation endpoints are protected by permission checks corresponding to that configuration form (<a href="/doc/developer/security/form-validation/">developer documentation</a>).
        </p>
        <p>The impact depends on the specific action, the expected permission check, and the permission actually required. Common issues and their severity:</p>
        <ul>
          <li>
            A form autocompletion endpoint returns an enumeration of credentials IDs (<code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N</code>).
            The immediate impact is low, but it may allow credentials capture (see below).
          </li>
          <li>
            Jenkins is made to send an HTTP request, possibly with attacker-specified username/password, to a (partially) attacker-controlled URL (<code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N</code>).
            This can often occur as part of HTTP endpoints implementing form validation.
            The impact of this is usually minor, but Jenkins may be on a private network with access to other services that lack access control.
          </li>
          <li>
            Jenkins is made to send an HTTP request using credentials stored in Jenkins, often using an attacker-specified credentials ID parameter, to an attacker-controlled endpoint (<code>CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:L/A:N</code>).
            This can be used to capture credentials stored in Jenkins, but requires knowledge of the credentials ID.
            If the same component has both a credentials enumeration vulnerability and this issue, we consider them in combination and increase the score for this issue by using <code>AC:L</code>.
          </li>
        </ul>
        <p>
          For HTTP endpoints, these issues often occur in conjunction with corresponding CSRF vulnerabilities for anything with side effects, like accessing other systems.
          Severity is usually the same, with CVSS 3.1 vectors being just slightly different (CVSS v3.1: <code>PR:N/UI:R</code> for CSRF, <code>PR:L/UI:N</code> for missing permission checks, assuming Overall/Read is still required).
        </p>

        <h2 id="pt">Path Traversal</h2>
        <p>
          Path traversal vulnerabilities can occur when file system operations accept user input that isn't sanitized or validated.
          If a file with a user-specified name is supposed to be stored in a specific directory, but that name is <code>../../../config.xml</code>, one of Jenkins's configuration files may be replaced.
        </p>
        <p>
          Regardless of whether the path traversal vulnerability affects reading from files or writing to files, the impact can be a complete compromise in both cases (CVSS v3.1: <code>C:H/I:H/A:H</code>).
        </p>

        <h3>Writing Files</h3>
        <p>
          When writing, a new plugin could be stored in <code>$JENKINS_HOME/plugins/</code>, or a new file in <code>$JENKINS_HOME/init.groovy.d</code>, or <code>$JENKINS_HOME/init.groovy</code> replaced (<a href="/doc/book/managing/groovy-hook-scripts/#post-initialization-script-init-hook">documentation</a>).
          Once Jenkins is restarted, the attacker's code will be executed (CVSS v3.1: <code>C:H/I:H/A:H</code>).
        </p>

        <h3 id="reading">Reading Files</h3>
        <p>
          When reading, the content of files in <code>$JENKINS_HOME/secrets/</code> can be used in a variety of ways.
          The following are the most severe known impacts of attackers getting access to the files in this directory:
        </p>
        <ul>
          <li>
            <strong>Remote code execution via Resource Root URLs</strong> (Variant 1)<br />
            Exploitation requires that all of the following conditions are met:
            <ul>
              <li>The "Resource Root URL" functionality is enabled (see <a href="/doc/book/security/user-content/#resource-root-url">documentation</a>).</li>
              <li>
                The CLI WebSocket endpoint is accessible.
                This requires that Jenkins is running on a version of Jetty for which Jenkins supports WebSockets.
                This is the case when using the provided native installers, packages, or the Docker containers, as well as when running Jenkins with the command <code>java -jar jenkins.war</code>.
                Additionally, reverse proxies may not allow WebSocket requests if improperly configured.
              </li>
              <li>Attackers know, or can guess, the user name of any user with Overall/Read permission.</li>
            </ul>
          </li>
          <li>
            <strong>Remote code execution via Resource Root URLs</strong> (Variant 2)<br />
            Exploitation requires that all of the following conditions are met:
            <ul>
              <li>The "Resource Root URL" functionality is enabled (see <a href="/doc/book/security/user-content/#resource-root-url">documentation</a>).</li>
              <li>
                The attacker needs an API token for a (non-anonymous) user account.
                It is not necessary for this user account to (still) have Overall/Read permission.
              </li>
            </ul>
          </li>
          <li>
            <strong>Remote code execution via "Remember me" cookie</strong><br />
            Forging a "Remember me" cookie allows attackers to log in to Jenkins using a web browser, thereby gaining access to the Script Console if they forge a cookie for an administrator account.
            Exploitation requires that all of the following conditions are met:
            <ul>
              <li>The "Remember me" feature is enabled (the default).</li>
              <li>Attackers have Overall/Read permission to be able to read content in files beyond the first few lines.</li>
            </ul>
          </li>
          <li>
            <strong>Remote code execution via stored cross-site scripting (XSS) attacks through build logs</strong><br />
            Forging serialized console note objects allows implementing XSS attacks by injecting arbitrary HTML and JavaScript into build logs.
            This attack bypasses the protections added for <a href="/security/advisory/2017-02-01/#persisted-cross-site-scripting-vulnerability-in-console-notes">SECURITY-382 in the 2017-02-01 security advisory</a>.
            Exploitation requires that attackers can control build log output, such as through pull requests.
          </li>
          <li>
            <strong>Remote code execution via CSRF protection bypass</strong><br />
            Forged CSRF tokens ("crumbs") can be used to implement CSRF attacks by sending POST requests with a valid crumb.
            Exploitation requires that the web session ID is not part of CSRF crumbs.
            By default it is (see <a href="/security/advisory/2019-07-17/#SECURITY-626">SECURITY-626 in the 2019-07-17 security advisory</a>), but not if one of the following conditions is met:
            <ul>
              <li>
                Jenkins uses the default crumb issuer and the <a href="/doc/book/managing/system-properties/#hudson-security-csrf-defaultcrumbissuer-exclude_session_id">Java system property <code>hudson.security.csrf.DefaultCrumbIssuer.EXCLUDE_SESSION_ID</code></a> is set to <code>true</code>.
              </li>
              <li>
                Jenkins uses the <a href="https://plugins.jenkins.io/strict-crumb-issuer/">Strict Crumb Issuer Plugin</a> to generate crumbs and the option "Check the session ID" is unchecked.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Additionally, less severe impact is also possible, like extracting and decrypting encrypted secrets stored in Jenkins, or extracting information about projects built by Jenkins.
        </p>
        <p>
          These examples assume that path traversal is unconstrained.
          If only some directories can be written to, the impact may be very limited.
          The security advisory will typically explain the specific vulnerability's impact.
        </p>

        <h2 id="xxe">XML External Entity (XXE) Injection</h2>
        <p>
          Improperly configured XML parsers can have significant security impact when XML files provided by users are parsed on the Jenkins controller.
          In addition to causing heavy load through a "billion laughs" attack and sending simple HTTP requests (<a href="https://owasp.org/www-community/attacks/Server_Side_Request_Forgery">Server-Side Request Forgery</a>), the content of local files can be sent to an attacker's web server (CVSS v3.1: <code>S:U/C:H/I:L/A:N</code>).
        </p>
        <p>
          A limitation of XXE is that binary files can usually not be read, as that will usually fail due to invalid UTF-8 sequences in the binary data, and all of the severe impacts listed in the <a href="#reading">Reading Files</a> section above are very unlikely to be possible.
          Some cryptographic keys can be read though, e.g., <code>secrets/master.key</code>, which may allow decrypting secrets from JENKINS_HOME backups obtained elsewhere even if that file is excluded.
        </p>
        <p>
          Content from other files can be obtained and used as well. For example, retrieving <code>users/(username)/config.xml</code> may allow offline attacks against BCrypt-hashed user passwords, if Jenkins is configured to use Jenkins' own user database.
        </p>

        <h2 id="plaintext">Unencrypted storage or transmission of secrets</h2>
        <p>
          Jenkins needs to store a number of secrets to access other services.
          It is expected that these secrets (passwords, secret tokens, etc.) are stored encrypted in configuration files and that they're not shown in plain text in configuration form fields (<a href="/doc/developer/security/secrets/">developer documentation</a>).
        </p>
        <ul>
          <li>
            Secrets stored unencrypted in global configuration files (global <code>config.xml</code>, or descriptor-specific XML files) can be accessed by attackers with local file system access, or access to Jenkins backups (<code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N</code>).
          </li>
          <li>
            Secrets stored unencrypted in view, item, or agent <code>config.xml</code> can be accessed by attackers with the corresponding ExtendedRead (item or agent) or Read (view) permission, or with local file system access, or with access to Jenkins backups (<code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N</code>).
          </li>
          <li>
            Secrets shown on the UI without being masked can be inadvertently be made accessible to attackers while screen sharing, shoulder surfing, or in similar situations (<code>CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:N/A:N</code>).
          </li>
        </ul>
      </SecurityLayout>
    </SecurityFrame>
  );
}
