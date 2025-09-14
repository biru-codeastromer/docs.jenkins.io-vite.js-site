import React, { Fragment, useMemo } from "react";

export default function ChangelogChanges({ changes }) {
  const groups = useMemo(() => {
    const tagOrder = ["security", "majorrfe", "rfe", "majorbug", "bug"];
    const tags = {
      security: "Security",
      rfe: "Enhancement",
      majorrfe: "Major enhancement",
      bug: "Bug fix",
      majorbug: "Major bug fix",
    };

    const byType = {};
    (changes || []).forEach((c) => {
      const t = String(c.type || "").replace(/\s+/g, "");
      if (!byType[t]) byType[t] = [];
      byType[t].push(c);
    });

    const ordered = [];
    tagOrder.forEach((key) => {
      if (byType[key]) ordered.push({ key, name: tags[key], items: byType[key] });
    });

    Object.keys(byType)
      .filter((k) => !tagOrder.includes(k))
      .forEach((k) => {
        ordered.push({ key: k, name: k, items: byType[k] });
      });

    return ordered;
  }, [changes]);

  if (!changes || changes.length === 0) {
    return (
      <em>No notable changes in this release.</em>
    );
  }

  return (
    <>
      {groups.map((g) => (
        <Fragment key={g.key}>
          <div className={`app-releases__tag app-releases__tag--${g.key}`}>
            {g.name}
          </div>
          <ul className={`app-releases__list app-releases__list--${g.key}`}>
            {g.items.map((change, idx) => (
              <li key={`${g.key}-${idx}`}>
                <span dangerouslySetInnerHTML={{ __html: change.message }} />

                <span className="app-releases__references">
                  {Array.isArray(change.references) && change.references.length > 0 ? (
                    change.references.map((ref, i) => {
                      const pieces = [];
                      if (i !== 0) pieces.push(", ");
                      if (ref.issue) {
                        pieces.push(
                          <a
                            key={`${idx}-i-${i}`}
                            href={`https://issues.jenkins.io/browse/JENKINS-${ref.issue}`}
                          >
                            {`JENKINS-${ref.issue}`}
                          </a>
                        );
                      } else if (ref.pull) {
                        pieces.push(
                          <a
                            key={`${idx}-p-${i}`}
                            href={`https://github.com/jenkinsci/jenkins/pull/${ref.pull}`}
                          >
                            {`pull ${ref.pull}`}
                          </a>
                        );
                      } else if (ref.url) {
                        pieces.push(
                          <a key={`${idx}-u-${i}`} href={ref.url}>
                            {ref.title || ref.url}
                          </a>
                        );
                      }
                      return pieces;
                    })
                  ) : change.issue ? (
                    <a
                      href={`https://issues.jenkins.io/browse/JENKINS-${change.issue}`}
                    >
                      {`JENKINS-${change.issue}`}
                    </a>
                  ) : change.pull ? (
                    <a
                      href={`https://github.com/jenkinsci/jenkins/pull/${change.pull}`}
                    >
                      {`pull ${change.pull}`}
                    </a>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </>
  );
}
