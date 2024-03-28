import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Switch, Box, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import hamburger menu icon
import LoginIcon from '@mui/icons-material/Login'; // Import login icon
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Import dark mode icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Import light mode icon

function NavBar({ children }) {
    const [anchorEl, setAnchorEl] = useState(null); // State for menu anchor element
    const theme = useTheme(); // Get current theme

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget); // Open the menu
    };

    const handleMenuClose = () => {
        setAnchorEl(null); // Close the menu
    };

    return (
        <AppBar position="static" color="inherit" sx={{ backgroundColor: theme.palette.background.default }}>
            <Toolbar>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                    {/* Hamburger menu icon */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        sx={{ display: { xs: 'flex', md: 'none' }, '&:focus': { outline: 'none' } }} // Show on small screens and hide on medium screens and above
                        disableRipple  // Remove ripple effect
                        disableFocusRipple // Remove focus ripple
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{ mr: 4, color: theme.palette.text.primary }}>
                        <Link to="/" className="home-link" style={{ textDecoration: 'none', color: 'inherit' }}>Konde</Link>
                    </Typography>
                </Box>
                {/* Menu for small screens */}
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem component={Link} to="/clients" onClick={handleMenuClose}>Clients</MenuItem>
                    <MenuItem component={Link} to="/appointments" onClick={handleMenuClose}>Appointments</MenuItem>
                    <MenuItem component={Link} to="/services" onClick={handleMenuClose}>Services</MenuItem>
                </Menu>
                {/* Buttons for large screens */}
                <Button component={Link} to="/clients" color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>Clients</Button>
                <Button component={Link} to="/appointments" color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>Appointments</Button>
                <Button component={Link} to="/services" color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>Services</Button>
                <Typography sx={{ flexGrow: 1 }} />
                {/* Dark mode toggle */}
                {children}
                {/* Login button or icon */}
                <Button component={Link} to="/login" color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>Login</Button>
                <IconButton
                    component={Link}
                    to="/login"
                    edge="end"
                    color="inherit"
                    aria-label="login"
                    sx={{ display: { xs: 'block', md: 'none' } }} // Show on small screens only
                >
                    <LoginIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
