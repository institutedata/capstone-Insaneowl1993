import React from 'react';
import { Box } from '@mui/material';
import AppointmentForm from './AppointmentForm';

const AppointmentFormPage = () => {
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <AppointmentForm />
    </Box>
  );
};

export default AppointmentFormPage;
