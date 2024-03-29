import React, { useState } from 'react';
import { Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import Login from '../auth/Login'; // Make sure this path is correct

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const splitScreenStyle = {
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    alignItems: 'stretch', // This ensures that both children stretch to fill the parent height
    height: '100vh',
    overflow: 'hidden',
    bgcolor: 'background.default',
  };

  const paneStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Full width for small screens
    padding: isSmallScreen ? 0 : theme.spacing(0),
    minHeight: isSmallScreen ? '10vh' : 'auto', // Minimum height for small screens to be half the viewport height
  };

  const leftPaneStyle = {
    ...paneStyle,
    backgroundColor: theme.palette.background.paper,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    bgcolor: 'background.paper',
    color: 'text.primary',
  };

  const rightPaneStyle = {
    ...paneStyle,
    backgroundColor: theme.palette.background.paper,
    height: 'auto', // Ensure the height is auto so it can grow to fit the content
  };

  const typographyVariant = isSmallScreen ? 'h5' : 'h2'; // Smaller variant for smaller screens

  if (!isLoggedIn) {
    return (
      <Box sx={splitScreenStyle}>
        <Box sx={leftPaneStyle}>
          <Typography variant={typographyVariant} component="h1" gutterBottom>
            Simplify Your Salon Management
          </Typography>
          <Typography variant={isSmallScreen ? 'body1' : 'subtitle1'}>
            Discover a seamless way to manage appointments, staff, and clients with our solution.
          </Typography>
        </Box>
        <Box sx={rightPaneStyle}>
          <Login onLoginSuccess={handleLoginSuccess} />
        </Box>
      </Box>
    );
  }

  // Main content after login
  return (
    <div>
      {/* Other content goes here after login */}
    </div>
  );
}

export default Home;
