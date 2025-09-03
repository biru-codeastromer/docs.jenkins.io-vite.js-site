import { useEffect } from 'react';
import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function GiftRedirect() {
  const target = '/security/reporting/#bug-bounty-reward-gift';
  useEffect(() => {
    // mimic redirect layout: instant client redirect
    window.location.replace(target);
  }, []);
  return (
    <SecurityFrame title="Redirecting…">
      <SecurityLayout title="Redirecting…" showTitle>
        <p>This content has moved to <a href={target}>{target}</a>.</p>
      </SecurityLayout>
    </SecurityFrame>
  );
}
