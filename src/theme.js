import { createTheme } from "@mui/material/styles";

const jenkinsColors = {
  primaryBlue: "#1a73e8",
  primaryRed: "#d33833",
  background: "#f9f9f9",
  text: "#212529",
  textSecondary: "#495057",
  lightGray: "#f8f9fa",
  mediumGray: "#e9ecef",
  darkGray: "#6c757d",
  white: "#ffffff",
  black: "#212529",
  border: "#dee2e6",
  successGreen: "#1aab40",
  warningOrange: "#efc663",
  futurePurple: "#9677df",
  futureBlue: "#2c97de",
  errorRed: "#e16070",
  awsOrange: '#FF9900',
  azureBlue: '#0b61ca',
  googleGreen: '#34a853',
  civoBlue: '#239DFF',
  oracleRed: '#C74634',
  bitnamiBlue: '#00577B',
  added: '#4CAF50',
  fixed: '#2196F3',
  changed: '#FFC107',
  deprecated: '#9E9E9E',
  removed: '#F44336',
  security: '#E91E63',
  rating: {
    positive: "#4CAF50",
    neutral: "#FFC107",
    negative: "#F44336"
  }
};

const jenkinsDarkColors = {
  ...jenkinsColors,
  background: "#1a1a1a",
  text: "#f8f9fa",
  textSecondary: "#e9ecef",
  lightGray: "#2a2a2a",
  mediumGray: "#3a3a3a",
  darkGray: "#adb5bd",
  border: "#495057",
  primaryBlue: "#5d9eff",
  primaryRed: "#ff6b67",
  downloadBoxBg: "#2a2a2a",
  downloadBoxBorder: "#3a3a3a",
  downloadBoxHover: "#3a3a3a",
  tooltipBg: "#333333",
  chipBg: "#333333",
  tableHeaderBg: "#2a2a2a",
  tableBorder: "#3a3a3a",
  filterBg: "#2a2a2a",
  filterBorder: "#3a3a3a"
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: jenkinsColors.primaryBlue,
            contrastText: jenkinsColors.white,
          },
          secondary: {
            main: jenkinsColors.primaryRed,
            contrastText: jenkinsColors.white,
          },
          background: {
            default: jenkinsColors.background,
            paper: jenkinsColors.white,
          },
          text: {
            primary: jenkinsColors.text,
            secondary: jenkinsColors.textSecondary,
          },
          divider: jenkinsColors.border,
          jenkins: jenkinsColors,
        }
      : {
          primary: {
            main: jenkinsDarkColors.primaryBlue,
            contrastText: jenkinsDarkColors.white,
          },
          secondary: {
            main: jenkinsDarkColors.primaryRed,
            contrastText: jenkinsDarkColors.white,
          },
          background: {
            default: jenkinsDarkColors.background,
            paper: jenkinsDarkColors.lightGray,
          },
          text: {
            primary: jenkinsDarkColors.text,
            secondary: jenkinsDarkColors.textSecondary,
          },
          divider: jenkinsDarkColors.border,
          jenkins: jenkinsDarkColors,
        }),
    warning: {
      main: jenkinsColors.warningOrange,
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#fff",
    },
    error: {
      main: jenkinsColors.errorRed,
    },
    success: {
      main: jenkinsColors.successGreen,
    },
  },
  typography: {
    fontFamily: [
      'system-ui',
      '"Segoe UI"',
      'roboto',
      '"Noto Sans"',
      'oxygen',
      'ubuntu',
      'cantarell',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontFamily: '"Georgia", serif',
      fontWeight: 'bold',
      fontSize: '4rem',
      marginTop: '-0.2rem',
    },
    h2: {
      fontFamily: '"Georgia", serif',
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.66,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.66,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '0.66rem',
          padding: '0.5rem 1.1rem',
          fontSize: '0.85rem',
          lineHeight: 1.66,
          '&:hover': {
            textDecoration: 'none'
          }
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          textDecorationThickness: '2px',
          textUnderlineOffset: '2px',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: `1px solid ${mode === 'light' ? jenkinsColors.border : jenkinsDarkColors.border}`,
          boxShadow: 'none',
          backgroundColor: mode === 'light' ? jenkinsColors.white : jenkinsDarkColors.downloadBoxBg,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : jenkinsDarkColors.chipBg,
          color: mode === 'light' ? jenkinsColors.text : jenkinsDarkColors.text,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: mode === 'light' ? jenkinsColors.text : jenkinsDarkColors.tooltipBg,
          color: mode === 'light' ? jenkinsColors.white : jenkinsDarkColors.text,
          fontSize: '0.875rem',
        },
        arrow: {
          color: mode === 'light' ? jenkinsColors.text : jenkinsDarkColors.tooltipBg,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? undefined : jenkinsDarkColors.downloadBoxBg,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  },
});

export const lightTheme = createTheme(getDesignTokens('light'));
export const darkTheme = createTheme(getDesignTokens('dark'));
