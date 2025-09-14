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
    const run = () => {
      if (typeof window.loaddata === "function") {
        try { window.loaddata(); } catch {}
      }
    };

    if (already) {
      run();
      return;
    }

    const s = document.createElement("script");
    s.src = "/files/rate.js";
    s.async = true;
    s.dataset.jioRatejs = "1";
    s.onload = run;
    document.body.appendChild(s);
  }, [releasesReady]);
}

export default function ChangelogWeeklyOldPage() {
  const theme = useTheme();
  const [releases, setReleases] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await loadYamlData("changelogs/weekly.yml");
        const list = Array.isArray(data) ? data.slice() : [];
        list.reverse();
        setReleases(list);
      } catch (e) {
        console.error("Failed to load weekly changelog:", e);
        setReleases([]);
      }
    })();
  }, []);

  const archived = useMemo(() => {
    if (!Array.isArray(releases)) return [];
    return releases.slice(30);
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
        <title>Changelog Archive</title>
        <meta name="description" content="Archived changelog for Jenkins weekly releases" />
      </Helmet>

      <div className="app-app-bar" style={{ marginBottom: "2rem" }}>
        <div className="app-app-bar__content">
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, fontSize: "2rem", mb: "0.5rem" }}
          >
            Changelog Archive
          </Typography>
        </div>
      </div>

      <div className="app-banner" style={{ margin: "0 0 2rem 0" }}>
        This is the changelog archive. Recent changelogs can be found{" "}
        <a href="/changelog/">here.</a>
      </div>

      <div id="head" style={{ display: "none" }} />

      <div className="ratings">
        {archived.map((release, idx) => (
          <div key={`${release.version}-${idx}`}>
            <ReleaseHeader release={release} entry={false} linkToWeekly={true} />
            <div className="app-releases__list__items">
              <ChangelogChanges changes={release.changes || []} />
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}
