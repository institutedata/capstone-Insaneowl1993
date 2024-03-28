import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import ServicesForm from './components/ServicesForm';
import ServicesList from './components/ServicesList';
import Login from './auth/Login';
import Register from './auth/Register';
import ThemeToggle from './components/ThemeToggle';
import './css/index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Create light and dark themes
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
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
            backgroundColor: darkMode ? '#242424' : '#ffffff',
            minHeight: '100vh', // Ensure the box covers the entire viewport height
          }}
        >
          <NavBar>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<ClientListPage />} />
            <Route path="/client-form" element={<ClientFormPage />} />
            <Route path="/appointments" element={<AppointmentListPage />} />
            <Route path="/appointment-form" element={<AppointmentFormPage />} />
            <Route path="/add-service" element={<ServicesFormPage />} />
            <Route path="/services" element={<ServicesListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );

  function ClientListPage() {
    return (
      <Box sx={{ width: '94vw', p: 2 }}>
        <ClientList />
      </Box>
    );
  }

  function ClientFormPage() {
    return (
      <Box sx={{ width: '94vw', p: 2 }}>
        <ClientForm />
      </Box>
    );
  }

  function AppointmentListPage() {
    return (
      <Box sx={{ width: '94vw', p: 2 }}>
        <AppointmentList />
      </Box>
    );
  }

  function AppointmentFormPage() {
    return (
      <Box sx={{ width: '96vw', p: 2 }}>
        <AppointmentForm />
      </Box>
    );
  }

  function ServicesFormPage() {
    return (
      <Box sx={{ width: '96vw', p: 2 }}>
        <ServicesForm />
      </Box>
    );
  }

  function ServicesListPage() {
    return (
      <Box sx={{ width: '94vw', p: 2 }}>
        <ServicesList />
      </Box>
    );
  }

  function LoginPage() {
    return (
      <Box sx={{ width: '94vw', p: 2 }}>
        <Login />
      </Box>
    );
  }

  function RegisterPage() {
    return (
      <Box sx={{ width: '94vw', p: 2 }}>
        <Register />
      </Box>
    );
  }
}

export default App;
