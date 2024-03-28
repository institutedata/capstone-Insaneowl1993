// ClientPage.jsx
import React, { useState } from 'react';
import { Snackbar } from '@mui/material';
import ClientForm from './ClientForm';
import ClientList from './ClientList';

const ClientPage = () => {
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
    <>
      <ClientForm handleAddClient={handleAddClient} />
      <ClientList clients={clients} />
      <Snackbar
        open={notificationOpen}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        message="Client added successfully!"
      />
    </>
  );
};

export default ClientPage;
