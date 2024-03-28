import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

interface ClientDetailsProps {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

interface Props {
  clientId: string;
}

const ClientDetails: React.FC<Props> = ({ clientId }) => {
  const [clientDetails, setClientDetails] = useState<ClientDetailsProps | null>(null);

  useEffect(() => {
    const fetchClientDetails = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const details: ClientDetailsProps = {
        id: clientId,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phoneNumber: '123-456-7890',
      };
      setClientDetails(details);
    };

    fetchClientDetails();
  }, [clientId]);

  if (!clientDetails) {
    return <Box sx={{ display: 'flex', justifyContent: 'center' }}><Typography>Loading client details...</Typography></Box>;
  }

  return (
    <Box sx={{ mt: 15 }}> {/* Adjust top margin as needed */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>Client Details</Typography>
              {/* Assuming you might want to keep the ID now. If not, just remove this line */}
              <Typography variant="body1">ID: {clientDetails.id}</Typography>
              <Typography variant="body1">Name: {clientDetails.name}</Typography>
              <Typography variant="body1">Email: {clientDetails.email}</Typography>
              <Typography variant="body1">Phone: {clientDetails.phoneNumber}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientDetails;
