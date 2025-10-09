import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function SchedulingPage() {
  return (
    <SecurityFrame title="How We Schedule Security Advisories">
      <SecurityLayout title="How We Schedule Security Advisories" showTitle>
        <p>How Jenkins security advisories are scheduled depends on their content. Most Jenkins security advisories can broadly be categorized by content:</p>
        <ol>
          <li>Security advisories that announce issues in Jenkins (core), and possibly Jenkins plugins</li>
          <li>Security advisories that announce issues in Jenkins plugins only</li>
        </ol>
        <div className="app-banner">
          <strong>NOTE</strong>
          <div>
            The information on this page describes regularly scheduled security updates and security advisories.
            In very rare cases, the Jenkins project may deviate from the processes described here, e.g. to deliver urgent security fixes for vulnerabilities that were already known publicly.
          </div>
        </div>

        <h2>Security Advisories Involving Jenkins core</h2>
        <p>We typically publish between four and eight advisories of this kind every year.</p>
        <p>
          The publication dates of these security advisories is tied to the <a href="/download/lts/">Jenkins LTS schedule</a>:
          They are usually published on Wednesdays, which corresponds to the scheduled regular release day for Jenkins LTS releases.
          In the case of the Jenkins weekly release line, the security update will be an additional mid-week release between regular releases typically scheduled for release on weekends.
        </p>
        <p>
          <a href="/security/for-administrators/#pre-announcements">Pre-announcements</a> for these security advisories will be published several days in advance, sometimes up to a week.
        </p>

        <h3>Fixed Versions</h3>
        <p>
          Jenkins LTS lines typically consist of three releases: 2.xxx.1, 2.xxx.2, and 2.xxx.3, that are released four weeks apart.
          The first release of each LTS line is effectively a major update for Jenkins LTS users updating from a previous LTS release, while subsequent releases generally only contain few backported bug fixes.
        </p>
        <p>
          When publishing security fixes for Jenkins (core), we generally try to schedule these for the second or third release in an LTS line to make it easier for admins to update quickly.
          If we decide to publish security fixes for the first release in an LTS line, we will also publish an additional release for the previous LTS line.
        </p>
        <p>
          For example, <a href="/security/advisory/2019-09-25/">in September 2019</a>, we published a security advisory for Jenkins (core) and plugins that announced security fixes in 2.190.1.
          Since that was the first release of its LTS line, we also published an additional release for the previous LTS line, 2.176.4, so that admins could safely and quickly upgrade to a release containing these security fixes.
        </p>

        <h3>Changes in Security Updates</h3>
        <p>
          Security fixes for Jenkins LTS releases are integrated into regular LTS releases.
          This means that an LTS release will not only contain security fixes, but also regular bug fixes and improvements backported from weekly releases.
        </p>
        <p>
          An exception to this rule is additional LTS releases for the previous LTS line if 2.xxx.1 is a security update:
          As these are not regular LTS releases, they will only contain security fixes.
        </p>
        <p>
          In the case of security updates for weekly Jenkins releases, security fixes will be the only changes in that release.
        </p>

        <h2>Security Advisories not involving Jenkins core</h2>
        <p>
          These security advisories are published whenever there is a need.
          We try to balance the number of security advisories, and the timely delivery of security fixes, which means we typically publish 1-2 advisories of this kind every month.
        </p>
        <p>
          These advisories can be published on any weekday, but most of the time on Tuesdays, Wednesdays, or Thursdays.
          We generally try to avoid scheduling security advisories on major public holidays affecting the ability of a large number of Jenkins administrators to quickly apply updates.
        </p>
        <p>
          <a href="/security/for-administrators/#pre-announcements">Pre-announcements</a> for these security advisories will generally be published at least a day in advance, but rarely more than three work days before publication.
          Plugin security updates have less lead time than those for Jenkins (core), and we only send out pre-announcements once we're confident that the provided information will remain correct.
        </p>
      </SecurityLayout>
    </SecurityFrame>
  );
}
