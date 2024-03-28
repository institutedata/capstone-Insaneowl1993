import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material'; // Import MUI components
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AppointmentForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log('Appointment form submitted');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add New Appointment
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Time"
              type="time"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Client Name"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Service"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
              Add Appointment
            </Button>
          </form>
          <Box sx={{ mt: 2 }}>
            <Link to="/appointments">
              <Button variant="contained" color="secondary">
                Back to Calendar
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AppointmentForm;
