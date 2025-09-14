import React, { useEffect, useMemo, useState } from "react";
import { Box, CircularProgress, useTheme, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { loadYamlData } from "../utils/loadData";
import ReleaseHeader from "../components/ReleaseHeader";
import ChangelogChanges from "../components/ChangelogChanges";

function useRateJs(releasesReady) {
  useEffect(() => {
    if (!releasesReady) return;

    let headDiv = document.getElementById("head");
    if (!headDiv) {
      headDiv = document.createElement("div");
      headDiv.id = "head";
      document.body.appendChild(headDiv);
    }

    const already = document.querySelector('script[data-jio-ratejs="1"]');
    const load = () => {
      if (typeof window.loaddata === "function") {
        try { window.loaddata(); } catch { /*  */ }
      }
    };

    if (already) {
      load();
      return;
    }

    const s = document.createElement("script");
    s.src = "/files/rate.js";
    s.async = true;
    s.dataset.jioRatejs = "1";
    s.onload = load;
    document.body.appendChild(s);
  }, [releasesReady]);
}

export default function ChangelogStableOldPage() {
  const theme = useTheme();
  const [releases, setReleases] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await loadYamlData("changelogs/lts.yml");
        const list = Array.isArray(data) ? data.slice() : [];
        list.reverse();
        setReleases(list);
      } catch (e) {
        console.error("Failed to load LTS changelog:", e);
        setReleases([]);
      }
    })();
  }, []);

  const archived = useMemo(() => {
    if (!Array.isArray(releases)) return [];
    return releases.slice(25);
  }, [releases]);

  useRateJs(archived.length > 0);

  if (!releases) {
    return (
      <Box
        sx={{
          maxWidth: "1060px",
          margin: "0 auto",
          padding: { xs: 2, sm: 4 },
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "1060px",
        margin: "0 auto",
        padding: { xs: 2, sm: 4 },
        fontFamily:
          '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        lineHeight: 1.65,
        color: theme.palette.text.primary,
      }}
    >
      <Helmet>
        <title>Archived LTS Changelog</title>
        <meta name="description" content="Archived changelog for Jenkins LTS releases" />
      </Helmet>

      <div className="app-app-bar">
        <div className="app-app-bar__content">
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, fontSize: "2rem", mb: "0.5rem" }}
          >
            Archived LTS Changelog
          </Typography>
        </div>
        <div className="app-app-bar__controls">
          <a className="app-button app-button--primary app-mobile-hide" href="/changelog-stable">
            <span className="app-button__icon" aria-hidden>⬅️</span>
            <span className="app-button__text">Back to Recent LTS Changelog</span>
          </a>
        </div>
      </div>

      <div id="head" style={{ display: "none" }} />

      <div className="ratings">
        {archived.map((release, idx) => (
          <div key={`${release.version}-${idx}`}>
            <ReleaseHeader release={release} entry={false} linkToWeekly={false} />

            {release.changes && (
              <>
                {String(release.version).endsWith(".1") && release.lts_baseline && (
                  <div className="app-releases__notable-changes" style={{ marginTop: 15 }}>
                    {`Changes since ${release.lts_baseline}`}
                  </div>
                )}
                <div className="app-releases__list__items">
                  <ChangelogChanges changes={release.changes} />
                </div>
              </>
            )}

            {release.lts_changes && (
              <>
                {release.lts_predecessor && (
                  <div className="app-releases__notable-changes">
                    {`Notable changes since ${release.lts_predecessor}`}
                  </div>
                )}
                <div className="app-releases__list__items">
                  <ChangelogChanges changes={release.lts_changes} />
                </div>
              </>
            )}

            {!release.changes && !release.lts_changes && (
              <p>No notable changes for this release.</p>
            )}
          </div>
        ))}
      </div>

      <div className="app-banner" style={{ marginTop: "2rem" }}>
        This is the changelog archive. The changelog for recent releases can be found{" "}
        <a href="/changelog-stable/">in the main LTS changelog page.</a>
      </div>
    </Box>
  );
}
