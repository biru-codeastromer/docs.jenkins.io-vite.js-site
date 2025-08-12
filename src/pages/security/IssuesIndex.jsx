import { useEffect, useState } from 'react';
import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function IssuesIndex() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch('/data/security/advisories.index.json').then(r => r.json()).then(list => {
      // Build SECURITY-#### list (dedup, numeric sort desc) from advisory data we have in /public/data
      const ids = new Set();
      for (const a of list) {
        // We’ll load each advisory json for issue IDs (small overhead on first load)
        // For performance, this could be prebuilt into a /data/security/issues.json in the build script.
      }
    });
    // Better: fetch a prebuilt issues.json created by the build script
    fetch('/data/security/issues.json').then(r=>r.ok?r.json():[]).then(setIssues).catch(()=>{});
  }, []);

  return (
    <SecurityFrame title="All published security issues">
      <SecurityLayout title="All published security issues">
        <p>This page lists all security issues that have been published in security advisories since ca. 2018.</p>
        <ul>
          {issues.map(i => (
            <li key={i.redirect_id}>
              <a href={`/security/issue/${i.redirect_id}/`}>{i.redirect_id}</a>
            </li>
          ))}
        </ul>
      </SecurityLayout>
    </SecurityFrame>
  );
}
