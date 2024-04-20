import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Grid, TextField, Button, Pagination, useTheme } from '@mui/material';

interface Service {
  id: number;
  name: string;
  price: string;
  estimatedTime: string;
}

const initialServices: Service[] = [
  { id: 1, name: 'Hair Coloring', price: '$40', estimatedTime: '90 mins' },
  { id: 2, name: 'Hair Styling', price: '$30', estimatedTime: '45 mins' },
  { id: 3, name: 'Spa Package', price: '$100', estimatedTime: '120 mins' },
  { id: 4, name: 'Waxing', price: '$15', estimatedTime: '30 mins' },
  { id: 5, name: 'Makeup Application', price: '$25', estimatedTime: '60 mins' },
  { id: 6, name: 'Eyelash Extensions', price: '$50', estimatedTime: '90 mins' },
  { id: 7, name: 'Body Scrub', price: '$35', estimatedTime: '60 mins' },
  { id: 8, name: 'Hair Extension', price: '$70', estimatedTime: '120 mins' },
  { id: 9, name: 'Teeth Whitening', price: '$60', estimatedTime: '60 mins' },
  { id: 10, name: 'Manicure', price: '$20', estimatedTime: '45 mins' },
  { id: 11, name: 'Pedicure', price: '$25', estimatedTime: '60 mins' },
  { id: 12, name: 'Facial', price: '$50', estimatedTime: '75 mins' },
  { id: 13, name: 'Massage', price: '$80', estimatedTime: '90 mins' },
  { id: 14, name: 'Acupuncture', price: '$90', estimatedTime: '60 mins' },
  { id: 15, name: 'Hot Stone Therapy', price: '$70', estimatedTime: '90 mins' },
  { id: 16, name: 'Aromatherapy', price: '$60', estimatedTime: '60 mins' },
  { id: 17, name: 'Reflexology', price: '$40', estimatedTime: '45 mins' },
  { id: 18, name: 'Thai Massage', price: '$85', estimatedTime: '90 mins' },
];

const ServicesList: React.FC = () => {
  const theme = useTheme();
  const [services, setServices] = useState<Service[]>(initialServices);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddService = (event: React.FormEvent) => {
    event.preventDefault();
    const newService: Service = { id: Date.now(), name, price, estimatedTime };
    setServices([newService, ...services]);
    setName('');
    setPrice('');
    setEstimatedTime('');
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const servicesPerPage = 12;
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (page - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const servicesForPage = filteredServices.slice(startIndex, endIndex);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  return (
    <Grid container spacing={3} alignItems="flex-start">
      {/* Service Form Panel */}
      <Grid item xs={12} md={4}>
        <Typography variant="h4" sx={{ mb: 2, color: 'text.primary' }}>Add New Service</Typography>
        <Box component="form" onSubmit={handleAddService} sx={{ mb: 4, width:'94%'}}>
          <TextField
            fullWidth
            label="Service Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2, input: { color: 'text.primary' }, label: { color: 'text.primary' } }}
          />
          <TextField
            fullWidth
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            sx={{ mb: 2, input: { color: 'text.primary' }, label: { color: 'text.primary' } }}
          />
          <TextField
            fullWidth
            label="Estimated Time"
            value={estimatedTime}
            onChange={(e) => setEstimatedTime(e.target.value)}
            sx={{ mb: 2, input: { color: 'text.primary' }, label: { color: 'text.primary' } }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ color: 'text.primary' }}>Add Service</Button>
        </Box>

        {/* Recently Added Services Panel */}
        <Typography variant="h5" sx={{ mt: 4, color: 'text.primary' }}>Recently Added</Typography>
        {services.slice(0, 3).map(service => (
          <Card key={service.id} sx={{ mb: 2, bgcolor: 'background.paper', width:'98%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'text.primary' }}>{service.name}</Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>Price: {service.price}</Typography>
              <Typography variant="body2" sx={{ color: 'text.primary' }}>Estimated Time: {service.estimatedTime}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>

      {/* Divider */}
      <Box sx={{ width: '1px', bgcolor: 'divider', height: '100%', mx: 2 }}></Box>

      {/* Services List Panel */}
      <Grid item xs={12} md={7}>
        <Typography variant="h2" sx={{ color: 'text.primary' }}>Services</Typography>
        <TextField
          fullWidth
          label="Search services"
          value={searchTerm}
          onChange={handleSearchTermChange}
          sx={{ mb: 2, input: { color: 'text.primary' }, label: { color: 'text.primary' } }}
        />
        <Grid container spacing={2}>
          {servicesForPage.map(service => (
            <Grid item key={service.id} xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ bgcolor: 'background.paper', width: '97%' }}>
                <CardContent>
                  <Typography variant="h4" sx={{ color: 'text.primary' }}>{service.name}</Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>Price: {service.price}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>Estimated Time: {service.estimatedTime}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Pagination count={totalPages} page={page} onChange={handlePageChange} sx={{ mt: 2 }} />
      </Grid>
    </Grid>
  );
};

export default ServicesList;
