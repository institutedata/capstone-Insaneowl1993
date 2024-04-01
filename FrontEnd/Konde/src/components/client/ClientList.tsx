import React, { useState } from 'react';
import {
  Typography, Box, TextField, Pagination, Grid, Card, CardContent,
  InputAdornment, List, ListItem, Button, useMediaQuery, useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ClientList = () => {
  const [clients, setClients] = useState([
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
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleAddClient = (event) => {
    event.preventDefault();
    const newClient = {
      id: clients.length > 0 ? Math.max(...clients.map(client => client.id)) + 1 : 1,
      name: clientName,
      email: clientEmail,
      phoneNumber: clientPhone
    };
    setClients(clients.concat(newClient));
    setClientName('');
    setClientEmail('');
    setClientPhone('');
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phoneNumber.includes(searchTerm)
  );
  const clientsPerPage = 12;
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);
  const startIndex = (page - 1) * clientsPerPage;
  const endIndex = startIndex + clientsPerPage;
  const clientsToShow = filteredClients.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: isSmallScreen ? 'column' : 'row',
      width: '100%',
      bgcolor: 'background.default',
      color: 'text.primary',
      pb: theme.spacing(2)
    }}>
      {/* Left Panel */}
      <Box sx={{
        width: isSmallScreen ? '100%' : '25%',
        borderRight: isSmallScreen ? 'none' : `1px solid ${theme.palette.divider}`,
        p: theme.spacing(2),
        overflowY: 'auto',
        height: isSmallScreen ? 'auto' : '100vh',
        bgcolor: isDarkMode ? theme.palette.background.default : theme.palette.background.paper,
      }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search clients"
          value={searchTerm}
          onChange={handleSearchTermChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
        
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'text.primary' }}>
          Recently Added
        </Typography>
        <List sx={{ mb: 2, overflow: 'auto', maxHeight: 200 }}>
          {clients.slice(-5).map((client) => (
            <ListItem key={client.id} sx={{ py: 1, px: 2, '&:hover': { bgcolor: 'action.hover' } }}>
              <Typography variant="body1">{client.name}</Typography>
            </ListItem>
          ))}
        </List>

        <Box component="form" onSubmit={handleAddClient} sx={{ mt: 2, width: '93%',}}>
          <Typography variant="h6" sx={{ mb: 2 }}>Add New Client</Typography>
          <TextField
            label="Name"
            variant="outlined"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Client
          </Button>
        </Box>
      </Box>

      {/* Right Panel */}
      <Box sx={{
        flex: 1,
        overflowY: 'auto',
        p: theme.spacing(2),
        bgcolor: isDarkMode ? theme.palette.background.default : theme.palette.background.paper,
        height: isSmallScreen ? 'auto' : '100vh'
      }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Client List</Typography>
        <Grid container spacing={2}>
          {clientsToShow.map((client) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={client.id}>
              <Card variant="outlined" sx={{
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                },
                transition: 'box-shadow 0.3s',
              }}>
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
      </Box>
    </Box>
  );
};

export default ClientList;
