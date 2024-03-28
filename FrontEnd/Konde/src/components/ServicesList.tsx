import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Grid, Pagination, Button, TextField } from '@mui/material'; // Import MUI components
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

interface Service {
  id: number;
  name: string;
  price: string;
  estimatedTime: string;
}

const sampleServices: Service[] = [
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
  const [page, setPage] = useState(1); // State for pagination
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Calculate number of services per page
  const servicesPerPage = 12;

  // Filter services based on search term
  const filteredServices = sampleServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  // Calculate start and end index of services for the current page
  const startIndex = (page - 1) * servicesPerPage;
  const endIndex = Math.min(startIndex + servicesPerPage, filteredServices.length);

  // Slice services array for the current page
  const servicesForPage = filteredServices.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Handle search term change
  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page number when search term changes
  };

  return (
    <Box className="service-list-container" sx={{ width: '95vw' }}>
      <Typography variant="h2" sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#000' }}>Services</Typography>
      <TextField
        fullWidth
        label="Search services"
        value={searchTerm}
        onChange={handleSearchTermChange}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={2}>
        {servicesForPage.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4">{service.name}</Typography>
                <Typography variant="body1">Price: {service.price}</Typography>
                <Typography variant="body2">Estimated Time: {service.estimatedTime}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button component={Link} to="/add-service" variant="contained" color="primary">
          Add Service
        </Button>
      </Box>
    </Box>
  );
};

export default ServicesList;
