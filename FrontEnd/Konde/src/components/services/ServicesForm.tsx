import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  name: string;
  price: string;
  estimatedTime: string;
}

interface ServiceFormProps {
  onSubmit: (service: Service) => void;
}

const ServicesForm: React.FC<ServiceFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newService: Service = {
      id: Date.now(),
      name,
      price,
      estimatedTime,
    };
    onSubmit(newService);
    setName('');
    setPrice('');
    setEstimatedTime('');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width:'100vw' }}>
      <Card variant="outlined" sx={{ width: '95vw', maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Add Service
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Estimated Time"
              value={estimatedTime}
              onChange={(e) => setEstimatedTime(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
              Add Service
            </Button>
            <Button component={Link} to="/services" variant="outlined">
              Cancel
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ServicesForm;
