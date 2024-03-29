// Login.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Logic for validating login credentials
    // If successful:
    onLoginSuccess(); // This should be called when login is successful
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>Login</Typography>
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
        <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
          Login
        </Button>
        <Button component={Link} to="/register" variant="outlined" color="primary">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Login;
