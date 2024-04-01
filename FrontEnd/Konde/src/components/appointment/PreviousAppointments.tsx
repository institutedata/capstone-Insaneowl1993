import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Divider, Box, Pagination } from '@mui/material';

interface AppointmentDetails {
  id: string;
  date: string;
  time: string;
  service: string;
}

interface Props {
  clientId: string;
}

const PreviousAppointments: React.FC<Props> = ({ clientId }) => {
  const [appointments, setAppointments] = useState<AppointmentDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const appointmentsPerPage = 10;
  const count = Math.ceil(appointments.length / appointmentsPerPage);

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockAppointments: AppointmentDetails[] = new Array(20).fill(null).map((_, index) => ({
        id: String(index),
        date: `2023-03-${10 + index}`,
        time: `${10 + index}:00`,
        service: `Service ${index + 1}`,
      }));
      setAppointments(mockAppointments);
      setLoading(false);
    };

    fetchAppointments();
  }, [clientId]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center' }}><Typography>Loading appointments...</Typography></Box>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>Previous Appointments</Typography>
        <Grid container spacing={2}>
          {appointments.slice((page - 1) * appointmentsPerPage, page * appointmentsPerPage).map((appointment, index) => (
            <React.Fragment key={appointment.id}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Appointment on {appointment.date} at {appointment.time}</Typography>
                <Typography variant="body1">Service: {appointment.service}</Typography>
              </Grid>
              {(index % 2 === 1 || index === appointments.length - 1) && <Grid item xs={12}><Divider /></Grid>}
            </React.Fragment>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination count={count} page={page} onChange={handleChangePage} color="primary" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PreviousAppointments;
