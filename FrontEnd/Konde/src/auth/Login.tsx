import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (credentials) => {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return await response.json();
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(''); // Clear any existing errors
    try {
      const user = await login({ email, password });
      console.log('Login successful:', user);
      // Redirect or manage the user state as needed
      navigate('/dashboard'); // Update with the correct path after login
    } catch (error) {
      setError(error.message);
    }
  };

  

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>Login</Typography>
        {error && <Alert severity="error">{error}</Alert>}
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
