// RecentlyAddedClients.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const RecentlyAddedClients = ({ clients }) => (
  <Box>
    <Typography variant="h6">Recently Added Clients</Typography>
    {clients.map((client, index) => (
      <Box key={index} sx={{ margin: '10px 0' }}>
        <Typography>{client.name}</Typography>
        {/* Add more client details as needed */}
      </Box>
    ))}
  </Box>
);

export default RecentlyAddedClients;