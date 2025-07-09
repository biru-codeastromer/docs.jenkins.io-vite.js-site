import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './header';
import Footer from './footer';

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
