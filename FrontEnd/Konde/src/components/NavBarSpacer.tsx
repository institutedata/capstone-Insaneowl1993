import React from 'react';
import { useTheme } from '@mui/material';

const NavBarSpacer = () => {
  const theme = useTheme();
  
  return (
    <div style={{ height: theme.mixins.toolbar.minHeight, [theme.breakpoints.up('sm')]: { height: theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight } }} />
  );
};

export default NavBarSpacer;