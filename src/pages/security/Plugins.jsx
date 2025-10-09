import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function PluginsPage() {
  return (
    <SecurityFrame title="Handling Vulnerabilities in Plugins">
      <SecurityLayout title="Handling Vulnerabilities in Plugins" showTitle>
        <p>
          We strive to fix all security vulnerabilities in Jenkins and plugins in a timely manner.
          However, the structure of the Jenkins project, which gives plugin maintainers a lot of autonomy, and the number and diversity of plugins make this impossible to guarantee.
        </p>

        <h2 id="unresolved">Announcing Unresolved Vulnerabilities</h2>
        <p>
          In case of a plugin vulnerability, we try to contact the plugin maintainer(s) to inform them of it.
          If they decline (or otherwise fail) to fix the vulnerability, or don't respond in a timely manner, and the security team doesn't have the capacity to fix it, we follow the process outlined below in the interest of our users:
        </p>
        <ol>
          <li>
            Publish a security advisory about the plugin, describing the nature of the vulnerability, but noting that there is no fix (other than no longer using the plugin).
            If there are workarounds, explain them.
          </li>
          <li>
            In some cases of particularly severe vulnerabilities, <a href="#suspensions">stop publishing the vulnerable plugin on the Jenkins update sites</a>.
          </li>
          <li> Add metadata to update sites to inform administrators on the Jenkins UI about vulnerable plugins they have installed.</li>
          <li> Display security warnings on <a href="https://plugins.jenkins.io/">the plugins site</a>.</li>
        </ol>
        <p>
          This allows Jenkins administrators to make an informed decision about their continued use of plugins with unresolved security vulnerabilities.
        </p>

        <h2 id="followup">Following Up Later</h2>
        <p>
          Some maintainers end up fixing security vulnerabilities after we have announced it as unresolved in their plugin.
          This can be any time between hours and years after publication.
        </p>
        <p>
          In those cases, security advisories will <em>not</em> be amended, as the information provided was correct at the time of publication.
          Additionally, the security advisory will be clear that the lack of a fix is only known "<em>as of publication of this advisory</em>".
        </p>
        <p>
          We will update the security warnings metadata that is shown to administrators in Jenkins and on <a href="https://plugins.jenkins.io/">the plugins site</a>.
          Maintainers can inform us through Jira or email about a fix or <a href="https://github.com/jenkins-infra/update-center2/#security-warnings">file a pull request updating the warnings metadata</a> themselves.
          Once we confirm the fix is correct and complete, we will update the published warnings metadata.
          This will remove the active security warning from the plugin entry on the plugins site and from the plugin manager directly in Jenkins.
        </p>

        <h2 id="suspensions">Suspended Plugins</h2>
        <p>
          Distribution of the following plugins was suspended in conjunction with the publication of a security advisory announcing unresolved security issues.
          The Jenkins security team believes that most use cases would be negatively impacted by these security vulnerabilities and it is better for the Jenkins ecosystem to no longer distribute these plugins in their current form to prevent harm to users.
          This typically is the case when plugins have particularly severe security vulnerabilities, deliberately bypass or disable protection mechanisms, or offer little benefit to users anyway.
        </p>
        <ul>
          <li>360 FireLine (<code>fireline</code>): <a href="/security/advisory/2022-10-19/#SECURITY-2866">SECURITY-2866</a></li>
          <li>Adaptive DSL (<code>AdaptivePlugin</code>): <a href="/security/advisory/2017-04-10/#adaptive-dsl-plugin">SECURITY-457</a></li>
          <li>Autocomplete Parameter (<code>autocomplete-parameter</code>): <a href="/security/advisory/2022-05-17/">multiple vulnerabilities announced on 2022-05-17</a></li>
          <li>Build Flow (<code>build-flow-plugin</code>): <a href="/security/advisory/2017-04-10/#build-flow-plugin">SECURITY-293</a></li>
          <li>CAS protocol version 1 (<code>cas1</code>): <a href="/security/advisory/2017-04-10/#cas-protocol-version-1-plugin">SECURITY-491</a></li>
          <li>Config Rotator (<code>config-rotator</code>): <a href="/security/advisory/2022-11-15/#SECURITY-2842">SECURITY-2842</a></li>
          <li>Copy To Slave (<code>copy-to-slave</code>): <a href="/security/advisory/2018-03-26/#SECURITY-545">SECURITY-545</a></li>
          <li>CryptoMove (<code>cryptomove</code>): <a href="/security/advisory/2020-03-09/#SECURITY-1635">SECURITY-1635</a></li>
          <li>CVS Tagging (<code>cvs-tag</code>): <a href="/security/advisory/2017-04-10/#cvs-tagging-plugin">SECURITY-459</a></li>
          <li>Debian Package Builder (<code>debian-package-builder</code>): <a href="/security/advisory/2022-01-12/#SECURITY-2546">SECURITY-2546</a></li>
          <li>DotCi (<code>DotCi</code>): <a href="/security/advisory/2022-09-21/#SECURITY-1737">SECURITY-1737</a></li>
          <li>Dynamic Parameter (<code>dynamicparameter</code>): <a href="/security/advisory/2017-04-10/#dynamic-parameter-plugin">SECURITY-462</a></li>
          <li>ElasticBox Jenkins Kubernetes CI/CD (<code>kubernetes-ci</code>): <a href="/security/advisory/2020-07-02/#SECURITY-1738">SECURITY-1738</a></li>
          <li>Grails (<code>grails</code>): <a href="/security/advisory/2017-04-10/#grails-plugin">SECURITY-458</a></li>
          <li>GroovyAxis (<code>groovyaxis</code>): <a href="/security/advisory/2017-04-10/#groovyaxis-plugin">SECURITY-460</a></li>
          <li>JS Games (<code>jsgames</code>): <a href="/security/advisory/2020-09-01/#SECURITY-1905">SECURITY-1905</a></li>
          <li>Kubernetes Continuous Deploy (<code>kubernetes-cd</code>): <a href="/security/advisory/2022-08-23/#SECURITY-2448">SECURITY-2448</a></li>
          <li>Kubernetes :: Pipeline :: Arquillian Steps (<code>kubernetes-pipeline-arquillian-steps</code>): <a href="/security/advisory/2019-09-25/#SECURITY-920%20(2)">SECURITY-920 (2)</a></li>
          <li>Kubernetes :: Pipeline :: Kubernetes Steps (<code>kubernetes-pipeline-steps</code>): <a href="/security/advisory/2019-09-25/#SECURITY-920%20(1)">SECURITY-920 (1)</a></li>
          <li>Literate (<code>literate</code>): <a href="/security/advisory/2020-03-09/#SECURITY-1750">SECURITY-1750</a></li>
          <li>Mashup Portlets (<code>mashup-portlets-plugin</code>): <a href="/security/advisory/2023-03-21/#SECURITY-2813">SECURITY-2813</a></li>
          <li>Nerrvana (<code>nerrvana</code>): <a href="/security/advisory/2020-10-08/#SECURITY-2097">SECURITY-2097</a></li>
          <li>Persona (<code>persona</code>): <a href="/security/advisory/2020-10-08/#SECURITY-2046">SECURITY-2046</a></li>
          <li>Pipeline: Classpath Step (<code>pipeline-classpath</code>): <a href="/security/advisory/2017-03-20/#pipeline-classpath-step-plugin-allowed-script-security-sandbox-bypass">SECURITY-336</a></li>
          <li>Pipeline: Phoenix AutoTest (<code>phoenix-autotest</code>): <a href="/security/advisory/2022-03-29/">multiple vulnerabilities announced on 2022-03-29</a></li>
          <li>Puppet Enterprise Pipeline (<code>puppet-enterprise-pipeline</code>): <a href="/security/advisory/2019-10-16/#SECURITY-918">SECURITY-918</a></li>
          <li>Reactor (<code>reactor</code>): <a href="/security/advisory/2017-04-10/#reactor-plugin">SECURITY-487</a></li>
          <li><code>remote-jobs-view-plugin</code>: <a href="/security/advisory/2023-03-21/#SECURITY-2956">SECURITY-2956</a></li>
          <li>Script SCM (<code>scriptscm</code>): <a href="/security/advisory/2017-04-10/#script-scm-plugin">SECURITY-461</a></li>
          <li><code>scripttrigger</code>: <a href="/security/advisory/2017-04-10/#scripttrigger-plugin">SECURITY-456</a></li>
          <li>Simple Travis Pipeline Runner (<code>simple-travis-runner</code>): <a href="/security/advisory/2019-08-07/#SECURITY-922">SECURITY-922</a></li>
          <li>Chef Sinatra (<code>sinatra-chef-builder</code>): <a href="/security/advisory/2022-02-15/#SECURITY-1377">SECURITY-1377</a></li>
          <li>ScreenRecorder (<code>screenrecorder</code>): <a href="/security/advisory/2022-10-19/#SECURITY-2864">SECURITY-2864</a></li>
          <li>Speaks! (<code>speaks</code>): <a href="/security/advisory/2017-10-11/#arbitrary-code-execution-vulnerability-in-speaks-plugin">SECURITY-623</a></li>
          <li>Storable Configs (<code>storable-configs-plugin</code>): <a href="/security/advisory/2022-05-17/#SECURITY-1969">SECURITY-1969</a>, <a href="/security/advisory/2020-09-16/">multiple vulnerabilities announced on 2020-09-16</a></li>
          <li>Subversion Tagging (<code>svn-tag</code>): <a href="/security/advisory/2017-04-10/#subversion-tagging-plugin">SECURITY-298</a></li>
          <li><code>tcl</code>: <a href="/security/advisory/2017-04-10/#tcl-plugin">SECURITY-379</a></li>
          <li>Team Views (<code>team-views</code>): <a href="/security/advisory/2022-02-15/">multiple vulnerabilities announced on 2022-02-15</a></li>
          <li>WSO2 Oauth (<code>wso2id-oauth</code>): <a href="/security/advisory/2025-05-14/#SECURITY-3481">SECURITY-3481</a></li>
          <li>XFramium Builder (<code>xframium</code>): <a href="/security/advisory/2022-10-19/#SECURITY-2863">SECURITY-2863</a></li>
        </ul>

        <p>
          Unless the security issue is inherent to what the plugin does while not making this the sole <em>purpose</em> of the plugin, the Jenkins security team welcomes efforts to fix the vulnerabilities and have plugin distribution restored.
        </p>

        <p>In addition to plugins suspended for security reasons, the following plugins that require suspended plugins to run are also suspended, as they would not be installable:</p>
        <ul>
          <li>Build Automation Management Tool (<code>build-configurator</code>) depends on <code>copy-to-slave</code></li>
          <li><code>build-flow-extensions-plugin</code> depends on <code>build-flow-plugin</code></li>
          <li><code>build-flow-test-aggregator</code> depends on <code>build-flow-plugin</code></li>
          <li><code>build-flow-toolbox-plugin</code> depends on <code>build-flow-plugin</code></li>
          <li>DotCi DockerPublish (<code>DotCi-DockerPublish</code>) depends on <code>DotCi</code></li>
          <li>DotCi Fig template (<code>DotCi-Fig-template</code>) depends on <code>DotCi-InstallPackages</code></li>
          <li>DotCi InstallPackages (<code>DotCi-InstallPackages</code>) depends on <code>DotCi</code></li>
          <li>DotCiInstallPackages (<code>DotCiInstallPackages</code>) depends on <code>DotCi</code></li>
          <li>External Resource Dispatcher (<code>externalresource-dispatcher</code>) depends on <code>build-flow-plugin</code></li>
          <li>Kubernetes :: Pipeline :: Aggregator (<code>kubernetes-pipeline-aggregator</code>) depends on <code>kubernetes-pipeline-arquillian-steps</code> and <code>kubernetes-pipeline-steps</code></li>
          <li><code>lsf-cloud</code> depends on <code>copy-to-slave</code></li>
          <li>SGE Cloud Plugin (<code>sge-cloud-plugin</code>) depends on <code>copy-to-slave</code></li>
          <li>XTrigger (<code>xtrigger</code>) depends on <code>scripttrigger</code></li>
        </ul>

        {/* AsciiDoc comment intentionally not rendered:
        These plugins are excluded from this page, as the security issue wasn't the reason for suspension, but only triggered it:
        azure-slave-plugin, bart, build-publisher, cons3rt, gcm-notification, osf-builder-suite-xml-linter, perforce, play-autotest-plugin,
        reviewboard - depends on perforce, squashtm-publisher, walti, xltestview-plugin
        */}
      </SecurityLayout>
    </SecurityFrame>
  );
}
