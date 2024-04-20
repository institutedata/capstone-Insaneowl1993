// ClientInfoPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ClientDetails from './ClientDetailsComponent';
import PreviousAppointments from '../appointment/PreviousAppointments';
import { Box } from '@mui/material';

const ClientInfoPage: React.FC = () => {
  const { clientId } = useParams<{ clientId: string }>();

  return (
    <Box sx={{ width: '100%', mt: 4, mb: 2 }}> {/* Adjust the top margin as needed */}
      <Box sx={{ mb: 2 }}> {/* Reduce the bottom margin to close the gap */}
        <ClientDetails clientId={clientId!} />
      </Box>
      <PreviousAppointments clientId={clientId!} />
    </Box>
  );
};

export default ClientInfoPage;
