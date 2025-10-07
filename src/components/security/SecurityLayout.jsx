import { NavLink, useLocation } from 'react-router-dom';

function A({ to, children, fuzzy }) {
  const loc = useLocation();
  const active = fuzzy ? loc.pathname.startsWith(`/${to}`) : loc.pathname === `/${to}/` || loc.pathname === `/${to}`;
  return <a href={`/${to}/`} className={active ? 'active' : ''}>{children}</a>;
}

export default function SecurityLayout({ title, children, showTitle = true }) {
  return (
    <div className="container">
      <div className="row body">
        <div className="col-lg-3">
          <div className="sidebar-nav tour">
            <p><A to="security">Jenkins Security Home</A></p>
            <strong>For Administrators</strong>
            <ul>
              <li><A to="security/for-administrators">Overview</A></li>
              <li><A to="security/terminology">Terminology</A></li>
              <li><A to="security/vulnerabilities">Vulnerabilities and Scoring</A></li>
              <li><A to="security/advisories">Security Advisories</A></li>
              <li><A to="security/issues">Security Issues</A></li>
              <li><A to="security/scheduling">Advisory Schedule</A></li>
              <li><A to="security/plugins">Vulnerabilities in Plugins</A></li>
              <li><A to="security/fixing">How We Fix Security Issues</A></li>
            </ul>
            <strong>For Reporters</strong>
            <ul>
              <li><A to="security/reporting">Reporting Vulnerabilities</A></li>
              <li><A to="security/cna">Jenkins CNA</A></li>
            </ul>
            <strong>For Maintainers</strong>
            <ul>
              <li><A to="security/for-maintainers">Overview</A></li>
              <li><A to="security/plugins">Vulnerabilities in Plugins</A></li>
            </ul>
            <strong>Jenkins Security Team</strong>
            <ul>
              <li><A to="security/team">About</A></li>
              <li><A to="security/improvements">Contributions</A></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          {showTitle && <h1>{title}</h1>}
          {children}
        </div>
      </div>
    </div>
  );
}
