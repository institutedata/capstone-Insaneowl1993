import React, { useState } from 'react';
import { Typography, Box, TextField, Pagination, Grid, Card, CardContent } from '@mui/material'; // Import MUI components
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const clients = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phoneNumber: '987-654-3210' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phoneNumber: '555-2368' },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', phoneNumber: '111-222-3333' },
  { id: 5, name: 'Emma Davis', email: 'emma@example.com', phoneNumber: '444-555-6666' },
  { id: 6, name: 'Michael Wilson', email: 'michael@example.com', phoneNumber: '777-888-9999' },
  { id: 7, name: 'Olivia Martinez', email: 'olivia@example.com', phoneNumber: '333-444-5555' },
  { id: 8, name: 'James Lee', email: 'james@example.com', phoneNumber: '222-333-4444' },
  { id: 9, name: 'Sophia Harris', email: 'sophia@example.com', phoneNumber: '999-888-7777' },
  { id: 10, name: 'Liam Garcia', email: 'liam@example.com', phoneNumber: '666-777-8888' },
  { id: 11, name: 'Ava Rodriguez', email: 'ava@example.com', phoneNumber: '444-555-6666' },
  { id: 12, name: 'Noah Martinez', email: 'noah@example.com', phoneNumber: '111-222-3333' },
  { id: 13, name: 'Isabella Brown', email: 'isabella@example.com', phoneNumber: '222-333-4444' },
  { id: 14, name: 'William Johnson', email: 'william@example.com', phoneNumber: '777-888-9999' },
];

const ClientList = ({ handleAddClient }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1); // State for pagination

  // Handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page number when search term changes
  };

  // Calculate number of clients per page
  const clientsPerPage = 12;

  // Filter clients based on search term
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phoneNumber.includes(searchTerm)
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  // Calculate start and end index of clients for the current page
  const startIndex = (page - 1) * clientsPerPage;
  const endIndex = Math.min(startIndex + clientsPerPage, filteredClients.length);

  // Slice clients array for the current page
  const clientsForPage = filteredClients.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ width: '98vw', overflow:'hidden' }}>
      <Typography variant="h2" sx={{ color: 'text.primary' }}>Clients</Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Search clients"
        value={searchTerm}
        onChange={handleSearchTermChange}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={2}>
        {clientsForPage.map((client) => (
          <Grid item xs={12} sm={6} md={4} key={client.id}>
            <Card variant="outlined" className="client-card">
              <CardContent>
                <Typography variant="h6">{client.name}</Typography>
                <Typography variant="body2">Email: {client.email}</Typography>
                <Typography variant="body2">Phone: {client.phoneNumber}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Link to="/client-form">Add Client</Link> {/* Link to the client form page */}
      </Box>
    </Box>
  );
};

export default ClientList;
