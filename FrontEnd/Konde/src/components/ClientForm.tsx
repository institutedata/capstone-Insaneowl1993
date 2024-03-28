// ClientForm.jsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ClientForm = ({ handleAddClient }) => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newClient = { id: Date.now(), name: clientName, email: email, phoneNumber: phoneNumber };
    handleAddClient(newClient);
    setClientName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add New Client
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Client Name"
              variant="outlined"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
              Add Client
            </Button>
            <Button component={Link} to="/clients" variant="outlined">
              Return to Client List
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ClientForm;
