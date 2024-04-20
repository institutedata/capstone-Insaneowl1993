import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './components/navBar/NavBar';
import NavBarSpacer from './components/navBar/NavBarSpacer';
import Home from './components/Home';
import ClientList from './components/client/ClientList';
import ClientForm from './components/client/ClientForm';
import AppointmentList from './components/appointment/AppointmentList';
import ServicesForm from './components/services/ServicesForm';
import ServicesList from './components/services/ServicesList';
import Login from './auth/Login';
import Register from './auth/Register';
import ThemeToggle from './components/ThemeToggle';
import './css/index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Define additional theme-specific colors
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#007bff',
      },
      secondary: {
        main: '#ffc107',
      },
      // Add other custom colors if needed
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      // Add other custom colors if needed
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Box
          className="App"
          sx={{
            textAlign: 'center',
            pt: '1rem',
            overflow: 'hidden',
            backgroundColor: (theme) => theme.palette.background.default,
            minHeight: '100vh',
          }}
        >
          <NavBar>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </NavBar>
          <NavBarSpacer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/client-form" element={<ClientForm />} />
            <Route path="/appointments" element={<AppointmentList />} />
            <Route path="/add-service" element={<ServicesForm />} />
            <Route path="/services" element={<ServicesList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
