import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function CnaPage() {
  return (
    <SecurityFrame title="Jenkins CVE Numbers Authority">
      <SecurityLayout title="Jenkins CVE Numbers Authority" showTitle>
        <p>
          The Jenkins project is a <a href="https://cve.mitre.org/">CVE Numbers Authority</a> (CNA) for Jenkins and Jenkins plugins published by the Jenkins project (listed on <a href="https://plugins.jenkins.io/">plugins.jenkins.io</a> and/or hosted in <a href="https://github.com/jenkinsci">the jenkinsci GitHub organization</a>). This means that the Jenkins project assigns <a href="https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures">CVE IDs</a> for vulnerabilities in these components.
        </p>

        <h2>CNA scope and coordination</h2>
        <p>
          Determining whether there is another CNA for a specific component can be challenging, especially if the companies have changed names, been acquired, or do not share a common name with the component itself. This means that the search is manual and a best effort approach.
        </p>
        <p>
          If a CNA wishes to identify themselves for a particular component, they can use the contact information below. The same applies in response to an advisory, if a CNA was not found in our search, they can contact us to be included in our list for future reference.
        </p>

        <h2>Contact</h2>
        <p>
          Contact us at <code>jenkinsci-cert@googlegroups.com</code> if you have any questions about the Jenkins CNA.
        </p>
        <p>
          <strong>IMPORTANT:</strong> Do not contact the Jenkins security team asking us for compliance documents, certifications, or to fill out a questionnaire. We will not respond to such queries. If we consider it necessary to provide a statement in response to incidents such as <a href="/blog/2021/12/10/log4j2-rce-CVE-2021-44228/">log4shell</a> or <a href="/blog/2022/03/31/spring-rce-CVE-2022-22965/">SpringShell</a>, you will find a response in our <a href="/blog/">blog</a>.
        </p>

        <h2>CVE Assignment Process</h2>
        <p>
          CVEs for privately reported and tracked security vulnerabilities are assigned shortly (several hours to a few days) before publication in a security advisory.
        </p>
      </SecurityLayout>
    </SecurityFrame>
  );
}
