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
        try {
          window.loaddata();
        } catch { /*  */ }
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

    return () => {};
  }, [releasesReady]);
}

export default function ChangelogStablePage() {
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

  const recent = useMemo(() => {
    if (!Array.isArray(releases)) return [];
    return releases.slice(0, 25);
  }, [releases]);

  useRateJs(recent.length > 0);

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
        <title>LTS Changelog</title>
        <meta name="description" content="Changelog for Jenkins LTS releases" />
      </Helmet>

      <div className="app-app-bar">
        <div className="app-app-bar__content">
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, fontSize: "2rem", mb: "0.5rem" }}
          >
            LTS Changelog
          </Typography>
        </div>
        <div className="app-app-bar__controls app-controls">
          <a className="app-upgrade-btn" href="/doc/upgrade-guide">
            <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false">
              <path d="M176 249l80-80 80 80M256 181v150"/>
              <path d="M448 256c0 106-86 192-192 192S64 362 64 256 150 64 256 64s192 86 192 192z"/>
            </svg>
            Upgrade Guide
          </a>

          <a className="app-rss" href="/changelog-stable/rss.xml" aria-label="RSS">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="6" cy="18" r="2" fill="currentColor" stroke="none"></circle>
              <path d="M6 11a7 7 0 0 1 7 7"></path>
              <path d="M6 6a12 12 0 0 1 12 12"></path>
            </svg>
          </a>
        </div>
      </div>

      <div id="head" style={{ display: "none" }} />

      <div className="ratings">
        {recent.map((release, idx) => (
          <div key={`${release.version}-${idx}`}>
            <ReleaseHeader release={release} entry={false} linkToWeekly={false} />

            {release.changes && release.lts_changes && release.lts_baseline && (
              <div className="app-releases__notable-changes" style={{ marginTop: 15 }}>
                {`Changes since ${release.lts_baseline}`}
              </div>
            )}

            {release.changes && (
              <div className="app-releases__list__items">
                <ChangelogChanges changes={release.changes} />
              </div>
            )}

            {release.changes && release.lts_changes && (
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
          </div>
        ))}
      </div>

      <div className="app-banner" style={{ marginTop: "2rem" }}>
        The changelog of historical releases can be found{" "}
        <a href="/changelog-stable-old/">in the LTS changelog archive.</a>
      </div>
    </Box>
  );
}
