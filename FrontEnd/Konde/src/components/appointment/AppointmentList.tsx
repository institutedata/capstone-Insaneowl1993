import React, { useState } from 'react';
import {
  Box, Grid, Card, CardContent, Typography, Button, TextField,
  List, ListItem, ButtonBase, useTheme
} from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function AppointmentList() {
  const theme = useTheme();
  const [appointments, setAppointments] = useState([
    { id: 1, date: moment().add(1, 'days').toDate(), time: '10:00', clientName: 'Alex', type: 'Hair Coloring', start: moment().add(1, 'days').toDate(), end: moment().add(1, 'days').add(1, 'hours').toDate() },
    { id: 2, date: moment().add(2, 'days').toDate(), time: '11:00', clientName: 'Jamie', type: 'Hair Cut', start: moment().add(2, 'days').toDate(), end: moment().add(2, 'days').add(1, 'hours').toDate() },
    { id: 3, date: moment().add(3, 'days').toDate(), time: '09:30', clientName: 'Sam', type: 'Hair Styling', start: moment().add(3, 'days').toDate(), end: moment().add(3, 'days').add(1, 'hours').toDate() },
    { id: 4, date: moment().add(4, 'days').toDate(), time: '14:00', clientName: 'Pat', type: 'Hair Treatment', start: moment().add(4, 'days').toDate(), end: moment().add(4, 'days').add(1, 'hours').toDate() },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(moment().format('HH:mm'));
  const [clientName, setClientName] = useState('');
  const [service, setService] = useState('');

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setSelectedTime(moment(start).format('HH:mm'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ selectedDate, selectedTime, clientName, service });
    // Add form submission logic here
  };

  // Filter appointments to show only those on the selected date
  const filteredAppointments = appointments.filter(appointment =>
    moment(appointment.start).isSame(selectedDate, 'day')
  );

  return (
    <Grid container spacing={2}>
      {/* Calendar Panel */}
      <Grid item xs={12} md={8}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" gutterBottom>Appointment Calendar</Typography>
            <Calendar
              localizer={localizer}
              events={appointments}
              startAccessor="start"
              endAccessor="end"
              selectable
              onSelectSlot={handleSelectSlot}
              style={{ height: 500, width: '100%' }}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Appointment List and Form Panel */}
      <Grid item xs={12} md={4}>
        {/* Filtered Appointments List */}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>Appointments on {moment(selectedDate).format('LL')}</Typography>
            <List sx={{ maxHeight: 200, overflow: 'auto' }}>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment, index) => (
                  <ListItem key={index}>
                    <ButtonBase sx={{ width: '100%', textAlign: 'left' }}>
                      {moment(appointment.date).format('YYYY-MM-DD')} - {appointment.time} - {appointment.clientName} - {appointment.type}
                    </ButtonBase>
                  </ListItem>
                ))
              ) : (
                <Typography sx={{ mx: 2 }}>No appointments for this day.</Typography>
              )}
            </List>
          </CardContent>
        </Card>

        {/* Appointment Form */}
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Add New Appointment</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                value={moment(selectedDate).format('YYYY-MM-DD')}
                onChange={(e) => setSelectedDate(moment(e.target.value).toDate())}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Time"
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Client Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button type="submit" variant="contained" color="primary">Add Appointment</Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AppointmentList;
