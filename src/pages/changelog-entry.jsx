import React, { useEffect, useMemo, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useParams, Link as RouterLink } from "react-router-dom";
import { loadYamlData } from "../utils/loadData";
import ReleaseHeader from "../components/ReleaseHeader";
import ChangelogChanges from "../components/ChangelogChanges";

function useRateJs(ready) {
  useEffect(() => {
    if (!ready) return;

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

    if (already) { run(); return; }

    const s = document.createElement("script");
    s.src = "/files/rate.js";
    s.async = true;
    s.dataset.jioRatejs = "1";
    s.onload = run;
    document.body.appendChild(s);
  }, [ready]);
}

export default function ChangelogEntryPage() {
  const { version } = useParams();
  const [releases, setReleases] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await loadYamlData("changelogs/weekly.yml");
        const list = Array.isArray(data) ? data.slice() : [];
        setReleases(list);
      } catch (e) {
        console.error("Failed to load weekly changelog:", e);
        setReleases([]);
      }
    })();
  }, []);

  const release = useMemo(() => {
    if (!Array.isArray(releases)) return null;
    return releases.find((r) => String(r.version) === String(version)) || null;
  }, [releases, version]);

  useRateJs(Boolean(release));

  if (!releases) {
    return (
      <Box className="app-container">
        <CircularProgress />
      </Box>
    );
  }

  if (!release) {
    return (
      <Box className="app-container">
        <h1>Changelog</h1>
        <p>Release <code>{version}</code> not found.</p>
        <p><RouterLink to="/changelog">Back to changelog</RouterLink></p>
      </Box>
    );
  }

  return (
    <Box className="app-container app-container--compact">
      <Helmet>
        <title>{`Changelog for ${release.version}`}</title>
      </Helmet>

      <div className="app-app-bar">
        <div className="app-app-bar__content">
          <h1>Changelog</h1>
        </div>
        <div className="app-app-bar__controls">
          <a className="app-button app-button--tertiary app-mobile-hide" href="/changelog" aria-label="Back to changelog">
            Back to changelog
          </a>
        </div>
      </div>

      <div id="head" style={{ display: "none" }} />

      <ReleaseHeader release={release} entry={true} />

      <div className="app-releases__list__items">
        <ChangelogChanges changes={release.changes || []} />
      </div>
    </Box>
  );
}
