// AppointmentList.tsx
import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material'; // Import MUI components
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import calendar styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const localizer = momentLocalizer(moment); // Initialize localizer with moment

const appointments = [
  { id: 1, title: 'Hair Coloring', start: '2024-03-17T10:00:00', end: '2024-03-17T11:00:00' },
  { id: 2, title: 'Haircut', start: '2024-03-18T14:00:00', end: '2024-03-18T15:00:00' },
  { id: 3, title: 'Hair Styling', start: '2024-03-19T11:30:00', end: '2024-03-19T12:30:00' },
  { id: 4, title: 'Manicure', start: '2024-03-20T13:45:00', end: '2024-03-20T14:45:00' },
  { id: 5, title: 'Pedicure', start: '2024-03-21T15:30:00', end: '2024-03-21T16:30:00' },
];

const AppointmentList = () => {
  const events = appointments.map(appointment => ({
    id: appointment.id,
    title: appointment.title,
    start: new Date(appointment.start),
    end: new Date(appointment.end),
  }));

  return (
    <Box sx={{ width: '100vw', display:'flex', justifyContent:'center'}}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Appointment List
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Link to="/appointment-form">
              <Button variant="contained" color="primary">
                Add Appointment
              </Button>
            </Link>
          </Box>
          <div style={{ height: '500px' }}> {/* Adjust height as needed */}
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ margin: '20px' }}
            />
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AppointmentList;
