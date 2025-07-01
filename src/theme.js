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

export const theme = createTheme({
  palette: {
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
    divider: jenkinsColors.border,
    jenkins: jenkinsColors,
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
      color: jenkinsColors.text,
    },
    h2: {
      fontFamily: '"Georgia", serif',
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1rem',
      color: jenkinsColors.text,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      color: jenkinsColors.text,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: jenkinsColors.text,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.66,
      color: jenkinsColors.text,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.66,
      color: jenkinsColors.textSecondary,
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
          color: jenkinsColors.primaryBlue,
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
          border: `1px solid ${jenkinsColors.border}`,
          boxShadow: 'none',
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
