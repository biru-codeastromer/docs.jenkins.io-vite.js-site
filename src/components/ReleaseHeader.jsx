import React from "react";
export default function ReleaseHeader({ release, entry = false, linkToWeekly = true }) {
  const { version, date, banner } = release || {};
  const dateStr = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const listLink = linkToWeekly
    ? `/changelog/${version}/`
    : `/changelog-stable/${version}/`;

  return (
    <>
      <div className="app-releases__list__header">
        <div>
          {entry ? (
            <h1
              id={`v${version}`}
              className="app-releases__item__title"
              data-type="release-header"
              data-version={version}
            >
              {`Changelog for ${version}`}
            </h1>
          ) : (
            <h3
              id={`v${version}`}
              className="app-releases__item__title"
              data-type="release-header"
              data-version={version}
            >
              <a href={listLink}>{version}</a>
            </h3>
          )}

          {dateStr && (
            <div className="app-releases__item__date">{dateStr}</div>
          )}
        </div>
      </div>

      {banner ? <div className="app-banner">{banner}</div> : null}
    </>
  );
}
