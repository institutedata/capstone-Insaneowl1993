import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import hamburger menu icon
import LoginIcon from '@mui/icons-material/Login'; // Import login icon

function NavBar({ children }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                {['Clients', 'Appointments', 'Services'].map((text) => (
                    <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" color="inherit" sx={{ backgroundColor: theme.palette.background.default }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ mr: 2, display: { xs: 'flex', sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography 
                    variant="h4" 
                    component="div"
                    sx={{ 
                        flexGrow: 1,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        display: { xs: 'none', sm: 'flex' },
                        mr: 1 // Adjust margin-right to control space between title and menu items
                    }}
                >
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Konde</Link>
                </Typography>
                {/* Menu items centered for larger screens */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'left' }}>
                    <Button component={Link} to="/clients" color="inherit">Clients</Button>
                    <Button component={Link} to="/appointments" color="inherit">Appointments</Button>
                    <Button component={Link} to="/services" color="inherit">Services</Button>
                </Box>
                <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', sm: 'none' } }}>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Konde</Link>
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {children}
                    <Button component={Link} to="/login" color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Login</Button>
                    <IconButton
                        component={Link}
                        to="/login"
                        color="inherit"
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        <LoginIcon />
                    </IconButton>
                </Box>
                <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
                    {drawerContent}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
