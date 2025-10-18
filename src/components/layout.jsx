import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './header';
import Footer from './footer';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: isHome ? 0 : '1rem',
            width: '100%',
            overflowX: 'hidden',
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
