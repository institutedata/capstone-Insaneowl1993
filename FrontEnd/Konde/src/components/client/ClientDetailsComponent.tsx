import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Card, CardContent, List, ListItem } from '@mui/material';

// This is a mock function to simulate fetching client details
const fetchClientDetails = (clientId) => {
  // Replace this with actual API call
  return Promise.resolve({
    id: clientId,
    name: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '123-456-7890',
    history: [
      { date: '2024-03-29', event: 'Purchased Product XYZ' },
      { date: '2024-03-15', event: 'Contacted Support' },
      { date: '2024-02-10', event: 'Updated Profile Information' },
      // Add more historical events...
    ],
  });
};

const ClientDetailsComponent = () => {
  const { clientId } = useParams(); // Get client ID from URL
  const [client, setClient] = useState(null);

  useEffect(() => {
    fetchClientDetails(clientId).then(setClient);
  }, [clientId]);

  if (!client) {
    return <div>Loading...</div>; // Show a loading state or a spinner
  }

  return (
    <Box sx={{ margin: '20px' }}>
      <Typography variant="h4">Client Details</Typography>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5">{client.name}</Typography>
          <Typography variant="body1">Email: {client.email}</Typography>
          <Typography variant="body1">Phone: {client.phoneNumber}</Typography>
        </CardContent>
      </Card>

      <Typography variant="h5">Client History</Typography>
      <List>
        {client.history.map((item, index) => (
          <ListItem key={index}>
            <Typography variant="body1">{item.date} - {item.event}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ClientDetailsComponent;
