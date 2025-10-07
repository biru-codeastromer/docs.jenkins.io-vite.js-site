import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function ForMaintainersPage() {
  return (
    <SecurityFrame title="Overview for Plugin Maintainers">
      <SecurityLayout title="Overview for Plugin Maintainers" showTitle>
        <p>
          The <a href="https://issues.jenkins.io/browse/SECURITY">SECURITY project in the Jenkins Jira</a> is a non-public issue tracker for security vulnerabilities. Public knowledge of these vulnerabilities could put our users at risk, so access to issues is restricted.
        </p>
        <p>
          We grant access to specific SECURITY issues in Jira to maintainers of affected plugins. They're often in a much better position to fix issues in their plugins, and the security team needs to coordinate releases with them even if they don't end up authoring the fix.
        </p>
        <p>
          We identify maintainers using <a href="https://github.com/jenkins-infra/repository-permissions-updater">uploader permissions metadata</a>, as that is the most reliable source for this kind of information in the Jenkins project. This is also where you would explicitly specify who should be the preferred contact for security issues. <a href="https://github.com/jenkins-infra/repository-permissions-updater#managing-security-process">Learn more.</a>
        </p>
        <p><strong>NOTE</strong><br/>Make sure your notification email address configured in Jira is up to date and that you don't ignore notifications sent from Jira. Obsolete email addresses and ignored emails will delay the initial contact.</p>

        <h2>Support for Maintainers</h2>
        <p>In general, the Jenkins security team helps maintainers understand reports, provides relevant documentation and examples, and reviews proposed security fixes.</p>

        <p><strong>Jira:</strong><br/>
          The Jenkins security team can grant access to the private SECURITY issue in Jira to additional users upon request. This is the preferred information sharing platform between reporters, maintainers, and the Jenkins security team.<br/>
          <em>NOTE:</em> Maintainers have limited permissions in this tracker, because we use issue statuses to keep track of issues. If you need the issue status or field values to be changed, please request such a change in a comment.
        </p>

        <p><strong>GitHub:</strong><br/>
          The Jenkins security team can create private GitHub repositories to support fix development and review. Any number of GitHub users can be added to these repositories (Read or Write permission) upon request. Jenkins security team members will be available to review and test security fixes.
        </p>

        <p><strong>Artifactory:</strong><br/>
          To support staging of security updates (see below), the Jenkins security team will create a private Maven staging repository.
        </p>

        <h2>Recommended Practices</h2>
        <p>Due to the sensitive nature of security vulnerabilities, the following practices should be followed in resolving the issue and releasing the plugin:</p>

        <h3 id="issue-handling">Practices for Issue Handling</h3>
        <ul>
          <li><strong>Be responsive.</strong> Not responding to reports of security vulnerabilities will not make them go away. Even if the reporter does not set a <a href="https://en.wikipedia.org/wiki/Full_disclosure_(computer_security)#Coordinated_vulnerability_disclosure">coordinated disclosure deadline</a>, the Jenkins security team will <a href="/security/plugins">publish security vulnerabilities in security advisories even if no fix exists</a>. If you're no longer maintaining the plugin, please let us know so we can proceed appropriately.</li>
          <li><strong>Respect embargoes.</strong> A few security issues are <em>embargoed</em>, which means information about them <strong>must not be shared</strong> with others, typically because a new class of issue was discovered and similar vulnerabilities exist in other components.</li>
          <li><strong>Keep any information gained from the SECURITY tracker private</strong> until a version of the plugin containing the fix is released, as it may put users at risk.</li>
          <li><strong>Keep the source code for your fix private</strong> until a fixed version of your plugin has been released, e.g. by pushing it to GitHub, even it's just your fork that nobody watches. If you need assistance in fixing the vulnerability, ask for it in the SECURITY issue. The Jenkins security team also offers to review your security fix; please ask for a private repository in the <code>jenkinsci-cert</code> GitHub organization to be created, and submit your fix there.</li>
          <li><strong>Coordinate the date and time of the release</strong> of the fixed plugin with the Jenkins security team. This will allow for assigning <a href="/security/cna">a CVE ID</a> prior to release, and publishing a <a href="/security/advisories/">security advisory</a> informing users of the security vulnerability, and how to address it.</li>
        </ul>

        <h3 id="fix-development">Practices for Fix Development</h3>
        <p>Security fixes should be developed on a branch that will be submitted as a pull request in a private repository in the <code>jenkinsci-cert</code> GitHub organization to facilitate fix review.</p>
        <ul>
          <li><strong>Keep the security fix minimal.</strong> This is not an opportunity to address some old TODO comments, refactor code, or modernize the plugin. All of that can be done in a separate update; either at least a week or two before the security update would be published, or after the security update is published. In some cases, this even means implementing a "hack" solution, and holding off on the superior fix until after the security update is published. This limits the potential risk of regressions in the security update due to unrelated changes. Please also refrain from reformatting code you're not otherwise changing to make it easier to review the security fix.</li>
          <li><strong>Keep the security update minimal.</strong> If the target branch of the security fix has unrelated changes, branch off from the previous release (specifically the <code>prepare for next development iteration</code> commit in case of manual releases, and the tagged commit in case of JEP-229 CD) and target that branch instead, or make sure to release the plugin's unrelated changes a week or two before the security release. This also limits the potential risk of regressions in the security update due to unrelated changes.</li>
          <li><strong>Keep source code private until the security updates are published.</strong> The staging instructions below prevent pushing the release commits, which would result in premature disclosure due to delays in the infrastructure, or the staging process. Once you've staged a plugin release to a staging repository, push the branch/commits and release tag to the private repository in the <a href="https://github.com/jenkinsci-cert/">jenkinsci-cert</a> GitHub organization <em>only</em>. From there, the commits and tag will be pushed to the public repository after the security update is made public, typically within an hour.</li>
          <li><strong>No late changes.</strong> Don't add changes to the security release unless they're essential for the security fix to work after the fix has been reviewed and approved. Otherwise this will invalidate the testing and review that has happened before.</li>
        </ul>
        <p>See also <a href="/security/fixing">How We Fix Security Issues</a> for general guidelines.</p>

        <h2>Process Overview</h2>
        <p>The following is a rough approximation of the typical recommended lifecycle of a plugin security issue in the SECURITY tracker:</p>
        <ol>
          <li>Someone <strong>reports an issue</strong> in a plugin.</li>
          <li>The security team <strong>evaluates</strong> the report.
            <ol>
              <li>If we're confident it is not a security vulnerability, the issue is moved to the JENKINS project.</li>
            </ol>
          </li>
          <li>We <strong>determine the maintainer and/or security contact</strong>. For the purposes of this document, only plugins maintained by people not also on the security team are considered here. Maintainers and security contacts are decided based on <a href="https://github.com/jenkins-infra/repository-permissions-updater">release permissions</a>.</li>
          <li>We <strong>assign the issue</strong> to the plugin maintainers (resulting in access to the issue), and notify them in a comment. If necessary, plugin maintainers are contacted repeatedly, in Jira and/or directly via email, to notify them of this issue.</li>
          <li>The plugin <strong>maintainer reviews</strong> the reported issue.</li>
          <li>If they identify it as an actual security vulnerability, they (and, if requested, the security team) <strong>work to resolve the issue</strong>.
            <ol>
              <li>The security team provides a private repository for that work in the <code>jenkinsci-cert</code> GitHub organization.</li>
              <li>Work usually happens on a branch, and a corresponding pull request will be used for review.</li>
            </ol>
          </li>
          <li>A <strong>date and time of the release is coordinated</strong> between the security team and maintainers. The security team handles CVE ID assignment, advance notification of users, and creation of the security advisory.</li>
          <li>The <strong>security fix is merged</strong>. For details, see <a href="#merging">Merge the Fix</a> below.</li>
          <li>A version of the plugin containing the fix is <strong>uploaded to a staging repository</strong> (see <a href="#upload">Stage with Maven</a> below). The release tag is created and the tag and updated branch are pushed to the private GitHub repository.</li>
          <li>The <strong>staged release is published</strong> by the security team, and the corresponding security advisory is published and announced. The source code is pushed to the public GitHub repository. The issue in the issue tracker is closed.</li>
        </ol>

        <h2 id="staging">Staging Procedure</h2>
        <p>
          Staging includes all the steps described below and is typically done a few days before the scheduled advisory. This strikes a balance between allowing the longest possible time for reviews and testing, while minimizing the risk of releases failing on the intended release date and acknowledging time constraints and different time zones of everyone involved.
        </p>
        <p><strong>NOTE</strong><br/>The Jenkins security team needs to prepare a Maven staging repository before security updates can be staged, so follow the instructions below only once you know the Maven repository to stage to. Make sure to follow instructions provided by the Jenkins security team if they deviate from the instructions below.</p>

        <h3 id="backporting">Backporting</h3>
        <p>
          At this point, consider the need for backports. Some administrators may be unable to install the latest version of your plugin. Usually this is because the plugin depends on a recent weekly release of Jenkins. Users of the <a href="/download/lts/">LTS line of Jenkins releases</a> will not be offered a plugin update that requires a weekly version of Jenkins higher than the LTS baseline, even when they're already on the latest version of Jenkins available to them.
        </p>
        <p>
          We recommend that all security fixes are made available to both current weekly and current LTS releases. If the current LTS release is the first in its line (e.g., 2.375.1), also consider making the security fix available to users of the previous release, as many administrators may not immediately update.
        </p>
        <p>
          Additionally, the security fixes should generally be made available to users who are already on the latest version of the plugin available to them, rather than an earlier version. This will make it easy to update to a version with the fix through the plugin manager, without potentially losing features by doing what amounts to a manual downgrade.
        </p>

        <h4>Backporting Example</h4>
        <p>
          Suppose it is early 2023 and you're preparing a security fix for a plugin you maintain. The most recent LTS releases are Jenkins 2.361.4 and Jenkins 2.375.1, and the current weekly release is 2.387. The plugin's latest release, version 2.2, has a Jenkins dependency of 2.380 because it makes use of a new feature in that release. The most recent lower Jenkins dependency of the plugin was Jenkins 2.361.3 in plugin version 2.0.
        </p>
        <p>
          In this case, controllers on both 2.361.4 and 2.375.1 will be able to install a security fix provided on top of version 2.0 of the plugin. Controllers on the weekly release line will be able to install a security fix provided on top of version 2.2. So the plugin should get updates with the security fix based on top of version 2.2 (e.g., 2.2.1 or 2.3) <em>and</em> 2.0 (e.g., 2.0.1 or 2.0.0.1, whichever version would be between 2.0 and the next release that already exists).
        </p>
        <p>
          Now consider the case of the plugin version 2.1 previously raising the core dependency from 2.361.2 to Jenkins 2.370 (before 2.2 raised it to 2.380). In this case, three separate releases are now needed to cover users of Jenkins 2.361.4, 2.375.1, and 2.387:
        </p>
        <ul>
          <li>Jenkins 2.361.4 needs a backport on top of plugin version 2.0 (e.g., 2.0.1 or 2.0.0.1) with a Jenkins dependency of 2.361.2.</li>
          <li>Jenkins 2.375.1 needs a backport on top of plugin version 2.1 (e.g., 2.1.1 or 2.1.0.1) with a Jenkins dependency of 2.370. While they could in theory install the backport on top of version 2.0, this would effectively be a downgrade, and remove all features added between versions 2.0 and 2.1 of the plugin (if this is even possible without data loss).</li>
          <li>Only weekly releases like 2.387 will be able to update to the next regular plugin release (e.g., 2.2.1 or 2.3) with a Jenkins dependency of 2.380.</li>
        </ul>

        <h3 id="merging">Merge the Fix</h3>
        <p>
          First, prepare the release branch: If there are unrelated, unreleased changes on the default branch, create a new branch based on the previous release. For plugins with <a href="/doc/developer/publishing/releasing-manually/">manual release process</a> this is the <code>prepare for next development iteration</code> commit. For plugins delivered with <a href="/doc/developer/publishing/releasing-cd/">JEP-229 CD automated releases</a>, it is the commit that got tagged as a release.
        </p>
        <p><strong>NOTE</strong><br/>If all unreleased changes are unlikely to introduce regressions, e.g., minor documentation fixes or similar, it's also reasonable to include those changes in the security fix. In general we recommend caution when doing this however: even safe-looking dependency updates can easily cause regressions and make administrators choose between a plugin release that is safe and one that works. It is always safest to not include unrelated changes in security fixes.</p>
        <p>
          Next, use the Git command line to <strong>squash-merge pull request branches</strong> in the private jenkinsci-cert repository (<code>git merge --squash &lt;BRANCH&gt;</code>).
        </p>
        <p><strong>NOTE</strong><br/>Do <em>not</em> merge using the GitHub UI: It would by default add a reference to the private PR (like <code>#1</code>), which is confusing (or at best useless) when seen in the public repository.</p>
        <p>
          <strong>As commit message, use just the ID</strong> of the security issue (for example <code>[SECURITY-12345]</code>), without further details. At this point, it may not be clear exactly how the fix will be announced and documented, and discrepancies between the commit message and security advisory would be confusing. If you didn't develop the fix, make sure to credit the original author by adding <code>--author='Actual Author &lt;author@example.org&gt;'</code> to the <code>git commit</code> command. To find out what name and email address to put there, see <code>git log &lt;BRANCH&gt;</code>.
        </p>

        <h4>Backporting</h4>
        <h5>Backport Branch Preparation</h5>
        <p>
          Similar to when there are unreleased changes on the default branch, a new branch needs to be created when backporting, unless a branch with the correct baseline already exists, e.g., from an earlier security update.
        </p>
        <p>
          Create a new branch based on the release that the fix should be backported to:
        </p>
        <ul>
          <li>For plugins with <a href="/doc/developer/publishing/releasing-manually/">manual release process</a> this is the <code>prepare for next development iteration</code> commit.</li>
          <li>For plugins delivered with <a href="/doc/developer/publishing/releasing-cd/">JEP-229 CD automated releases</a>), it is the commit that got tagged as a release.</li>
        </ul>
        <p><strong>IMPORTANT</strong><br/>If the plugin recently switched from manual releases to JEP-229 CD automated releases (or vice versa), each branch may require different procedures.</p>
        <p>The branch is conventionally named something like <code>2.18.x</code> (if it's based on 2.18) or <code>1234.x</code> (if it's based on the JEP-229 version 1234.vabdef123).</p>

        <h6>Plugins with manual releases</h6>
        <p>
          For plugins with <a href="/doc/developer/publishing/releasing-manually/">manual release process</a>, you could set the version number used for releases from the backport branch at this point, for example:
        </p>
        <pre><code>mvn versions:set -DnewVersion=2.18.1-SNAPSHOT -DgenerateBackupPoms=false</code></pre>
        <p>
          This is optional, as the version number can still be specified when staging.
        </p>

        <h6>Plugins with JEP-229 CD</h6>
        <p>
          For plugins delivered with <a href="/doc/developer/publishing/releasing-cd/">JEP-229 CD automated releases</a>, you also need to manually specify a custom version number for the backport branch. Otherwise, the automatically generated, linearly increasing version number would not indicate the existence of a backport branch.
        </p>
        <p>
          Edit all applicable <code>pom.xml</code> files (usually just one) and add a prefix corresponding to the baseline version prefix to the <code>&lt;version&gt;</code>. <em>mvn versions:set does not work, it really needs to be done manually.</em> For example:
        </p>
        <pre><code>{`--- a/pom.xml
+++ b/pom.xml
@@ -10,12 +10,12 @@
   <artifactId>very-cool-plugin</artifactId>
-  <version>$` + `{changelist}</version>
+  <version>12345.$` + `{changelist}</version>
   <packaging>hpi</packaging>`}</code></pre>
        <p>
          Commit this change, e.g.: <code>git commit -a -m "Prepare for 12345.x"</code> As a result, the backport will typically have a version like <code>12345.12347.vabdef123</code>.
        </p>
        <p><strong>NOTE</strong></p>
        <pre><code>{`--- a/pom.xml
+++ b/pom.xml
@@ -10,12 +10,12 @@
  <artifactId>very-cool-plugin</artifactId>
-  <version>$` + `{revision}.$` + `{changelist}</version>
+  <version>$` + `{revision}.12345.$` + `{changelist}</version>
  <packaging>hpi</packaging>`}</code></pre>

        <h5>Applying the Fix</h5>
        <p>
          When backporting the fix to an earlier line, you need to use <code>git cherry-pick -x &lt;commit-id&gt;</code>, specifying the commit that you merged earlier, instead of <code>git merge --squash &lt;branch&gt;</code>. Trying to squash-merge the fix branch will also merge in all unrelated changes between the baseline that the fix was developed on, and the earlier line you're trying to merge it into.
        </p>
        <p>
          Beware of potential merge conflicts if the security fix changes lines that were modified between the baseline against which the fix was developed, and the version you're backporting to. In extreme cases, it can be useful to basically develop the fix multiple times, with individual PRs each targeting a different (backporting) branch, to let reviewers confirm conflict resolution was done correctly.
        </p>
        <p><strong>NOTE</strong><br/>It's a good practice to run <code>mvn clean verify</code> now, even when there are no merge conflicts, to ensure that all tests pass.</p>

        <h3 id="upload">Stage with Maven</h3>
        <h4>Plugins with manual releases</h4>
        <p>
          For Maven-based plugins that are usually released manually using <code>mvn release:prepare release:perform</code>, use the following command to stage the plugin release. <code>REPONAME</code> is a placeholder for the name of the Maven staging repository that is provided by the Jenkins security team.
        </p>
        <pre><code>mvn -DstagingRepository=maven.jenkins-ci.org::default::https://repo.jenkins-ci.org/REPONAME -DpushChanges=false -DlocalCheckout=true org.apache.maven.plugins:maven-release-plugin:3.0.0:prepare org.apache.maven.plugins:maven-release-plugin:3.0.0:stage</code></pre>
        <p><strong>WARNING:</strong> The staging repository name (<code>REPONAME</code>) is <em>never</em> a GitHub URL or GitHub repository name.</p>
        <p><strong>Always use <code>release:stage</code></strong> instead of <code>release:perform</code>. While the latter also supports specifying a different repository, it's not a necessary parameter, so typos in the system property can result in accidental uploads to the public repository, disclosing any vulnerabilities early.</p>

        <h4>Plugins with otherwise automated releases (JEP-229 CD)</h4>
        <p>
          For Maven-based plugins that use JEP-229, use the following commands to stage the plugin release. <code>REPONAME</code> is a placeholder for the name of the Maven staging repository that is provided by the Jenkins security team.
        </p>
        <p><strong>Build and deploy the release:</strong></p>
        <pre><code>mvn -Dset.changelist -DaltDeploymentRepository=maven.jenkins-ci.org::default::https://repo.jenkins-ci.org/REPONAME deploy</code></pre>
        <p><strong>WARNING:</strong> The staging repository name (<code>REPONAME</code>) is <em>never</em> a GitHub URL or GitHub repository name.</p>
        <p><strong>CAUTION:</strong> If your account is allowed to upload plugin releases, be <em>very</em> careful to enter the <code>-DaltDeploymentRepository</code> argument correctly, as any typo in the name would end up deploying to the regular Maven repository, creating a public release.</p>
        <p><strong>Create the tag:</strong></p>
        <pre><code>git tag "$( mvn -q help:evaluate -Dexpression=project.version -DforceStdout -Dset.changelist )"</code></pre>
        <p>NOTE: The specific syntax depends on your shell. This command works for <code>bash</code> and <code>zsh</code>. You can also just run <code>mvn …</code> first, then copy the output and provide it as argument to <code>git tag</code> manually.</p>
        <p>Since this release is staged from a private GitHub repository, be careful not to merge changes into the public GitHub repository that would trigger further releases until after the private commits have been made public after advisory publication. Otherwise, administrators may not be offered the staged release containing the security fix, but another release created from the public repository.</p>

        <h3>Push Commits and Tags</h3>
        <p>
          After uploading, push the release commits/branch(es) and tag(s) to the <strong>private</strong> GitHub repository in the <code>jenkinsci-cert</code> GitHub organization, but <strong>NOT to the public</strong> (<code>jenkinsci</code>) repository.
        </p>
        <pre><code># Command format
git push &lt;remote&gt; [&lt;branch or tag&gt; ...]
# Example
git push jenkinsci-cert master v2.6.3.x matrix-auth-2.6.6 matrix-auth-2.6.3.1</code></pre>
        <p>
          The Jenkins security team will typically push these tags and branches to the public repository after the security advisory has been published, or will comment on the private SECURITY issue asking the maintainer to do it otherwise.
        </p>

        <h3>Keep Documentation Private</h3>
        <p>Documentation (outside the plugin source code, e.g. in the Jenkins wiki or in GitHub releases metadata) should only be published once the security advisory has been published.</p>

        <h3 id="branch-lock">Locking Public Branches</h3>
        <p>
          The Jenkins security team usually locks the default branch of GitHub repositories while a plugin is staged, and unlocks it after tags and commits prepared in the private GitHub repository have been pushed. This prevents accidental merges (or even releases) during the staging period, which would make publication of prepared branches more difficult, or even invalidate the staged artifacts.
        </p>
        <p>
          While repository administrators can remove this lock, please do that only after discussion with the Jenkins security team, and consider the impact on staged security fixes.
        </p>

        <h3>Releasing</h3>
        <p>The Jenkins security team generally handles publishing the staged Maven artifacts and prepared Git branches and tags to the public repositories on release day.</p>

        <h2>Resources</h2>
        <ul>
          <li><a href="/doc/developer/security/">Security Chapter in the Jenkins Developer Documentation</a></li>
          <li><a href="/doc/developer/security/secrets/">Storing Secrets</a></li>
          <li><a href="/doc/developer/security/form-validation/">Form Validation</a> (permission checks and CSRF protection)</li>
          <li><a href="/doc/developer/security/xss-prevention/">Preventing Cross-Site Scripting in Jelly views</a></li>
        </ul>
      </SecurityLayout>
    </SecurityFrame>
  );
}
