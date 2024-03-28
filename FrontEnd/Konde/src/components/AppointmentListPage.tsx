import React from 'react';
import { Box } from '@mui/material';
import AppointmentList from './AppointmentList';

const AppointmentListPage = () => {
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <AppointmentList />
    </Box>
  );
};

export default AppointmentListPage;
