// Register.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {async (userData) => {
      const response = await fetch('/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
    
      return response.json();
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
      // include other necessary user fields
    };
  
    const result = await registerUser(userData);
    console.log(result); // Handle the response appropriately
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <form onSubmit={handleRegister} style={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>Register</Typography>
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
          Register
        </Button>
        <Button component={Link} to="/login" variant="outlined" color="primary">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Register;
