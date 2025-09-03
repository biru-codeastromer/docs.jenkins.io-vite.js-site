import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SecurityFrame from '../../components/security/SecurityFrame';
import SecurityLayout from '../../components/security/SecurityLayout';

export default function AdvisoryDetail() {
  const { date } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/data/security/advisory-${date}.json`).then(r => r.json()).then(setData);
  }, [date]);

  if (!data) return null;
  const allPlugins = (() => {
    const seen = new Map();
    for (const i of data.issues) {
      for (const p of i.plugins || []) {
        const k = p.name;
        if (!seen.has(k)) seen.set(k, { ...p });
        const item = seen.get(k);
        if (p.fixed) item.fixed = p.fixed;
      }
    }
    return Array.from(seen.values()).sort((a, b) =>
      (a.title || a.name).toLowerCase().localeCompare((b.title || b.name).toLowerCase())
    );
  })();

  const components = (data.issues || []).flatMap(i => i.components || []);
  const fixedPlugins = allPlugins.filter(p => p.fixed);
  const unfixedPlugins = allPlugins.filter(p => !p.fixed);
  const fixedComponents = components.filter(c => c.fixed);

  const described = (data.issues || []).filter(i => i.title && (i.description_html || i.description_adoc));

  return (
    <SecurityFrame title={data.title}>
      <SecurityLayout title={data.title} showTitle={true}>
        <p>This advisory announces vulnerabilities in the following Jenkins deliverables:</p>
        <p>
          <ul>
            {data.core ? <li>Jenkins (core)</li> : null}
            {allPlugins.map(p => (
              <li key={p.name}>
                {p.title ? <a href={`https://plugins.jenkins.io/${p.name}`}>{p.title} Plugin</a> : <>{p.name} Plugin</>}
              </li>
            ))}
            {components.map((c, idx) => <li key={idx}>{c.title || c.name}</li>)}
          </ul>
        </p>

        {described.length > 0 ? (
          <>
            <h2>Descriptions</h2>
            {described.map(issue => {
              const firstPlugin = issue.plugins?.[0]?.title || issue.plugins?.[0]?.name;
              const heading = issue.title && firstPlugin ? issue.title.replace(/PLUGIN_NAME/g, `${firstPlugin} Plugin`) : issue.title;
              return (
                <div key={issue.id}>
                  <h3 id={issue.id}>{heading}</h3>
                  <strong>{issue.id}{issue.cve ? <> / {issue.cve}</> : null}</strong>
                  {issue.cvss ? (
                    <>
                      <br/><strong>Severity (CVSS): </strong>
                      {issue.cvss?.vector?.startsWith('CVSS:3.0') ?
                        <a href={`https://www.first.org/cvss/calculator/3.0#${issue.cvss.vector}`}>{issue.cvss.severity}</a> :
                       issue.cvss?.vector?.startsWith('CVSS:3.1') ?
                        <a href={`https://www.first.org/cvss/calculator/3.1#${issue.cvss.vector}`}>{issue.cvss.severity}</a> :
                        issue.cvss?.severity || null}
                    </>
                  ) : null}
                  {issue.plugins?.length ? (
                    <>
                      <br/><strong>{issue.plugins.length > 1 ? 'Affected plugins:' : 'Affected plugin:'}</strong>{' '}
                      {issue.plugins.map((p, idx) => (
                        <nobr key={p.name}>
                          <a href={`https://plugins.jenkins.io/${p.name}`}><code>{p.name}</code></a>{idx < issue.plugins.length - 1 ? ',' : ''}
                        </nobr>
                      ))}
                    </>
                  ) : null}
                  <br/>
                  <strong>Description:</strong>
                  <div dangerouslySetInnerHTML={{ __html: issue.description_html || '' }} />
                </div>
              );
            })}
          </>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: data.content_html || '' }} />
        )}

        <h2>Severity</h2>
        <ul>
          {(data.issues || []).slice().sort((a,b)=>
            parseInt(a.id.split('-')[1],10) - parseInt(b.id.split('-')[1],10)
          ).map(issue => (
            <li key={issue.id}>
              {issue.id}: {issue.cvss
                ? (issue.cvss.vector?.startsWith('CVSS:3.0')
                    ? <a href={`https://www.first.org/cvss/calculator/3.0#${issue.cvss.vector}`}>{issue.cvss.severity}</a>
                    : issue.cvss.vector?.startsWith('CVSS:3.1')
                      ? <a href={`https://www.first.org/cvss/calculator/3.1#${issue.cvss.vector}`}>{issue.cvss.severity}</a>
                      : issue.cvss.severity)
                : 'Unspecified'}
            </li>
          ))}
        </ul>

        <h2>Affected Versions</h2>
        <ul>
          {data.core?.weekly?.previous ? <li><strong>Jenkins weekly</strong> up to and including {data.core.weekly.previous}</li> : null}
          {data.core?.lts?.previous ? <li><strong>Jenkins LTS</strong> up to and including {data.core.lts.previous}</li> : null}

          {allPlugins.map(p => (
            <li key={p.name}>
              <strong>{p.title || p.name} Plugin</strong>{' '}
              {p.previous ? <>up to and including {p.previous}</> : '(all versions)'}
            </li>
          ))}

          {components.map((c, idx) => (
            <li key={idx}><strong>{c.title || c.name}</strong> {c.previous ? <>up to and including {c.previous}</> : '(all versions)'}</li>
          ))}
        </ul>

        <h2>Fix</h2>
        {(fixedPlugins.length || fixedComponents.length || data.core?.weekly?.fixed || data.core?.lts?.fixed) ? (
          <>
            <ul>
              {data.core?.weekly?.fixed ? <li><strong>Jenkins weekly</strong> should be updated to version {data.core.weekly.fixed}</li> : null}
              {data.core?.lts?.fixed ? <li><strong>Jenkins LTS</strong> should be updated to version {data.core.lts.fixed}</li> : null}
              {fixedPlugins.map(p => <li key={p.name}><strong>{p.title || p.name} Plugin</strong> should be updated to version {p.fixed}</li>)}
              {fixedComponents.map((c, idx) => <li key={idx}><strong>{c.title || c.name}</strong> should be updated to version {c.fixed}</li>)}
            </ul>
            <p>These versions include fixes to the vulnerabilities described above. All prior versions are considered to be affected by these vulnerabilities unless otherwise indicated.</p>
          </>
        ) : null}

        {unfixedPlugins.length > 0 ? (
          <>
            <p>As of publication of this advisory, no fixes are available for the following plugins:</p>
            <ul>{unfixedPlugins.map(p => <li key={p.name}>{p.title || p.name} Plugin</li>)}</ul>
            <p><a href={'/security/plugins/#unresolved'}>Learn why we announce these issues.</a></p>
          </>
        ) : null}

        {(() => {
          const credits = {};
          for (const i of data.issues) {
            if (!i.reporter) continue;
            credits[i.reporter] ||= [];
            if (!credits[i.reporter].includes(i.id)) credits[i.reporter].push(i.id);
          }
          const names = Object.keys(credits).sort();
          if (!names.length) return null;
          return (
            <>
              <h2>Credit</h2>
              <p>
                The Jenkins project would like to thank the reporters for discovering and <a href="/security/#reporting-vulnerabilities">reporting</a> these vulnerabilities:
              </p>
              <ul>
                {names.map(n => <li key={n}><strong>{n}</strong> for {credits[n].sort((a,b)=>parseInt(a.split('-')[1]) - parseInt(b.split('-')[1])).join(', ')}</li>)}
              </ul>
            </>
          );
        })()}

      </SecurityLayout>
    </SecurityFrame>
  );
}
