import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { lightTheme, darkTheme } from './theme';
import App from './App';
import WebComponentsLoader from './components/web-components-loader';

function ThemeWrapper() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () => prefersDarkMode ? darkTheme : lightTheme,
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <WebComponentsLoader>
        <App />
      </WebComponentsLoader>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeWrapper />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);