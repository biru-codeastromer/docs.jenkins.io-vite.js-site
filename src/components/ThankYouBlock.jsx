import React, { useEffect, useState } from "react";
import { Box, Typography, Link, useTheme, CircularProgress, Alert } from "@mui/material";
import { keyframes } from "@mui/system";
import Papa from "papaparse";
import { loadYamlData } from "../utils/loadData";

const ROTATE_INTERVAL = 5000;
const STALE_DAYS = 45;

const FADE_IN = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const CSV_URL =
  "https://raw.githubusercontent.com/jenkins-infra/jenkins-contribution-stats/main/data/honored_contributor.csv";

function monthIsStale(monthStr) {
  const d = new Date(`${monthStr}-01T00:00:00Z`);
  const now = new Date();
  const diffDays = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays > STALE_DAYS;
}

function normalizeRow(row) {
  const clean = (v) =>
    typeof v === "string" ? v.trim().replaceAll('"', "") : v;

  const obj = {};
  for (const k of Object.keys(row)) obj[k.trim().replaceAll('"', "")] = clean(row[k]);
  return obj;
}

async function fetchCsvFallback() {
  const res = await fetch(CSV_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed CSV fetch: ${res.status}`);
  const text = await res.text();

  const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
  const rows = (parsed.data || []).map(normalizeRow);

  return rows;
}

const ThankYouBlock = () => {
  const theme = useTheme();
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        let data = [];
        try {
          const yaml = await loadYamlData("thank_you.yml");
          if (Array.isArray(yaml)) data = yaml;
        } catch {
        }
        let useFallback = false;
        if (!Array.isArray(data) || data.length < 2) {
          useFallback = true;
        } else {
          const yamlMonths = data.map((r) => r.MONTH).filter(Boolean);
          const latestYamlMonth = yamlMonths.sort().reverse()[0];
          if (!latestYamlMonth || monthIsStale(latestYamlMonth)) {
            useFallback = true;
          }
        }

        if (useFallback) {
          data = await fetchCsvFallback();
        }

        if (!Array.isArray(data) || data.length === 0) {
          if (mounted) setContributors([]);
          return;
        }
        const months = data.map((r) => r.MONTH).filter(Boolean);
        const latestMonth = months.sort().reverse()[0];
        if (!latestMonth) {
          if (mounted) setContributors([]);
          return;
        }
        const latestContributors = data.filter((r) => r.MONTH === latestMonth);
        const shuffled = [...latestContributors].sort(() => Math.random() - 0.5);

        if (mounted) {
          setContributors(shuffled);
          setCurrentIndex(0);
        }
      } catch (e) {
        console.error("ThankYouBlock load error:", e);
        if (mounted) setError(true);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);
  useEffect(() => {
    if (contributors.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % contributors.length);
      }, ROTATE_INTERVAL);
      return () => clearInterval(timer);
    }
  }, [contributors]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !contributors.length) {
    return null;
  }

  const c = contributors[currentIndex];

  return (
    <Box
      className="thank-you-block"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 8,
        px: 2,
      }}
    >
      <Box
        className="thank-you-box"
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(218, 209, 198, 0.3)"
              : theme.palette.jenkins.downloadBoxBg,
          borderRadius: "20px",
          p: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
        }}
      >
        <Box
          key={`${c.GH_HANDLE}-${currentIndex}`}
          className="contributor-data"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            textAlign: { xs: "center", sm: "left" },
            animation: `${FADE_IN} 260ms ease`,
          }}
        >
          <Box
            className="image-div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: { sm: 2 },
            }}
          >
            <img
              src={c.GH_HANDLE_AVATAR}
              alt={`${c.GH_HANDLE} avatar`}
              loading="lazy"
            />
          </Box>

          <Box className="desc-div">
            <Typography variant="body1" sx={{ m: 0 }}>
              Thank you{" "}
              <Link href={c.GH_HANDLE_URL} target="_blank" rel="noopener">
                {c.GH_HANDLE}
              </Link>
            </Typography>

            <Typography variant="body1" sx={{ m: 0 }}>
              for making {c.NBR_PR} pull request{Number(c.NBR_PR) > 1 ? "s" : ""}
            </Typography>

            <Typography variant="body1" sx={{ m: 0 }}>
              to the{" "}
              {String(c.REPOSITORIES || "")
                .split(" ")
                .filter(Boolean)
                .map((repo, i, arr) => {
                  const repoName = repo.split("/").pop();
                  return (
                    <React.Fragment key={`${repo}-${i}`}>
                      <Link
                        href={`https://github.com/${repo}`}
                        target="_blank"
                        rel="noopener"
                      >
                        {repoName}
                      </Link>
                      {i !== arr.length - 1 && ", "}
                    </React.Fragment>
                  );
                })}{" "}
              repo in{" "}
              {new Date(`${c.MONTH}-01`).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
              !
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThankYouBlock;
