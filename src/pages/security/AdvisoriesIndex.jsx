import { useEffect, useState, useMemo } from 'react';
import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function AdvisoriesIndex() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/security/advisories.index.json')
      .then(r => r.json())
      .then(setItems);
  }, []);

  const years = useMemo(() => {
    const s = new Set(items.map(x => x.date.slice(0,4)));
    return Array.from(s).sort().reverse();
  }, [items]);

  const grouped = useMemo(() => {
    const m = {};
    for (const it of items) {
      const y = it.date.slice(0,4);
      (m[y] ||= []).push(it);
    }
    for (const y of Object.keys(m)) m[y].sort((a,b)=>b.date.localeCompare(a.date));
    return m;
  }, [items]);

  return (
    <SecurityFrame title="Security Advisories">
      <SecurityLayout title="Security Advisories" showTitle={true}>
        <p>This page lists all security advisories that have been published so far.</p>
        <p>This index is also available as an <a href="/security/advisories/rss.xml">RSS feed.</a></p>

        {years.map(year => (
          <div className="container" key={year}>
            <div className="row"><h3>{year}</h3></div>
            <div className="row">
              <ul>
                {grouped[year].map(a => (
                  <li key={a.url}>
                    <a href={a.url}>{a.title} {parseInt(year,10) < 2018 ? `(${a.kind})` : ''}</a>
                    {( (a.core || a.plugins?.length || a.components?.length || a.index_details_html) && parseInt(year,10) >= 2018) ? (
                      <>
                        <br/>
                        <small>
                          {a.index_details_html ? (
                            <span dangerouslySetInnerHTML={{__html: a.index_details_html}} />
                          ) : (
                            <ul>
                              {a.core ? <li>Affects Jenkins Core</li> : null}
                              {a.plugins && a.plugins.length > 0 ? (
                                <li>
                                  <span style={{ whiteSpace: 'nowrap' }}>Affects Plugins:</span>{' '}
                                  {a.plugins.map((p, idx) => (
                                    <a key={p.name} href={`https://plugins.jenkins.io/${p.name}`} style={{ whiteSpace: 'nowrap', padding: '2px' }}>
                                      {p.title || p.name}
                                      {idx < a.plugins.length - 1 ? ' ' : ''}
                                    </a>
                                  ))}
                                </li>
                              ) : null}
                              {a.components?.map((c, idx) => (
                                <li key={idx}>
                                  <span style={{ whiteSpace: 'nowrap' }}>Affects {c.title || c.name}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </small>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </SecurityLayout>
    </SecurityFrame>
  );
}
