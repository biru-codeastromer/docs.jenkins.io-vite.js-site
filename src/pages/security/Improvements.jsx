import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function ImprovementsPage() {
  return (
    <SecurityFrame title="Improvements by the Security Team">
      <SecurityLayout title="Improvements by the Security Team" showTitle>
        <p>These are some contributions by members of the Jenkins security team that weren't delivered as security fixes, but still are security-related.</p>

        <h2>2022</h2>
        <p><strong>Developers:</strong></p>
        <ul>
          <li><a href="/doc/developer/security/scan/">Jenkins Security Scan</a></li>
        </ul>

        <h2>2021</h2>
        <p><strong>Jenkins (core):</strong></p>
        <ul>
          <li><a href="https://github.com/jenkinsci/jep/tree/master/jep/235">JEP-235: Agent-To-Controller Security Simplification</a></li>
        </ul>
        <p><strong>Jenkins Plugins:</strong></p>
        <ul>
          <li>Matrix Authorization: <a href="https://github.com/jenkinsci/matrix-auth-plugin/pull/110">Explicitly assign permissions by type (user/group)</a></li>
        </ul>

        <h2>2020</h2>
        <p><strong>Jenkins (core):</strong></p>
        <ul>
          <li>Plugin Manager: <a href="https://github.com/jenkinsci/jenkins/pull/4553">Add inline security warnings to installed plugins list</a></li>
          <li>Plugin Manager: <a href="https://github.com/jenkinsci/jenkins/pull/4513">Show on 'updates' tab when a warning would be fixed</a></li>
          <li>UI/UX: <a href="https://github.com/jenkinsci/jenkins/pull/5015">Separate security and non-security administrative monitors</a></li>
          <li>UI/UX: <a href="https://github.com/jenkinsci/jenkins/pull/4389">Add stack trace suppression into core as a standard behavior</a></li>
          <li>UI/UX: <a href="https://github.com/jenkinsci/jenkins/pull/4482">Do not show disabled permissions in permission errors</a></li>
        </ul>
        <p><strong>Developers:</strong></p>
        <ul>
          <li>Listen on loopback interface: <a href="https://github.com/jenkinsci/jenkins/pull/4515">Jenkins (core)</a></li>
          <li>Listen on loopback interface: <a href="https://github.com/jenkinsci/maven-hpi-plugin/pull/169">Maven HPI Plugin</a></li>
        </ul>

        <h2>2019</h2>
        <p><strong>Jenkins (core):</strong></p>
        <ul>
          <li><strong><a href="https://github.com/jenkinsci/jenkins/pull/4239">Resource Root URL: Support serving user content from a different domain</a></strong></li>
          <li>UI/UX: <a href="https://github.com/jenkinsci/jenkins/pull/3991">Hide password form fields by default</a></li>
          <li>UI/UX: <a href="https://github.com/jenkinsci/jenkins/pull/3967">Add f:secretTextarea UI analogous to f:password</a></li>
          <li>Access Control for Builds: <a href="https://github.com/jenkinsci/jenkins/pull/3919">Add access control for builds admin monitor</a></li>
          <li>Access Control for Builds: <a href="https://github.com/jenkinsci/jenkins/pull/3908">Add message to the build log when a build is running as SYSTEM</a></li>
          <li><a href="https://github.com/jenkinsci/jenkins/pull/3954">Jenkins user database: Do not allow signup of new users by default</a></li>
          <li><a href="https://github.com/jenkinsci/jenkins/pull/4134">Use SHA-256 for CSRF crumbs</a></li>
        </ul>
        <p><strong>Jenkins Plugins:</strong></p>
        <ul>
          <li><strong><a href="https://github.com/jenkinsci/strict-crumb-issuer-plugin">Published Strict Crumb Issuer Plugin</a></strong></li>
          <li>Credentials: <a href="https://github.com/jenkinsci/credentials-plugin/pull/119">Allow credential parameters to shadow credential ids in lookup</a></li>
          <li>Credentials: <a href="https://github.com/jenkinsci/pipeline-input-step-plugin/pull/36">Support more credential masking scenarios</a></li>
          <li>Credentials: <a href="https://github.com/jenkinsci/credentials-binding-plugin/pull/59">Support more credential masking scenarios</a></li>
        </ul>

        <h2>2018</h2>
        <p><strong>Jenkins (core):</strong></p>
        <ul>
          <li><strong><a href="https://github.com/jenkinsci/jenkins/pull/3271">New API token system</a></strong></li>
          <li><a href="https://github.com/jenkinsci/jenkins/pull/3356">Add support for SHA-256/512 in update site metadata</a></li>
        </ul>
        <p><strong>Jenkins Plugins:</strong></p>
        <ul>
          <li>Published <a href="https://github.com/jenkinsci/extended-security-settings-plugin">Extended Security Settings Plugin</a></li>
        </ul>

        <h2>2017</h2>
        <p><strong>Jenkins (core):</strong></p>
        <ul>
          <li><strong>CSRF Protection:</strong> <a href="https://github.com/jenkinsci/jenkins/pull/3129">Remove requirement to have a CSRF crumb for requests with API tokens</a></li>
          <li>CSRF Protection: <a href="https://github.com/jenkinsci/jenkins/pull/3187">Make the form that allows resubmission as POST work with CSRF protection enabled</a></li>
          <li>CSRF Protection: <a href="https://github.com/jenkinsci/jenkins/pull/3072">Add a new administrative monitor for CSRF protection</a></li>
        </ul>
        <p><strong>Jenkins Plugins:</strong></p>
        <ul>
          <li><a href="https://github.com/jenkinsci/matrix-auth-plugin#version-20-2017-10-09">Matrix Authorization Plugin 2.0 Overhaul</a></li>
        </ul>

        <h2>2016</h2>
        <p><strong>Jenkins (core):</strong></p>
        <ul>
          <li>Administrative Monitors: <a href="https://github.com/jenkinsci/jenkins/pull/2558">Show admin monitors on most URLs</a></li>
          <li>Administrative Monitors: <a href="https://github.com/jenkinsci/jenkins/pull/2546">Add configuration for disabling admin monitors</a></li>
        </ul>
      </SecurityLayout>
    </SecurityFrame>
  );
}
