import React from "react";
import { Box, Typography, SvgIcon, useTheme } from "@mui/material";
export default function Note({ children, sx = {}, ...props }) {
  const theme = useTheme();

  return (
    <Box
      role="note"
      aria-label="Note"
      className="app-note"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1.25,
        padding: "12px 16px",
        borderRadius: 1,
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        background:
          theme.palette.mode === "light"
            ? "var(--banner-bg, #f8f9fa)"
            : "var(--banner-bg, #2a2a2a)",
        color: theme.palette.text.primary,
        ...sx,
      }}
      {...props}
    >
      <SvgIcon
        sx={{
          width: 28,
          height: 28,
          flex: "0 0 auto",
          mt: "2px",
          color: theme.palette.primary.main,
        }}
        aria-hidden
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.75 15h-1.5v-6h1.5v6zM12 9.25a.88.88 0 110-1.75.88.88 0 010 1.75z" />
      </SvgIcon>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: 1.5,
          color: "inherit",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
