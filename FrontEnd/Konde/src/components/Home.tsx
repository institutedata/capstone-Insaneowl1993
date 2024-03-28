import React from 'react';
import { Typography, Box } from '@mui/material'; // Import MUI components
import ClientList from './ClientList';

function Home() {
  return (
    <Box className="home-container">
      <Typography variant="h3" sx={{ color: 'text.primary' }}>Home</Typography>
      <Box className="client-section">
        <ClientList hideAddButton={true} hidePagination={true} />
      </Box>
    </Box>
  );
}

export default Home;