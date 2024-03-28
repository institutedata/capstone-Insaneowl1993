import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

// Assuming similar props and data structure as ClientDetailsComponent
interface ClientProfileProps {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

interface Props {
  clientId: string;
}

const ClientProfile: React.FC<Props> = ({ clientId }) => {
  const [clientProfile, setClientProfile] = useState<ClientProfileProps | null>(null);

  useEffect(() => {
    // Simulate fetching client profile details
    const fetchClientProfile = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const profile: ClientProfileProps = {
        id: clientId,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phoneNumber: '123-456-7890',
      };
      setClientProfile(profile);
    };

    fetchClientProfile();
  }, [clientId]);

  if (!clientProfile) {
    return <div>Loading client profile...</div>;
  }

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>Client Profile</Typography>
          {/* Conditional rendering if you don't want to display the ID */}
          {/* <Typography variant="body1">ID: {clientProfile.id}</Typography> */}
          <Typography variant="body1">Name: {clientProfile.name}</Typography>
          <Typography variant="body1">Email: {clientProfile.email}</Typography>
          <Typography variant="body1">Phone: {clientProfile.phoneNumber}</Typography>
        </CardContent>
      </Card>
      {/* Assuming you want to include PreviousAppointments or similar component */}
      {/* <PreviousAppointments clientId={clientId} /> */}
    </Box>
  );
};

export default ClientProfile;
