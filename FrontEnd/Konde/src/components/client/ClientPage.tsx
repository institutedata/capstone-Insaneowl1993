// ClientPage.jsx
import React, { useState } from 'react';
import { Snackbar, Box, useTheme, useMediaQuery, Grid } from '@mui/material';
import ClientForm from './ClientForm';
import ClientList from './ClientList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecentlyAddedClients from './RecentlyAddedClients';

const ClientPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [clients, setClients] = useState([]);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleAddClient = (newClient) => {
    setClients([...clients, newClient]);
    setNotificationOpen(true);
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', height: '100vh', overflow: 'hidden', bgcolor: 'background.default' }}>
      <Box sx={{ flex: 1, overflowY: 'auto', p: theme.spacing(2) }}>
      <RecentlyAddedClients clients={recentlyAddedClients} />
        {/* Placeholder for now */}
      </Box>
      <Box sx={{ flex: 2, overflowY: 'auto', p: theme.spacing(2) }}>
        {/* Client List Panel */}
        <ClientList clients={clients} />
      </Box>
    </Box>
  );
}

export default ClientPage;
